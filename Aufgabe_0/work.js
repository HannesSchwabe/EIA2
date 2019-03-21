document.addEventListener("DOMContentLoaded", namenAusgabe);
function namenAusgabe() {
    var promptValue = prompt('Dein Name:');
    console.log('Hallo ' + promptValue + ' !');
    document.getElementById('name').innerHTML = 'Hallo ' + promptValue + '!';
}
//# sourceMappingURL=work.js.map