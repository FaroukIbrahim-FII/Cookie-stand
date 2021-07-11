'use strict';
let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ',];
let TotalCookies = 0;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    cust: 0,
    AvgCookie: 6.3,
    seattleCookiesArr: [0],
    getCust: function () {
        return this.cust = random(23, 65);
        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        let secElement = document.getElementById('stores');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.AvgCookie * this.seattleCookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Seattle.render();

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    cust: 0,
    AvgCookie: 1.2,
    tokyoCookiesArr: [0],
    getCust: function () {
        return this.cust = random(3, 24);
        // console .log(this.cust);
    },
    // console.log(tokyo.getCust());
    render: function () {
        let secElement = document.getElementById('stores');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.tokyoCookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.AvgCookie * this.tokyoCookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
tokyo.render();

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    cust: 0,
    AvgCookie: 3.7,
    dubaiCookiesArr: [0],
    getCust: function () {
        return this.cust = random(11, 38);
        // console .log(this.cust);
    },
    // console.log(dubai.getCust());
    render: function () {
        let secElement = document.getElementById('stores');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.dubaiCookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.AvgCookie * this.dubaiCookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
dubai.render();

let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    cust: 0,
    AvgCookie:  2.3,
    parisCookiesArr: [0],
    getCust: function () {
        return this.cust = random(20, 38);
        // console .log(this.cust);
    },
    // console.log(paris.getCust());
    render: function () {
        let secElement = document.getElementById('stores');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.parisCookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.AvgCookie * this.parisCookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
paris.render();

let lima = {
    name: 'Lima',
    min: 2,
    max:  16,
    cust: 0,
    AvgCookie:  4.6,
    limaCookiesArr: [0],
    getCust: function () {
        return this.cust = random(2, 16);
        // console .log(this.cust);
    },
    // console.log(lima.getCust());
    render: function () {
        let secElement = document.getElementById('stores');
        let paraElement = document.createElement('p');
        secElement.appendChild(paraElement);
        paraElement.textContent = this.name;
        let unordElement = document.createElement('ul');
        secElement.appendChild(unordElement);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.limaCookiesArr[i] = this.getCust();
            let totAvCok = Math.round(this.AvgCookie * this.limaCookiesArr[i]);
            unordElement.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totAvCok + ' Cookies';
            TotalCookies += totAvCok;
            if (i === 14) {
                let liElement = document.createElement('li');
                unordElement.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
lima.render();
