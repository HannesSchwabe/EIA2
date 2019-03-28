document.addEventListener("DOMContentLoaded",namenAusgabe);

function namenAusgabe() : void{
    let promptValue: string = prompt('Dein Name:')
    console.log('Hallo '+promptValue+' !')
    document.getElementById('name').innerHTML = 'Hallo '+promptValue+'!'
}
