// player-stats.js

document.addEventListener('DOMContentLoaded', function() {
  const playerStatsContainer = document.getElementById('player-stats-container');

  if (miamiHeat && miamiHeat.playerStats && playerStatsContainer) { // Check if data and container exist
      miamiHeat.playerStats.forEach(player => {
          const playerCard = document.createElement('div');
          playerCard.classList.add('player-card');

          playerCard.innerHTML = `
              <h3>${player.name} (${player.position})</h3>
              <ul>
                  <li>Points per game: ${player.pointsPerGame}</li>
                  <li>Rebounds per game: ${player.reboundsPerGame}</li>
                  <li>Assists per game: ${player.assistsPerGame}</li>
                  <li>Field goal percentage: ${player.fieldGoalPercentage}</li>
                  <li>Three point percentage: ${player.threePointPercentage}</li>
              </ul>
          `;

          playerStatsContainer.appendChild(playerCard);
      });
  } else {
      console.error("Error: Player stats data or container not found.");
  }
});