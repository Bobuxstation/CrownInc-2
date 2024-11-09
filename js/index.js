// Initialize score and cookie element
let score = parseInt(localStorage.getItem("score")) || 0;
const cookie = document.getElementById("cookie");

const clicksound = new Audio('assets/click.mp3');
const cash = new Audio("assets/cash.wav");

// Initialize score element and update function
let scoreStat = document.getElementById("score-stat");
let scoreStatToo = document.getElementById("score-stat-too");
function updateScore() {
    scoreStat.textContent = "$" + score.toLocaleString('en-US');
    scoreStatToo.textContent = "$" + score.toLocaleString('en-US');
}

// Update score on click
cookie.addEventListener("click", function () {
    clicksound.play()
    if (numEmployees == 0) {
        tempnumemployees = 1
    } else {
        tempnumemployees = numEmployees
    }
    score = parseInt(score) + (tempnumemployees * buildingAmount * clonedAmount);
    updateScore();
    localStorage.setItem("score", score);
    drawNewParticles(numEmployees + 1);
});

// Initialize employee related elements
const employeeStatCount = document.getElementById("employee-stat-count");
const workerDOMlist = document.getElementById('EmployeeMenu');
let numEmployees = parseInt(localStorage.getItem("numEmployees")) || 0;

// Initialize worker related variables
let workerTypes = [
    {
        name: "Intern",
        desc: "Basic Intern",
        cost: 10,
        increment: 1
    },
    {
        name: "Worker",
        desc: "Basic Worker",
        cost: 100,
        increment: 2
    },
    {
        name: "Advertising",
        desc: "Basic Advertising",
        cost: 100,
        increment: 2
    },
    {
        name: "Manager",
        desc: "Basic Manager",
        cost: 10000,
        increment: 5
    },
    {
        name: "Director",
        desc: "Basic Director",
        cost: 100000,
        increment: 10
    },
]

// Update building cost elements
function updateWorkerCosts() {
    workerDOMlist.innerHTML = `
        <p class="tabtitle">Hire Workers:</p>
    `

    workerTypes.forEach(element => {
        if (numEmployees != 0) {
            var totalCost = element.cost * numEmployees
        } else {
            var totalCost = element.cost
        }

        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: $" + (numEmployees * element.increment);
        card.onclick = function () {
            if (score >= totalCost) {
                score -= totalCost;
                numEmployees += element.increment;
                localStorage.setItem("numEmployees", numEmployees);
                updateWorkerCosts()
                cash.play()
            }
        }

        if (score <= totalCost) card.style.opacity = 0.5;

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerHTML = element.desc + "<span class='price'> $" + totalCost.toLocaleString('en-US') + "</span>";
        card.appendChild(price)

        workerDOMlist.appendChild(card)
    });
}

// Initialize worker counts and costs
updateWorkerCosts();

// Initialize building related elements
const buildingDOMlist = document.getElementById('building-container');
let buildingAmount = parseInt(localStorage.getItem("buildingAmount")) || 1;

// Initialize building related variables
let buildings = [
    {
        name: "Bedroom",
        desc: "Where Everything Starts.",
        cost: 100,
        increment: 1
    },
    {
        name: "Garrage",
        desc: "A step in becoming a billionare.",
        cost: 1500,
        increment: 10
    },
    {
        name: "Basement",
        desc: "We cool now?",
        cost: 15000,
        increment: 100
    },
    {
        name: "Apartement",
        desc: "Where First Big Earning Goes to.",
        cost: 50000,
        increment: 150
    },
    {
        name: "Small Office",
        desc: "Now we have an office!",
        cost: 100000,
        increment: 200
    },
    {
        name: "Office",
        desc: "Now we have a better office!",
        cost: 500000,
        increment: 250
    },
    {
        name: "Small Island",
        desc: "Mr Employee or Mr Beast?",
        cost: 1000000,
        increment: 350
    },
    {
        name: "Island",
        desc: "Welcome To Crownland!",
        cost: 10000000,
        increment: 400
    },
]

// Update building cost elements
function updateBuildingCosts() {
    buildingDOMlist.innerHTML = `
        <p class="tabtitle">Buildings:</p>
    `

    buildings.forEach(element => {
        if (buildingAmount != 0) {
            var totalCost = element.cost * buildingAmount
        } else {
            var totalCost = element.cost
        }

        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: $" + (numEmployees * element.increment);
        card.onclick = function () {
            if (score >= totalCost) {
                score -= totalCost;
                buildingAmount += element.increment;
                localStorage.setItem("buildingAmount", buildingAmount);
                updateBuildingCosts()
                cash.play()
            }
        }

        if (score <= totalCost) card.style.opacity = 0.5;

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerHTML = element.desc + "<span class='price'> $" + totalCost.toLocaleString('en-US') + "</span>";
        card.appendChild(price)

        buildingDOMlist.appendChild(card)
    });
}

// Initialize building counts and costs
updateBuildingCosts();

// Initialize clonne related elements
const cloneDOMlist = document.getElementById('repo-container');
let clonedAmount = parseInt(localStorage.getItem("clonedAmount")) || 1;

// Initialize building related variables
let repos = [
    {
        name: "JokeJungle",
        desc: "A game from a small indie team, Easy to steal.",
        cost: 1000,
        increment: 100
    },
    {
        name: "Uranium Store",
        desc: "A small game community. Will take some money to steal.",
        cost: 1500000,
        increment: 1000
    },
    {
        name: "🚾 Studios",
        desc: "A indie game group that is easy to force-acquire.",
        cost: 1500000000,
        increment: 10000
    },
    {
        name: "Project Skoo-Oh-Pine TakeUp",
        desc: "A game with a decent community. Will take alot of money to steal.",
        cost: 500000000000,
        increment: 15000
    },
    {
        name: "BrokenHill Editor",
        desc: "This will earn us alot!",
        cost: 100000000000000,
        increment: 20000
    },
    {
        name: "People's Republic Of Games Studio",
        desc: "Hardest Of All...",
        cost: 1000000000000000000,
        increment: 2000000
    }
]

// Update building cost elements
function updateRepoCosts() {
    cloneDOMlist.innerHTML = `
        <p class="tabtitle">Repositories and companies to clone (or steal):</p>
    `
    repos.forEach(element => {
        if (clonedAmount != 0) {
            var totalCost = element.cost * clonedAmount
        } else {
            var totalCost = element.cost
        }

        let card = document.createElement('div')
        card.className = "buildingCard"
        card.title = "Increments By: $" + (numEmployees * element.increment);
        card.onclick = function () {
            if (score >= totalCost) {
                score -= totalCost;
                clonedAmount += element.increment;
                localStorage.setItem("clonedAmount", clonedAmount);
                updateRepoCosts()
                cash.play()
            }
        }

        if (score <= totalCost) card.style.opacity = 0.5;

        let title = document.createElement('h3')
        title.innerText = element.name;
        card.appendChild(title)

        let price = document.createElement('p')
        price.innerHTML = element.desc + "<span class='price'> $" + totalCost.toLocaleString('en-US') + "</span>";
        card.appendChild(price)

        cloneDOMlist.appendChild(card)
    });
}

// Initialize building counts and costs
updateRepoCosts();