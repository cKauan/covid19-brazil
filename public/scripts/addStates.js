async function getUsers() {
    try {
        const states = await fetch("https://warm-spire-30010.herokuapp.com/json");
        const data = await states.json();
        showStates(data);
        showDeaths(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
function showStates(data) {
    let content = '';
    for (let state of data.data ) {
        console.log(state.state, state.cases)
        content += `
        <li>
        <span>
        <img src="https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png" alt="${state.uf}">
        ${state.state}
        </span>
        <p>${state.cases}</p>
        </li>`
    }

    document.getElementById('state-list').innerHTML = content;
}

function showDeaths(data) {
    let content = '';
    for (let cases of data.data ) {
        console.log(cases.state)
        content += ` 
        <li>
        <span>
        <img src="https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${cases.uf}.png" alt="${cases.uf}">
        ${cases.state}
        </span>
        <p>${cases.deaths}</p>
        </li>
        `
    }

    document.getElementById('death-list').innerHTML = content;
}