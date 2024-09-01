document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    document.getElementById('language').value = savedLanguage;
    changeLanguage(savedLanguage);
});

document.getElementById('language').addEventListener('change', function () {
    const language = this.value;
    changeLanguage(language);
    localStorage.setItem('language', language);
});

function changeLanguage(language) {
    if (language === 'es') {
        document.querySelector('html').lang = 'es';
        translatePage({
            home: "Inicio",
            shop: "Tienda",
            about: "Sobre Nosotros",
            contact: "Contacto",
            welcome: "Bienvenido a Chic Stayl",
            description: "Descubre las últimas tendencias en camisetas de alta calidad."
        });
    } else if (language === 'en') {
        document.querySelector('html').lang = 'en';
        translatePage({
            home: "Home",
            shop: "Shop",
            about: "About Us",
            contact: "Contact",
            welcome: "Welcome to Chic Stayl",
            description: "Discover the latest trends in high-quality t-shirts."
        });
    } else if (language === 'ca') {
        document.querySelector('html').lang = 'ca';
        translatePage({
            home: "Inici",
            shop: "Botiga",
            about: "Sobre Nosaltres",
            contact: "Contacte",
            welcome: "Benvingut a Chic Stayl",
            description: "Descobreix les últimes tendències en samarretes d'alta qualitat."
        });
    }
}

function translatePage(translations) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    if (document.querySelector('#home-section')) {
        document.querySelector('#home-section h1').textContent = translations.welcome;
        document.querySelector('#home-section p').textContent = translations.description;
    }
}
