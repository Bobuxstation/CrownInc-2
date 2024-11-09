const classifier = new Classifier()

const innocent = [
    "I swear on my innocence.",
    "I have complete faith in the justice system.",
    "The evidence against me is weak and inconclusive.",
    "I am wrongly accused, and the truth will exonerate me.",
    "I believe the facts will speak for themselves.",
    "I maintain my innocence without any doubt.",
    "I have witnesses who can attest to my whereabouts.",
    "I am confident that justice will prevail.",
    "I am eager to present my alibi and prove my innocence.",
    "I trust the court to see the lack of evidence against me.",
    "I have nothing to hide and welcome a fair trial.",
    "I am counting on a just and fair judgment.",
    "I am ready to cooperate fully with the investigation.",
    "I plead not guilty with complete certainty.",
    "I am confident that my lawyer will effectively defend my innocence.",
];

const guilty = [
    "I deeply regret my actions and the harm caused.",
    "I take full responsibility for my mistakes.",
    "I am remorseful and understand the consequences of my choices.",
    "I am willing to accept the punishment for my actions.",
    "I apologize sincerely to those affected by my behavior.",
    "I am open to making reparations for the damages caused.",
    "I am willing to cooperate with the authorities and provide information.",
    "I understand the gravity of the charges against me.",
    "I am prepared to face the consequences of my actions.",
    "I hope to use this experience to change and grow as a person.",
    "I am open to considering a plea deal to avoid a lengthy trial.",
    "I will respect and comply with any sentence given by the court.",
    "I seek guidance and support to rehabilitate and make amends.",
    "I understand the impact of my actions and the need for justice.",
    "I plead guilty with deep regret and remorse.",
];

classifier.train(innocent, "innocent");
classifier.train(guilty, "guilty");

let respect = parseInt(localStorage.getItem("respect")) || 1;

function newLawSuit() {
    let progress = 0;

    let companyname = faker.company.companyName();
    document.getElementById("lawsuitActions").innerHTML = ""
    document.getElementById("lawsuitActions").innerHTML = `<p class="tabtitle">${faker.company.companyName()} Has sent you to court!</p>`
    document.getElementById("lawsuitbox").style.display = "flex";

    let scorebar = document.createElement('div')
    scorebar.className = "score-bar"
    scorebar.style.background = 'rgba(45, 45, 45, 0.67)'
    document.getElementById('lawsuitActions').appendChild(scorebar)

    let scorebar1 = document.createElement('div')
    scorebar1.className = "score-bar"
    scorebar1.style.width = '0%'
    scorebar.appendChild(scorebar1)

    let courtroomimage = document.createElement('div')
    courtroomimage.style.backgroundImage = "url('assets/courtroom.png')"
    courtroomimage.style.minHeight = "100px"
    courtroomimage.className = "buildingCard"
    document.getElementById('lawsuitActions').appendChild(courtroomimage)

    let message = document.createElement('input')
    message.placeholder = "What would you like to say to the judge?"
    message.className = "buildingCard"
    message.style.marginTop = "0px"
    document.getElementById('lawsuitActions').appendChild(message)

    message.addEventListener("change", function () {
        let classify = classifier.predict(message.value)
        message.value = ""

        if (classify.length) {
            classify.forEach((prediction) => {
                if (prediction.label == "innocent") {
                    finalprediction = prediction;
                    progress += prediction.confidence;
                } else {
                    progress -= prediction.confidence;
                }
            })
        } else {
            console.log('No predictions returned')
            return
        }

        var playerPercent = Math.round((progress / 1) * 100);
        scorebar1.style.width = Math.floor(playerPercent) + "%";

        if (classify.length) {
            classify.forEach((prediction) => {
                if (progress > 1) {
                    scorebar1.style.width = "100%";
                    setTimeout(() => {
                        document.getElementById("lawsuitbox").style.display = "none";
                        respect += Math.floor(prediction.confidence * 100);
                    }, 500);
                };
                if (progress < 0) {
                    scorebar1.style.width = "0%";
                    setTimeout(() => {
                        document.getElementById("lawsuitbox").style.display = "none";
                        respect -= Math.floor(prediction.confidence * 100);
                    }, 500);
                };
            })
        }
    });
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


setInterval(() => {
    const randomNumber = randomIntFromInterval(numEmployees / 2, numEmployees * 2);
    if (randomNumber < numEmployees) {
        newLawSuit();
    }
}, 60000);