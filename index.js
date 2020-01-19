let totalScore = 0;

document.getElementById('total-score').innerText = totalScore;

const routes = [
    {length: 1, score: 1},
    {length: 2, score: 2},
    {length: 3, score: 4},
    {length: 4, score: 7},
    {length: 5, score: 10},
    {length: 6, score: 15}
];

routes.map(route => {
    document.getElementById(`button${route.length}`).addEventListener('click', () => {
        totalScore = totalScore += route.score;
        document.getElementById('total-score').innerText = totalScore;
    });
});