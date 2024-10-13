document.addEventListener('DOMContentLoaded', function () {
    const forwardButton = document.querySelector('.forward');
    const backwardButton = document.querySelector('.backward');
    const teamCards = document.querySelector('.team__card-container');

    if (!forwardButton || !backwardButton || !teamCards) return; 

    let scrollPosition = 0;

    const card = teamCards.querySelector('.team__card');
    const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

    forwardButton.addEventListener('click', () => {
        scrollPosition += cardWidth;

        const maxScrollPosition = teamCards.scrollWidth - teamCards.clientWidth;
    
        if (scrollPosition > maxScrollPosition) {
            scrollPosition = maxScrollPosition; 
        }
        teamCards.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateButtonVisibility(); 
    });

    backwardButton.addEventListener('click', () => {
        scrollPosition -= cardWidth;

        if (scrollPosition < 0) {
            scrollPosition = 0; 
        }
        teamCards.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateButtonVisibility(); 
    });

    const updateButtonVisibility = () => {
        const maxScrollPosition = teamCards.scrollWidth - teamCards.clientWidth;

        
        if (scrollPosition <= 0) {
            backwardButton.style.opacity = '0'; 
            backwardButton.style.visibility = 'hidden'; 
            forwardButton.style.opacity = '1'; 
            forwardButton.style.visibility = 'visible'; 
        } else if (scrollPosition >= maxScrollPosition) {
            backwardButton.style.opacity = '1'; 
            backwardButton.style.visibility = 'visible'; 
            forwardButton.style.opacity = '0'; 
            forwardButton.style.visibility = 'hidden';
        } else {
            backwardButton.style.opacity = '1'; 
            backwardButton.style.visibility = 'visible'; 
            forwardButton.style.opacity = '1'; 
            forwardButton.style.visibility = 'visible';
        }
    };

    updateButtonVisibility();
});


document.addEventListener('DOMContentLoaded', function () {
    const forwardButton = document.getElementById('forward-arrow');
    const backwardButton = document.getElementById('backward-arrow');
    const peopleContainer = document.querySelector('.feedback__carousel');

    if (!forwardButton || !backwardButton || !peopleContainer) return;

    let scrollPosition = 0;

    const card = peopleContainer.querySelector('.feedback__card');
    const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

    forwardButton.addEventListener('click', () => {
        scrollPosition += cardWidth;

        const maxScrollPosition = peopleContainer.scrollWidth - peopleContainer.clientWidth;

        if (scrollPosition > maxScrollPosition) {
            scrollPosition = maxScrollPosition; 
        }
        peopleContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        updateButtonStates(); 
    });

    backwardButton.addEventListener('click', () => {
        scrollPosition -= cardWidth;

        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        peopleContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateButtonStates();
    });

    const updateButtonStates = () => {
        const maxScrollPosition = peopleContainer.scrollWidth - peopleContainer.clientWidth;

        if (scrollPosition <= 0) {
            backwardButton.style.fill = '#6D7D8B'; 
        } else {
            backwardButton.style.fill = '#553D67'; 
        }

        if (scrollPosition >= maxScrollPosition) {
            forwardButton.style.fill = '#6D7D8B'; 
        } else {
            forwardButton.style.fill = '#553D67'; 
        }
    };

    
    updateButtonStates();
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('navigation-menu');
    const navLinks = document.querySelector('header');

    console.log(burger);
    console.log(navLinks);

    burger.addEventListener('click', () => {
        console.log('Burger clicked!');
        navLinks.classList.toggle('show_navigation');
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) { 
            navLinks.classList.remove('show_navigation');
        }
    });
});