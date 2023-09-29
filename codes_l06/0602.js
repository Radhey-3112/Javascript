let btn = document.getElementById('btnRate');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            alert(`You rated: ${rate.value}`);
        }
    })
});