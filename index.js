window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.first-page'),
        hamburger = document.querySelector('.hamburger-button'),
        close = document.querySelector('.header-icon-close'),
        services = document.querySelector('.services'),
        second_page = document.querySelector('.second-page'),
        second_page_back = document.querySelector('.second-page-heading'),
        cloud_calculations = document.querySelector('.cloud-calculations'),
        third_page = document.querySelector('.third-page'),
        third_page_heading = document.querySelector('.third-page-heading'),
        myDropdown = document.querySelector('.dropdown-content'),
        dropdownButton = document.querySelector('.header_button_language');

    hamburger.addEventListener('click', () => {
        menu.classList.add('first-page-visible');

    });
    close.addEventListener('click', () => {
        menu.classList.toggle('first-page-hidden');
        menu.classList.toggle('first-page-visible');
        if (second_page.classList.contains('second-page-visible')) {
            second_page.classList.toggle('second-page-visible')
        }
        if (third_page.classList.contains('third-page-visible')) {
            third_page.classList.toggle('third-page-visible')
        }
    });

    services.addEventListener('click', () => {
        second_page.classList.toggle('second-page-visible')
    });
    second_page_back.addEventListener('click', () => {
        second_page.classList.toggle('second-page-visible');
        second_page.classList.toggle('second-page-hidden');
    });
    cloud_calculations.addEventListener('click', () => {
        third_page.classList.toggle('third-page-visible')
    });
    third_page_heading.addEventListener('click', () => {
        third_page.classList.toggle('third-page-hidden')
        third_page.classList.toggle('third-page-visible')
    });


    dropdownButton.addEventListener('click', () => {
        myDropdown.classList.toggle('show')
    })

})