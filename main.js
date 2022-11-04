function createGame(team1, hour, team2){
    return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira Alemanha" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Bandeira Japão" />
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games){
    delay += 0.3; 
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard('24/11', 'quinta', createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia')
        ) +
        createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland')) + 
        createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))