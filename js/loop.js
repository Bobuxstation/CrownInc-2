// Initialize game loop to update score and employee click rate
function statLoop() {
    let buildingAmountStat = document.getElementById('building-stat');
    buildingAmountStat.innerText = buildingAmount.toLocaleString('en-US');

    let repoStat = document.getElementById('repo-stat');
    repoStat.innerText = clonedAmount.toLocaleString('en-US');

    let respectStat = document.getElementById('respect-stat');
    respectStat.innerText = respect.toLocaleString('en-US');

    let workerStat = document.getElementById('employee-stat-count');
    workerStat.innerText = numEmployees.toLocaleString('en-US');

    updateScore();
    localStorage.setItem("score", score);
}

function gameLoop() {
    if (numEmployees > 0) {
        score = parseInt(score) + (numEmployees * buildingAmount * clonedAmount);
    }

    checkAchievements();
    updateBuildingCosts()
    updateRepoCosts()
    updateWorkerCosts();

    drawNewParticles(numEmployees)
}

setInterval(statLoop, 1)
setInterval(gameLoop, 1000)