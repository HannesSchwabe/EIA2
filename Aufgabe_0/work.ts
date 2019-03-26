document.addEventListener("DOMContentLoaded",namenAusgabe);

function namenAusgabe() {
    let promptValue = prompt('Dein Name:')
    console.log('Hallo '+promptValue+' !')
    document.getElementById('name').innerHTML = 'Hallo '+promptValue+'!'
}
