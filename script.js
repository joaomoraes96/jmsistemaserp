// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Altera o ícone do menu
        const icon = menuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fecha o menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .feature-card, .feature-item, .computer-monitor, .mobile-device');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configura a animação inicial
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .feature-card, .feature-item, .computer-monitor, .mobile-device');
    animatedElements.forEach(element => {
        if (element.classList.contains('computer-monitor')) {
            element.style.opacity = 0;
            element.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(-10deg) translateY(50px)';
        } else if (element.classList.contains('mobile-device')) {
            element.style.opacity = 0;
            element.style.transform = 'translateY(50px) rotate(-5deg)';
        } else {
            element.style.opacity = 0;
            element.style.transform = 'translateY(50px)';
        }
        
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Dispara a animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Efeito de clique nos botões
    const buttons = document.querySelectorAll('.btn-whatsapp, .floating-whatsapp, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 200);
        });
    });
    
    // Header fixo ao rolar com ajuste da logo - VERSÃO PARA LOGO CENTRALIZADA
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.25)';
            
            // Ajusta o tamanho da logo no scroll (apenas desktop)
            if (window.innerWidth > 768) {
                logo.style.height = '35px';
            }
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            
            // Retorna ao tamanho original (apenas desktop)
            if (window.innerWidth > 768) {
                if (window.innerWidth > 1200) {
                    logo.style.height = '50px';
                } else if (window.innerWidth > 992) {
                    logo.style.height = '45px';
                } else {
                    logo.style.height = '40px';
                }
            }
        }
    });
    
    // Reset da altura da logo ao redimensionar a janela
    window.addEventListener('resize', function() {
        // Apenas para desktop
        if (window.innerWidth > 768) {
            if (window.scrollY <= 50) {
                if (window.innerWidth > 1200) {
                    logo.style.height = '50px';
                } else if (window.innerWidth > 992) {
                    logo.style.height = '45px';
                } else {
                    logo.style.height = '40px';
                }
            } else {
                // Scroll ativo
                logo.style.height = '35px';
            }
        } else {
            // Mobile - tamanho fixo
            logo.style.height = '35px';
        }
    });
    
    // Inicializa a altura da logo
    function initLogoSize() {
        if (window.innerWidth > 1200) {
            logo.style.height = '50px';
        } else if (window.innerWidth > 992) {
            logo.style.height = '45px';
        } else if (window.innerWidth > 768) {
            logo.style.height = '40px';
        } else {
            logo.style.height = '35px';
        }
    }
    
    // Chama a função na inicialização
    initLogoSize();
});

// Adicione este código ao seu script.js existente

// Modal para visualização do delivery em tela cheia
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    
    // Modal do delivery
    const openModalBtn = document.getElementById('openDeliveryModal');
    const closeModalBtn = document.getElementById('closeDeliveryModal');
    const deliveryModal = document.getElementById('deliveryModal');
    const deliveryIframe = document.querySelector('.delivery-modal-iframe');
    
    if (openModalBtn && deliveryModal) {
        openModalBtn.addEventListener('click', function() {
            deliveryModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede scroll do body
            
            // Recarrega o iframe para garantir que está atualizado
            deliveryIframe.src = deliveryIframe.src;
        });
        
        closeModalBtn.addEventListener('click', function() {
            deliveryModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Fecha modal ao clicar fora
        deliveryModal.addEventListener('click', function(e) {
            if (e.target === deliveryModal) {
                deliveryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Fecha modal com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && deliveryModal.classList.contains('active')) {
                deliveryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ... resto do código existente ...
});