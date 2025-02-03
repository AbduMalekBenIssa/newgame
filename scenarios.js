export const ScenarioTree = {
    // Scenario 1: Exam Malpractice
    'exam_malpractice': {
        background: 'education_assets/LeakedExam.webp',
        situation: "You are struggling to prepare for your final exam. A friend offers leaked exam questions, claiming everyone is using them.",
        choices: [
            {
                text: "Accept the leaked questions and use them to prepare.",
                nextId: 'exam_malpractice_outcome1',
                metrics: {
                    academicStanding: -20,
                    integrity: -30
                }
            },
            {
                text: "Refuse the offer and study with existing materials.",
                nextId: 'exam_malpractice_outcome2',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            },
            {
                text: "Report the incident to the professor or academic office.",
                nextId: 'exam_malpractice_outcome3',
                metrics: {
                    academicStanding: -10,
                    integrity: 20
                }
            }
        ]
    },
    'exam_malpractice_outcome1': {
        background: 'education_assets/LeakedExam.webp',
        situation: "The exam was changed at the last minute, and none of the leaked questions appear. You fail, dropping academic standing and still losing integrity.",
        choices: [
            {
                text: "Continue...",
                nextId: 'using_chatgpt',
                metrics: {}
            }
        ]
    },
    'exam_malpractice_outcome2': {
        background: 'education_assets/LeakedExam.webp',
        situation: "Your studying pays off, and you pass with a decent grade. Your academic standing remains stable, and your integrity increases.",
        choices: [
            {
                text: "Continue...",
                nextId: 'using_chatgpt',
                metrics: {}
            }
        ]
    },
    'exam_malpractice_outcome3': {
        background: 'education_assets/LeakedExam.webp',
        situation: "The professor thanks you but doesn’t act on it. Meanwhile, those who cheated got higher grades. Your integrity increases, but your academic standing still takes a hit.",
        choices: [
            {
                text: "Continue...",
                nextId: 'using_chatgpt',
                metrics: {}
            }
        ]
    },

    // Scenario 2: Using ChatGPT for Assignments
    'using_chatgpt': {
        background: 'education_assets/chatgpt.webp',
        situation: "Your professor bans AI-generated content, but you’re running out of time and tempted to use ChatGPT.",
        choices: [
            {
                text: "Use ChatGPT anyway with minor edits.",
                nextId: 'using_chatgpt_outcome1',
                metrics: {
                    academicStanding: 20,
                    integrity: -30
                }
            },
            {
                text: "Seek an extension from the professor.",
                nextId: 'using_chatgpt_outcome2',
                metrics: {
                    academicStanding: -10,
                    integrity: 0
                }
            },
            {
                text: "Use ChatGPT only for brainstorming and cite it properly.",
                nextId: 'using_chatgpt_outcome3',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            }
        ]
    },
    'using_chatgpt_outcome1': {
        background: 'education_assets/chatgpt.webp',
        situation: "The professor doesn’t detect AI use, and you get a good grade. Your academic standing increases, but your integrity drops significantly.",
        choices: [
            {
                text: "Continue...",
                nextId: 'witnessing_cheating',
                metrics: {}
            }
        ]
    },
    'using_chatgpt_outcome2': {
        background: 'education_assets/chatgpt.webp',
        situation: "The professor refuses, and you rush the assignment, leading to a lower grade. Your academic standing drops, but your integrity remains intact.",
        choices: [
            {
                text: "Continue...",
                nextId: 'witnessing_cheating',
                metrics: {}
            }
        ]
    },
    'using_chatgpt_outcome3': {
        background: 'education_assets/chatgpt.webp',
        situation: "The professor appreciates your ethical approach, but your final paper isn’t as strong. Your academic standing remains stable, and your integrity increases.",
        choices: [
            {
                text: "Continue...",
                nextId: 'witnessing_cheating',
                metrics: {}
            }
        ]
    },

    // Scenario 3: Witnessing Cheating in an Exam
    'witnessing_cheating': {
        background: 'education_assets/cheatingexam.webp',
        situation: "During an online exam, you see a classmate using their phone to look up answers.",
        choices: [
            {
                text: "Ignore it.",
                nextId: 'witnessing_cheating_outcome1',
                metrics: {
                    peerReputation: -20,
                    integrity: 0
                }
            },
            {
                text: "Discreetly inform the instructor.",
                nextId: 'witnessing_cheating_outcome2',
                metrics: {
                    peerReputation: -10,
                    integrity: 20
                }
            },
            {
                text: "Confront the classmate and ask them to stop.",
                nextId: 'witnessing_cheating_outcome3',
                metrics: {
                    academicStanding: -10,
                    integrity: 0
                }
            }
        ]
    },
    'witnessing_cheating_outcome1': {
        background: 'education_assets/cheatingexam.webp',
        situation: "The classmate gets caught later, and the professor is disappointed that no one reported it. Your peer reputation drops, even though your academic standing stays the same.",
        choices: [
            {
                text: "Continue...",
                nextId: 'group_project_dilemma',
                metrics: {}
            }
        ]
    },
    'witnessing_cheating_outcome2': {
        background: 'education_assets/cheatingexam.webp',
        situation: "The professor quietly investigates, and the cheater is caught. Your integrity increases, but your peer reputation takes a hit.",
        choices: [
            {
                text: "Continue...",
                nextId: 'group_project_dilemma',
                metrics: {}
            }
        ]
    },
    'witnessing_cheating_outcome3': {
        background: 'education_assets/cheatingexam.webp',
        situation: "They ignore you, and when they get caught, they blame you for helping them. Your integrity remains the same, but your academic standing is affected by the accusation.",
        choices: [
            {
                text: "Continue...",
                nextId: 'group_project_dilemma',
                metrics: {}
            }
        ]
    },

    // Scenario 4: Group Project Dilemma
    'group_project_dilemma': {
        background: 'education_assets/groupproject.webp',
        situation: "A teammate submits an AI-generated section without proper citations.",
        choices: [
            {
                text: "Submit the work as it is.",
                nextId: 'group_project_dilemma_outcome1',
                metrics: {
                    academicStanding: 20,
                    integrity: -20
                }
            },
            {
                text: "Confront the teammate and rewrite the content.",
                nextId: 'group_project_dilemma_outcome2',
                metrics: {
                    academicStanding: -10,
                    integrity: 20
                }
            },
            {
                text: "Inform the professor and take responsibility for rewriting.",
                nextId: 'group_project_dilemma_outcome3',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            }
        ]
    },
    'group_project_dilemma_outcome1': {
        background: 'education_assets/groupproject.webp',
        situation: "The professor doesn’t notice, and your group gets a high grade. Your academic standing increases, but your integrity drops.",
        choices: [
            {
                text: "Continue...",
                nextId: 'fabricating_lab_results',
                metrics: {}
            }
        ]
    },
    'group_project_dilemma_outcome2': {
        background: 'education_assets/groupproject.webp',
        situation: "The extra time spent revising causes you to miss the deadline, lowering your academic standing, but your integrity improves.",
        choices: [
            {
                text: "Continue...",
                nextId: 'fabricating_lab_results',
                metrics: {}
            }
        ]
    },
    'group_project_dilemma_outcome3': {
        background: 'education_assets/groupproject.webp',
        situation: "The professor allows a resubmission, recognizing your honesty. Your integrity rises, and your academic standing remains stable.",
        choices: [
            {
                text: "Continue...",
                nextId: 'fabricating_lab_results',
                metrics: {}
            }
        ]
    },

    // Scenario 5: Fabricating Lab Results
    'fabricating_lab_results': {
        background: 'education_assets/fabricate.webp',
        situation: "You’re running out of time to complete a lab experiment and consider fabricating data.",
        choices: [
            {
                text: "Falsify the data and submit the report.",
                nextId: 'fabricating_lab_results_outcome1',
                metrics: {
                    academicStanding: -30,
                    integrity: -30
                }
            },
            {
                text: "Explain the situation to the professor.",
                nextId: 'fabricating_lab_results_outcome2',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            },
            {
                text: "Work overtime to complete it properly.",
                nextId: 'fabricating_lab_results_outcome3',
                metrics: {
                    academicStanding: -10,
                    integrity: 0
                }
            }
        ]
    },
    'fabricating_lab_results_outcome1': {
        background: 'education_assets/fabricate.webp',
        situation: "The professor double-checks your work and notices inconsistencies. You receive a zero, dropping your academic standing significantly.",
        choices: [
            {
                text: "Continue...",
                nextId: 'plagiarized_essay',
                metrics: {}
            }
        ]
    },
    'fabricating_lab_results_outcome2': {
        background: 'education_assets/fabricate.webp',
        situation: "The professor grants you an extension. Your academic standing remains stable, and your integrity improves.",
        choices: [
            {
                text: "Continue...",
                nextId: 'plagiarized_essay',
                metrics: {}
            }
        ]
    },
    'fabricating_lab_results_outcome3': {
        background: 'education_assets/fabricate.webp',
        situation: "You run out of time and submit incomplete results, leading to a lower grade despite your ethical approach.",
        choices: [
            {
                text: "Continue...",
                nextId: 'plagiarized_essay',
                metrics: {}
            }
        ]
    },

    // Scenario 6: Plagiarized Essay in Literature Class
    'plagiarized_essay': {
        background: 'education_assets/copyessay.webp',
        situation: "You find an old essay online that closely matches your topic and consider using it.",
        choices: [
            {
                text: "Copy the essay and submit it.",
                nextId: 'plagiarized_essay_outcome1',
                metrics: {
                    academicStanding: 20,
                    integrity: -20
                }
            },
            {
                text: "Use it as a source and cite it properly.",
                nextId: 'plagiarized_essay_outcome2',
                metrics: {
                    academicStanding: -10,
                    integrity: 20
                }
            },
            {
                text: "Write your own essay from scratch.",
                nextId: 'plagiarized_essay_outcome3',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            }
        ]
    },
    'plagiarized_essay_outcome1': {
        background: 'education_assets/copyessay.webp',
        situation: "The professor doesn’t detect plagiarism, and you receive a high grade. Your academic standing increases, but your integrity takes a hit.",
        choices: [
            {
                text: "Continue...",
                nextId: 'falsely_claiming_hours',
                metrics: {}
            }
        ]
    },
    'plagiarized_essay_outcome2': {
        background: 'education_assets/copyessay.webp',
        situation: "The professor believes you relied too much on external sources and gives you a lower grade. Your academic standing drops slightly, but your integrity improves.",
        choices: [
            {
                text: "Continue...",
                nextId: 'falsely_claiming_hours',
                metrics: {}
            }
        ]
    },
    'plagiarized_essay_outcome3': {
        background: 'education_assets/copyessay.webp',
        situation: "You produce an original essay and earn a solid grade. Your academic standing remains stable, and your integrity rises.",
        choices: [
            {
                text: "Continue...",
                nextId: 'falsely_claiming_hours',
                metrics: {}
            }
        ]
    },

    // Scenario 7: Falsely Claiming Community Service Hours
    'falsely_claiming_hours': {
        background: 'education_assets/communityhours.webp',
        situation: "You need extra volunteer hours for an academic award but are short on time.",
        choices: [
            {
                text: "Exaggerate the hours.",
                nextId: 'falsely_claiming_hours_outcome1',
                metrics: {
                    academicStanding: 20,
                    integrity: -20
                }
            },
            {
                text: "Report the real hours.",
                nextId: 'falsely_claiming_hours_outcome2',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            },
            {
                text: "Quickly complete extra hours.",
                nextId: 'falsely_claiming_hours_outcome3',
                metrics: {
                    academicStanding: 10,
                    integrity: 20
                }
            }
        ]
    },
    'falsely_claiming_hours_outcome1': {
        background: 'education_assets/communityhours.webp',
        situation: "No one checks, and you qualify for the award. Your academic standing increases, but your integrity decreases.",
        choices: [
            {
                text: "Continue...",
                nextId: 'ghostwriting_thesis',
                metrics: {}
            }
        ]
    },
    'falsely_claiming_hours_outcome2': {
        background: 'education_assets/communityhours.webp',
        situation: "You miss the award requirements. Your integrity improves, but your academic standing remains lower.",
        choices: [
            {
                text: "Continue...",
                nextId: 'ghostwriting_thesis',
                metrics: {}
            }
        ]
    },
    'falsely_claiming_hours_outcome3': {
        background: 'education_assets/communityhours.webp',
        situation: "You finish just in time and qualify fairly. Your integrity rises, and your academic standing improves slightly.",
        choices: [
            {
                text: "Continue...",
                nextId: 'ghostwriting_thesis',
                metrics: {}
            }
        ]
    },

    // Scenario 8: Ghostwriting a Final Thesis
    'ghostwriting_thesis': {
        background: 'education_assets/ghostwrite.webp',
        situation: "A friend offers to write your thesis for you.",
        choices: [
            {
                text: "Let them ghostwrite it.",
                nextId: 'ghostwriting_thesis_outcome1',
                metrics: {
                    academicStanding: -30,
                    integrity: -30
                }
            },
            {
                text: "Ask for proofreading only.",
                nextId: 'ghostwriting_thesis_outcome2',
                metrics: {
                    academicStanding: 0,
                    integrity: 20
                }
            },
            {
                text: "Request an extension or more guidance.",
                nextId: 'ghostwriting_thesis_outcome3',
                metrics: {
                    academicStanding: -10,
                    integrity: 0
                }
            }
        ]
    },
    'ghostwriting_thesis_outcome1': {
        background: 'education_assets/ghostwrite.webp',
        situation: "The professor notices inconsistencies in your past work and fails you. Your academic standing drops, and your integrity is ruined.",
        choices: [
            {
                text: "Continue...",
                nextId: 'colluding_takehome_test',
                metrics: {}
            }
        ]
    },
    'ghostwriting_thesis_outcome2': {
        background: 'education_assets/ghostwrite.webp',
        situation: "Your paper is stronger, and your academic standing remains stable while maintaining integrity.",
        choices: [
            {
                text: "Continue...",
                nextId: 'colluding_takehome_test',
                metrics: {}
            }
        ]
    },
    'ghostwriting_thesis_outcome3': {
        background: 'education_assets/ghostwrite.webp',
        situation: "The professor denies the extension, forcing you to submit a weaker paper. Your academic standing drops slightly, but your integrity is intact.",
        choices: [
            {
                text: "Continue...",
                nextId: 'colluding_takehome_test',
                metrics: {}
            }
        ]
    },

    // Scenario 9: Colluding on a Take-Home Test
    'colluding_takehome_test': {
        background: 'education_assets/takehome.webp',
        situation: "Your professor assigns a take-home exam that must be completed individually. A group of classmates suggests splitting the work so everyone finishes faster and gets better answers.",
        choices: [
            {
                text: "Join the collusion and share answers.",
                nextId: 'colluding_takehome_test_outcome1',
                metrics: {
                    academicStanding: 20,
                    integrity: -20
                }
            },
            {
                text: "Refuse and complete it alone.",
                nextId: 'colluding_takehome_test_outcome2',
                metrics: {
                    academicStanding: -10,
                    integrity: 20
                }
            },
            {
                text: "Report the group to the professor.",
                nextId: 'colluding_takehome_test_outcome3',
                metrics: {
                    peerReputation: -20,
                    integrity: 20
                }
            }
        ]
    },
    'colluding_takehome_test_outcome1': {
        background: 'education_assets/takehome.webp',
        situation: "The professor doesn’t detect the cheating, and you receive a high score. Your academic standing improves, but your integrity decreases.",
        choices: [
            {
                text: "Continue...",
                nextId: 'lying_for_friend',
                metrics: {}
            }
        ]
    },
    'colluding_takehome_test_outcome2': {
        background: 'education_assets/takehome.webp',
        situation: "You struggle with some difficult questions and get a lower grade than your classmates. Your academic standing drops slightly, but your integrity remains strong.",
        choices: [
            {
                text: "Continue...",
                nextId: 'lying_for_friend',
                metrics: {}
            }
        ]
           
    },
    'colluding_takehome_test_outcome3': {
        background: 'education_assets/takehome.webp',
        situation:  "The professor investigates, but no hard proof is found. Your classmates suspect you and socially exclude you. Your peer reputation takes a hit, but your integrity rises."
        ,
        choices: [
            {
                text: "Continue...",
                nextId: 'lying_for_friend',
                metrics: {}
            }
        ]
    },
   // Scenario 10: Lying to Cover for a Friend
'lying_for_friend': {
    background: 'education_assets/lyingfriend.webp',
    situation: "A friend asks you to lie for them, saying they were sick and couldn’t complete an assignment, when in reality they just procrastinated.",
    choices: [
        {
            text: "Cover for them and lie to the professor.",
            nextId: 'lying_for_friend_outcome1',
            metrics: {
                peerReputation: 20,
                integrity: -20
            }
        },
        {
            text: "Tell the professor the truth.",
            nextId: 'lying_for_friend_outcome2',
            metrics: {
                peerReputation: -20,
                integrity: 20
            }
        },
        {
            text: "Say nothing and let your friend handle it.",
            nextId: 'lying_for_friend_outcome3',
            metrics: {
                peerReputation: 0,
                integrity: 0
            }
        }
    ]
},

'lying_for_friend_outcome1': {
    background: 'education_assets/lyingfriend.webp',
    situation: "The professor believes you, and your friend gets an extension. Your peer reputation increases, but your integrity takes a hit.",
    choices: [
        {
            text: "Continue...",
            nextId: 'end',
            metrics: {}
        }
    ]
},

'lying_for_friend_outcome2': {
    background: 'education_assets/lyingfriend.webp',
    situation: "Your friend resents you, and your peer reputation decreases, but your integrity increases.",
    choices: [
        {
            text: "Continue...",
            nextId: 'end',
            metrics: {}
        }
    ]
},

'lying_for_friend_outcome3': {
    background: 'education_assets/lyingfriend.webp',
    situation: "Your friend figures out another excuse without your involvement. Your peer reputation and integrity remain stable.",
    choices: [
        {
            text: "Continue...",
            nextId: 'end',
            metrics: {}
        }
    ]
},

'end': {
        background: 'education_assets/end.png',
        situation: "Thank you for playing. Reflect on your choices and their outcomes.",
        choices: [
            {
                text: "Play Again",
                nextId: 'start',
                metrics: {}
            }
        ]
    }
};
    
