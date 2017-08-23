window.onload = function() {

    function count() {
        var coin = document.querySelector('.coin > input:checked').value,
            bet = document.querySelector('.bet > input:checked').value,
            sum = coin * bet * 9;
        if (sum % 2 > 0) {
            document.querySelector('#total > p').innerHTML = sum.toFixed(2);
        } else {
            document.querySelector('#total > p').innerHTML = sum;
        }
    }

    var elements = document.querySelectorAll('.set > input');

    for (var i = 0; i < elements.length; i++) {
        elements[i].onchange = function () {
            count();
        };
    }
};