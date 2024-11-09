function hireMenu() {
    var x = document.getElementById("EmployeeMenu");
    x.style.display = "block";
    document.getElementById("stats-container").style.display = "none";
    document.getElementById("building-container").style.display = "none";
    document.getElementById("repo-container").style.display = "none";
}

function buildingMenu() {
    var x = document.getElementById("building-container");
    x.style.display = "block";
    document.getElementById("stats-container").style.display = "none";
    document.getElementById("repo-container").style.display = "none";
    document.getElementById("EmployeeMenu").style.display = "none";
}

function cloneMenu() {
    var x = document.getElementById("repo-container");
    x.style.display = "block";
    document.getElementById("stats-container").style.display = "none";
    document.getElementById("building-container").style.display = "none";
    document.getElementById("EmployeeMenu").style.display = "none";
}

function statsMenu() {
    var x = document.getElementById("stats-container");
    x.style.display = "block";
    document.getElementById("repo-container").style.display = "none";
    document.getElementById("building-container").style.display = "none";
    document.getElementById("EmployeeMenu").style.display = "none";
}