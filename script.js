let rub1 = document.querySelector('.rub1');
let usd1 = document.querySelector('.usd1');
let eur1 = document.querySelector('.eur1');
let gbp1 = document.querySelector('.gbp1');
let rub2 = document.querySelector('.rub2');
let usd2 = document.querySelector('.usd2');
let eur2 = document.querySelector('.eur2');
let gbp2 = document.querySelector('.gbp2');

let currency1 = document.querySelector('currency-1-parent')

let firstInput = document.querySelector('#first-input');
let secondInput = document.querySelector('#second-input');

let p1 = document.querySelector('.show1');
let p2 = document.querySelector('.show2');


function bg1(event) {
    rub1.classList.remove('purple1');
    usd1.classList.remove('purple1');
    eur1.classList.remove('purple1');
    gbp1.classList.remove('purple1');
    event.target.classList.add('purple1');
}

function bg2(event) {
    rub2.classList.remove('purple2');
    usd2.classList.remove('purple2');
    eur2.classList.remove('purple2');
    gbp2.classList.remove('purple2');
    event.target.classList.add('purple2')
}

let first;
let second;





rub1.addEventListener('click', (e) => {
    bg1(e)
    first = 'RUB'
});
usd1.addEventListener('click', (e) => {
    bg1(e)
    first = 'USD'
});
eur1.addEventListener('click', (e) => {
    bg1(e)
    first = 'EUR'
});
gbp1.addEventListener('click', (e) => {
    bg1(e)
    first = 'GBP'
});



function operate() {

    fetch(`https://api.exchangerate.host/latest?base=${first}&symbols=${second}`)
        .then(response => response.json())
        .then((data) => {

            secondInput.value = parseFloat((firstInput.value * data.rates[`${second}`]));
            firstInput.addEventListener('keyup', () => {
                if (firstInput.value[firstInput.value.length - 1] == ',') {
                    let p = firstInput.value.split(',').join('.')
                    firstInput.value = p
                }
                secondInput.value = parseFloat((firstInput.value * data.rates[`${second}`]));
            })
            let parag = `1${first} = ${parseFloat(data.rates[`${second}`]).toFixed(4)}${second}`;
            p1.innerText = parag

            let parag2 = `1${second} = ${parseFloat(1 / data.rates[`${second}`]).toFixed(4)}${first}`;
            p2.innerText = parag2
        })


}


rub2.addEventListener('click', (e) => {
    bg2(e)
    second = 'RUB'
    operate()
    rub1.addEventListener('click', (e) => {
        bg1(e)
        first = 'RUB'
        operate()
    });
    usd1.addEventListener('click', (e) => {
        bg1(e)
        first = 'USD'
        operate()
    });
    eur1.addEventListener('click', (e) => {
        bg1(e)
        first = 'EUR'
        operate()
    });
    gbp1.addEventListener('click', (e) => {
        bg1(e)
        first = 'GBP'
        operate()
    });

});

usd2.addEventListener('click', (e) => {
    bg2(e)
    second = 'USD'
    operate()
    rub1.addEventListener('click', (e) => {
        bg1(e)
        first = 'RUB'
        operate()
    });
    usd1.addEventListener('click', (e) => {
        bg1(e)
        first = 'USD'
        operate()
    });
    eur1.addEventListener('click', (e) => {
        bg1(e)
        first = 'EUR'
        operate()
    });
    gbp1.addEventListener('click', (e) => {
        bg1(e)
        first = 'GBP'
        operate()
    });


});

eur2.addEventListener('click', (e) => {
    bg2(e)
    second = 'EUR'
    operate()
    rub1.addEventListener('click', (e) => {
        bg1(e)
        first = 'RUB'
        operate()
    });
    usd1.addEventListener('click', (e) => {
        bg1(e)
        first = 'USD'
        operate()
    });
    eur1.addEventListener('click', (e) => {
        bg1(e)
        first = 'EUR'
        operate()
    });
    gbp1.addEventListener('click', (e) => {
        bg1(e)
        first = 'GBP'
        operate()
    });

});

gbp2.addEventListener('click', (e) => {
    bg2(e)
    second = 'GBP'
    operate()
    rub1.addEventListener('click', (e) => {
        bg1(e)
        first = 'RUB'
        operate()
    });
    usd1.addEventListener('click', (e) => {
        bg1(e)
        first = 'USD'
        operate()
    });
    eur1.addEventListener('click', (e) => {
        bg1(e)
        first = 'EUR'
        operate()
    });
    gbp1.addEventListener('click', (e) => {
        bg1(e)
        first = 'GBP'
        operate()
    });
});

