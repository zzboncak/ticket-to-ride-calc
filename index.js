let routesHistory = [];

const routes = [
    {length: 1, score: 1},
    {length: 2, score: 2},
    {length: 3, score: 4},
    {length: 4, score: 7},
    {length: 5, score: 10},
    {length: 6, score: 15}
];

function displayScore() {
    document.getElementById('total-score').innerText = routesHistory.reduce((a, b) => a + b, 0);
}

function updateRouteHistory(score) {
    document.getElementById('routes-history').innerHTML += `<span class="route">${score} </span>`;
}

function undoRoute() {
    routesHistory.pop();
    let spans = document.getElementById('routes-history');
    spans.removeChild(spans.childNodes[spans.childNodes.length - 1]);
    displayScore();
}

function generateButtonListeners() {
    routes.forEach(route => {
        document.getElementById(`button${route.length}`).addEventListener('click', () => {
            routesHistory.push(route.score);
            let position = routesHistory.length - 1;
            displayScore();
            updateRouteHistory(route.score, position);
        });
    });

    document.getElementById('clear').addEventListener('click', () => {
        routesHistory = [];
        document.getElementById('routes-history').innerHTML = ``;
        displayScore();
    });

    document.getElementById('go-back').addEventListener('click', () => {
        undoRoute();
    })
}

generateButtonListeners();