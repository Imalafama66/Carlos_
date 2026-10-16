(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  const year = document.getElementById('year');
  if (year) year.textContent = config.year || new Date().getFullYear();

  const discordLink = document.getElementById('discordLink');
  if (discordLink) {
    if (config.discordUrl && config.discordUrl.trim()) {
      discordLink.href = config.discordUrl;
      discordLink.target = '_blank';
      discordLink.rel = 'noopener noreferrer';
      discordLink.innerHTML = 'Contactar por Discord <span>↗</span>';
    } else {
      discordLink.href = 'mailto:?subject=Proyecto%20de%20configuraci%C3%B3n%20Minecraft&body=Hola%20xLau%2C%20quiero%20consultar%20sobre%20una%20configuraci%C3%B3n%20de%20servidor.';
      discordLink.innerHTML = 'Solicitar información <span>↗</span>';
    }
  }

  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' }) : null;

  document.querySelectorAll('.reveal').forEach(el => {
    if (observer) observer.observe(el);
    else el.classList.add('visible');
  });

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Evita animaciones de desplazamiento en equipos que solicitan movimiento reducido.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
})();