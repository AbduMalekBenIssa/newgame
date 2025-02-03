export async function sendGameDataToMindStudio(jsonData) {
    try {
      // Send the game data to MindStudio API
      const response = await fetch(
        'https://api.mindstudio.ai/developer/v2/workers/run',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer skh9QtOgDcKAyGQ64qqi8Q2yeOIiaiycoec0Q8eQeagoEcIG0WAEugEaew6osWKSKOi8sagaCuIgWyCiIuaA4iYQ',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            workerId: 'b76bf40b-5e1e-4966-abf2-7bb3be25f9b4',
            variables: {
              gameData: JSON.stringify(jsonData),

            },
            workflow: 'Main.flow',
          }),
        },
      );
      
      // Parse the response
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
  
      console.log('Analysis received:', data);
      return data; // Return the AI analysis to be used elsewhere
    } catch (error) {
      console.error('Error communicating with MindStudio API:', error);
      return null;
    }
  }
  
  
   