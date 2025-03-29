// Menu Mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const menuContainer = document.querySelector('.menu-container');

    menuButton.addEventListener('click', () => {
        const isOpen = menuContainer.classList.contains('show');
        menuButton.innerHTML = isOpen ? '☰' : '✕';
        menuContainer.classList.toggle('show');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a, .nav-buttons a').forEach(link => {
        link.addEventListener('click', () => {
            menuContainer.classList.remove('show');
            menuButton.innerHTML = '☰';
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !menuContainer.contains(e.target)) {
            menuContainer.classList.remove('show');
            menuButton.innerHTML = '☰';
        }
    });

    // Newsletter
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            
            button.disabled = true;
            button.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Obrigado por se inscrever!');
                form.reset();
                button.disabled = false;
                button.textContent = 'Inscrever-se';
            }, 1000);
        });
    });
}); 