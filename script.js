document.addEventListener('DOMContentLoaded', function () {

    // MENU
    const navbar = document.getElementById('mainNav');
    const logoImg = document.querySelector('.logo-img');

    const logoBlancoSrc = 'media/logo_blanco.png';
    const logoColorSrc  = 'media/logo.png';

    const scrollThreshold = 50;
    const mobileBreakpoint = 992; 

    if (navbar && logoImg) {

        function changeNavbarClasses() {
            const currentScroll = window.scrollY;
            const isMobile = window.innerWidth < mobileBreakpoint;

            if (isMobile) {
                navbar.classList.add('navbar-scrolled');
                navbar.classList.remove('navbar-dark');
                navbar.classList.add('navbar-light');

                logoImg.src = logoColorSrc;
                return;
            }

            
            if (currentScroll > scrollThreshold) {
                navbar.classList.add('navbar-scrolled');
                navbar.classList.remove('navbar-dark');
                navbar.classList.add('navbar-light');

                logoImg.src = logoColorSrc;
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.classList.remove('navbar-light');
                navbar.classList.add('navbar-dark');

                logoImg.src = logoBlancoSrc;
            }
        }

      
        window.addEventListener('scroll', changeNavbarClasses);

    
        window.addEventListener('resize', changeNavbarClasses);

        changeNavbarClasses();
    }

   
    

    const menuToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    const bodyOverlay = document.getElementById('body-overlay');

    if (menuToggler && navbarCollapse && bodyOverlay) {
        
        
        navbarCollapse.addEventListener('show.bs.collapse', function () {
            bodyOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        
        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            bodyOverlay.classList.remove('active');
            document.body.style.overflow = ''; 
        });

       
        bodyOverlay.addEventListener('click', function() {
            menuToggler.click(); 
        });
    }

//VIDEO
const video = document.querySelector('.hero-video');

if (video) {
    video.addEventListener('timeupdate', function() {
        if (this.currentTime >= 27) {
            this.currentTime = 0;
            this.play();
        }
    }, false);
}

//MEDIDAS
const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const wrapper = entry.target;
                const counter = wrapper.querySelector('.counter');
                const target = +counter.getAttribute('data-target');
                
                // Animación de números
                let count = 0;
                const updateCount = () => {
                    const speed = 40;
                    const increment = target / speed;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };

                wrapper.classList.add('active'); // Inicia animación del círculo CSS
                updateCount();
                observer.unobserve(wrapper);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.measure-circle-wrapper').forEach(w => observer.observe(w));
});

