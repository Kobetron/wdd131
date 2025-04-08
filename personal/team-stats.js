// team-stats.js

document.addEventListener('DOMContentLoaded', function() {
    const teamStatsContainer = document.getElementById('team-stats-container');

    if (miamiHeat && miamiHeat.teamStats && teamStatsContainer) { // Check if data and container exist
        const teamStatDiv = document.createElement('div');
        teamStatDiv.classList.add('team-stat');

        teamStatDiv.innerHTML = `
            <h3>Team Statistics</h3>
            <ul>
                <li>Wins: ${miamiHeat.teamStats.wins}</li>
                <li>Losses: ${miamiHeat.teamStats.losses}</li>
                <li>Points per game: ${miamiHeat.teamStats.pointsPerGame}</li>
                <li>Rebounds per game: ${miamiHeat.teamStats.reboundsPerGame}</li>
                <li>Assists per game: ${miamiHeat.teamStats.assistsPerGame}</li>
                <li>Field goal percentage: ${miamiHeat.teamStats.fieldGoalPercentage}</li>
                <li>Three point percentage: ${miamiHeat.teamStats.threePointPercentage}</li>
                <li>Free throw percentage: ${miamiHeat.teamStats.freeThrowPercentage}</li>
            </ul>
        `;

        teamStatsContainer.appendChild(teamStatDiv);
    } else {
        console.error("Error: Team stats data or container not found.");
    }
});