import { ScenarioTree } from './scenarios.js';
import { sendGameDataToMindStudio } from './analysis.js';

class Game {
  constructor() {
    this.sessionId = 'user' + Math.random().toString(36).substr(2, 5);
    this.startTime = Date.now();
    this.metrics = {
      decisions: [],
      academicStanding: 50,
      peerReputation: 50,
      integrity: 50
    };
    this.currentScenario = 'exam_malpractice';
    this.container = null;
    this.decisionStartTime = null;
    this.firstDisplay = true;
    this.hasSeenIntro = false;
  }

  initialize() {
    this.container = document.querySelector('.game-container');
    if (!this.hasSeenIntro) {
      this.showIntroScreen();
    } else {
      this.displayScenario(this.currentScenario);
    }
  }

  showIntroScreen() {
    this.container.innerHTML = `
      <div class="intro-screen">
        <div class="intro-content">
          <h1>Welcome to the Ethics Game</h1>
          <div class="intro-text">
            <p>Navigate through real-world academic scenarios and make decisions that will impact your:</p>
            <ul>
              <li>🎓 Academic Standing</li>
              <li>👥 Peer Reputation</li>
              <li>⭐ Personal Integrity</li>
            </ul>
            <p>Your choices matter! Each decision will affect these metrics differently.</p>
            <p>At the end, you'll receive personalized insights about your decision-making journey.</p>
          </div>
          <button class="choice-btn start-btn">Start Your Journey</button>
        </div>
      </div>
    `;

    const startButton = this.container.querySelector('.start-btn');
    startButton.addEventListener('click', () => {
      this.hasSeenIntro = true;
      this.displayScenario(this.currentScenario);
    });
  }

  displayScenario(scenarioId) {
    const scenario = ScenarioTree[scenarioId];
    if (!scenario) {
      console.error('Invalid scenario:', scenarioId);
      return;
    }

    const choicesHTML = scenario.choices.map((choice, index) => `
      <button class="choice-btn" data-choice="${index}">
        ${choice.text}
      </button>
    `).join('');

    // Use the .animate class only on the first display
    const statusClass = this.firstDisplay ? 'status-display animate' : 'status-display';

    this.container.innerHTML = `
      <div class="scene" style="background-image: url('${scenario.background}');">
        <div class="${statusClass}">
          🎓 Academic Standing: ${this.metrics.academicStanding} | 
          👥 Peer Reputation: ${this.metrics.peerReputation} | 
          ⭐ Integrity: ${this.metrics.integrity}
        </div>
        <div class="dialogue-box">
          <p class="scenario-text">${scenario.situation}</p>
          <div class="choices">
            ${choicesHTML}
          </div>
        </div>
      </div>
    `;

    // After the first time, ensure we don't animate again.
    this.firstDisplay = false;
    this.decisionStartTime = Date.now();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const buttons = this.container.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const choiceIndex = e.target.dataset.choice;
        this.makeChoice({ choice: choiceIndex });
      });
    });
  }

  makeChoice(choiceData) {
    const timeSpent = Date.now() - this.decisionStartTime;
    const scenario = ScenarioTree[this.currentScenario];
    const choice = scenario.choices[parseInt(choiceData.choice)];

    const isContinueChoice = choice.text.toLowerCase().includes('continue') ||
      choice.text.toLowerCase().includes('see results') ||
      choice.text.toLowerCase().includes('view final results');

    if (!isContinueChoice) {
      const metricsBefore = {
        academicStanding: this.metrics.academicStanding,
        peerReputation: this.metrics.peerReputation,
        integrity: this.metrics.integrity
      };

      if (choice.metrics) {
        if (choice.metrics.academicStanding !== undefined) {
          this.metrics.academicStanding += choice.metrics.academicStanding;
        }
        if (choice.metrics.peerReputation !== undefined) {
          this.metrics.peerReputation += choice.metrics.peerReputation;
        }
        if (choice.metrics.integrity !== undefined) {
          this.metrics.integrity += choice.metrics.integrity;
        }
      }

      this.metrics.decisions.push({
        scenarioId: this.currentScenario,
        title: scenario.title || this.currentScenario,
        choice: choice.text,
        timeTaken: Math.round(timeSpent / 1000),
        context: {
          academicStandingBefore: metricsBefore.academicStanding,
          academicStandingAfter: this.metrics.academicStanding,
          peerReputationBefore: metricsBefore.peerReputation,
          peerReputationAfter: this.metrics.peerReputation,
          integrityBefore: metricsBefore.integrity,
          integrityAfter: this.metrics.integrity
        },
        outcome: choice.outcome || "Choice made.",
        notes: choice.notes || "Player made a decision."
      });
    }

    if (choice.nextId === 'end') {
      this.endGame();
    } else {
      this.currentScenario = choice.nextId;
      this.displayScenario(choice.nextId);
    }
  }

  async endGame() {
    const totalPlayTime = Date.now() - this.startTime;
    const decisions = this.metrics.decisions;
    let totalTime = 0;

    decisions.forEach(decision => {
      totalTime += decision.timeTaken;
    });

    const finalMetrics = {
      sessionId: this.sessionId,
      totalPlayTime: totalPlayTime,
      scenarios: this.metrics.decisions,
      overallStats: {
        averageTimePerDecision: Math.round((totalTime / decisions.length) * 10) / 10,
        academicStanding: this.metrics.academicStanding,
        peerReputation: this.metrics.peerReputation,
        integrity: this.metrics.integrity
      }
    };

    // Updated the analysis loading section to use a full-screen overlay
    this.container.innerHTML = `
      <div class="analysis-loading">
          <p class="scenario-text">Analyzing your journey...</p>
          <div class="spinner"></div>
      </div>
    `;

    try {
      const analysis = await sendGameDataToMindStudio(finalMetrics);
      console.log('Analysis received:', analysis);

      const sidebarButtons = this.metrics.decisions.map((decision, index) => {
        // Create a short, clean title
        let cleanTitle = decision.title || `Scenario ${index + 1}`;
        cleanTitle = cleanTitle
          .replace('exam_malpractice', 'Exam Ethics')
          .replace('peer_pressure', 'Peer Pressure')
          .replace('group_project', 'Group Work')
          .replace('research_ethics', 'Research')
          .replace('plagiarism', 'Citations')
          .replace(/_/g, ' ') // catch any remaining underscores
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');

        return `
          <button class="scenario-btn" data-scenario="${index}">
            ${cleanTitle}
          </button>
        `;
      }).join('');

      this.container.innerHTML = `
        <div class="analysis-scene">
          <div class="analysis-sidebar">
            <button class="scenario-btn overall-btn" data-scenario="overall">
              OVERALL RESULTS
            </button>
            ${sidebarButtons}
            <button class="scenario-btn play-again" onclick="location.reload()">
              Play Again
            </button>
          </div>
          <div id="insights-display">
            <h2>Your Journey Analysis</h2>
            <div class="insights-text">
              ${analysis.result.insights.overallInsight || 'No overall insights available.'}
            </div>
          </div>
        </div>
      `;

      const buttons = this.container.querySelectorAll('.scenario-btn');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          buttons.forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');

          const scenarioIndex = e.target.dataset.scenario;
          const insightsDisplay = document.getElementById('insights-display');

          if (scenarioIndex === 'overall') {
            insightsDisplay.innerHTML = `
              <h2>Your Journey Analysis</h2>
              <div class="insights-text">
                ${analysis.result.insights.overallInsight || 'No overall insights available.'}
              </div>
            `;
          } else {
            const scenario = this.metrics.decisions[scenarioIndex];
            const scenarioInsight = analysis.result.insights.scenarioInsights[scenarioIndex];
            insightsDisplay.innerHTML = `
              <h2>${scenario.title}</h2>
              <div class="insights-text">
                ${scenarioInsight.insight || 'No specific insights available for this scenario.'}
              </div>
            `;
          }
        });
      });

      this.container.querySelector('.overall-btn').classList.add('active');

    } catch (error) {
      console.error('Error getting analysis:', error);
      this.container.innerHTML = `
        <div class="scene">
          <div class="dialogue-box">
            <p class="scenario-text">Unable to analyze your journey. Please try again.</p>
            <button class="choice-btn" onclick="location.reload()">Play Again</button>
          </div>
        </div>
      `;
    }
  }
}

export default Game;
