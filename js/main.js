// Dados dos projetos
const projects = [
    {
        title: 'Sistema de Gerenciamento',
        description: 'Aplicação web completa desenvolvida com .NET Core e Angular para gerenciamento empresarial.',
        technologies: ['C#', '.NET Core', 'Angular', 'SQL Server'],
        image: 'https://via.placeholder.com/350x200',
        github: '#',
        demo: '#'
    },
    {
        title: 'API RESTful',
        description: 'API desenvolvida com ASP.NET Core seguindo princípios REST e Clean Architecture.',
        technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server'],
        image: 'https://via.placeholder.com/350x200',
        github: '#',
        demo: '#'
    },
    {
        title: 'Dashboard Analítico',
        description: 'Dashboard interativo construído com Angular e Material Design.',
        technologies: ['Angular', 'TypeScript', 'Material Design'],
        image: 'https://via.placeholder.com/350x200',
        github: '#',
        demo: '#'
    },
    {
        title: 'SpaceX Explorer',
        description: 'Consumo de uma API pública para exibir informações sobre os lançamentos da SpaceX.',
        technologies: ['Angular', 'typescript', 'html', 'css'],
        image: 'C:/PortifolioLeonardoMeger/img/logo/spacex-chamada_2.jpg',
        github: 'https://github.com/LeonardoMeger/spacex-explorer/',
        demo: 'https://spacex-explorer-tan.vercel.app/'
    }
];

// Carregar projetos dinamicamente
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="btn-secondary">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.demo}" target="_blank" class="btn-primary">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Menu mobile
function setupMobileMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
}

// Formulário de contato
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para uma API
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Dados do formulário:', formData);
        // Limpar formulário
        form.reset();
        alert('Mensagem enviada com sucesso!');
    });
}

// Animação de scroll suave para links internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animação de elementos ao rolar a página
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Animação de digitação para o título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animação para os ícones de tecnologia
function animateTechStack() {
    const techIcons = document.querySelectorAll('.tech-stack i');
    
    techIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            icon.style.transition = 'all 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Animação do subtítulo com efeito gradual
function fadeInSubtitle() {
    const subtitle = document.querySelector('.hero h2');
    subtitle.style.opacity = '0';
    
    setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease';
        subtitle.style.opacity = '1';
    }, 1500); // Começa após a animação do título
}

// Efeito de partículas flutuantes no fundo
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    hero.insertBefore(particlesContainer, hero.firstChild);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = (Math.random() * 2) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
    setupScrollAnimations();
    
    // Novas animações para a seção home
    const mainTitle = document.querySelector('.hero h1');
    const originalText = mainTitle.textContent;
    typeWriter(mainTitle, originalText);
    
    // Adiciona estilos CSS para as partículas
    const style = document.createElement('style');
    style.textContent = `
        .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        }
        
        .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
            animation: float linear infinite;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) scale(0);
            }
            100% {
                transform: translateY(-10vh) scale(1);
            }
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
        }
    `;
    document.head.appendChild(style);
    
    createParticles();
    setTimeout(animateTechStack, 1000);
    fadeInSubtitle();
});

// Inicializa o EmailJS
(function() {
    emailjs.init("deX30kB3bkcM39CE3"); // Substitua pelo seu User ID do EmailJS
})();

// Função para enviar o email
function sendEmail(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Desabilita o botão durante o envio
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    // Prepara os dados do formulário
    const templateParams = {
        from_name: document.getElementById('name').value,
        //from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Envia o email usando EmailJS
    emailjs.send('service_mlh3wcq', 'template_zcqse7i', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
            form.reset(); // Limpa o formulário
        }, function(error) {
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            console.error('Erro:', error);
        })
        .finally(function() {
            // Reabilita o botão
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';
        });
}

// Adiciona o evento de submit ao formulário
document.getElementById('contact-form').addEventListener('submit', sendEmail); 