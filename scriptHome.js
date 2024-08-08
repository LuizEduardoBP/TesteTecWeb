document.addEventListener('DOMContentLoaded', () => {
    const logout = document.getElementById("logout");

    logout.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'loginPage.html';
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const buttonId = document.getElementById('buttonId');
    const logout = document.getElementById("logout");
    const body = document.body;

    const browser = document.getElementById('browser');

    const userAgent = navigator.userAgent;
    let browserName = '';

    if(userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
    } else if (userAgent.indexOf('SamsungBrowser') > -1) {
        browserName = 'Samsung Internet';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
    } else if (userAgent.indexOf('Edge') > -1) {
        browserName = 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Safari';
    }

    browser.textContent = 'Você está utilizando o ' + browserName;



    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        logout.classList.add('dark');
        buttonId.classList.add('dark');
        buttonId.textContent = '🌞';
    }

    buttonId.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            logout.classList.remove('dark');
            buttonId.classList.remove('dark');
            buttonId.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            logout.classList.add('dark');
            buttonId.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            buttonId.textContent = '🌞';
        }
    });
});