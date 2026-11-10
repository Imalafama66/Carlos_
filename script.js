(() => {
  const cfg = window.XLAU_CONFIG;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
  const initials = (name) => name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Motion registry: 120 named, purposeful visual cues distributed across the interface.
  const MOTION_LIBRARY = [
    'fade-in',
    'slide-top',
    'slide-bottom',
    'slide-left',
    'slide-right',
    'zoom-in',
    'gradient-text',
    'title-glow',
    'text-reveal',
    'typing-cursor',
    'decorative-cursor',
    'dynamic-underline',
    'opacity-shift',
    'float-y',
    'drift-x',
    'tilt-3d',
    'hover-lift',
    'micro-rotate',
    'shadow-depth',
    'edge-light',
    'diagonal-reflection',
    'glass-surface',
    'content-zoom',
    'icon-drift',
    'stagger-entry',
    'card-expand',
    'card-contract',
    'background-drift',
    'ornament-rotate',
    'perspective-shift',
    'shadow-follow',
    'selection-glow',
    'hover-sheen',
    'tag-pop',
    'state-transition',
    'blue-particles',
    'light-points',
    'signal-lines',
    'light-waves',
    'tech-grid',
    'moving-gradient',
    'soft-spark',
    'floating-elements',
    'luminous-mist',
    'light-pulse',
    'depth-particles',
    'ambient-move',
    'concentric-rings',
    'screen-trace',
    'node-connections',
    'button-rise',
    'button-sheen',
    'gradient-swap',
    'background-slide',
    'press-ripple',
    'press-scale',
    'icon-slide',
    'arrow-nudge',
    'progress-border',
    'button-reflection',
    'color-transition',
    'focus-glow',
    'light-loader',
    'action-confirm',
    'open-reveal',
    'viewport-entry',
    'section-reveal',
    'card-stagger',
    'reading-progress',
    'scroll-indicator',
    'section-transition',
    'moderate-parallax',
    'section-light',
    'heading-arrival',
    'image-reveal',
    'ornament-scroll',
    'divider-draw',
    'header-state',
    'smooth-nav',
    'active-section',
    'menu-drop',
    'mobile-nav',
    'menu-morph',
    'link-highlight',
    'underline-grow',
    'tab-switch',
    'category-swap',
    'filter-open',
    'panel-close',
    'secondary-menu',
    'count-up',
    'bar-fill',
    'circle-indicator',
    'number-arrival',
    'indicator-glow',
    'percentage-shift',
    'skill-icon',
    'status-change',
    'skill-highlight',
    'stats-reveal',
    'image-zoom',
    'gallery-swap',
    'modal-open',
    'modal-close',
    'backdrop-blur',
    'project-transition',
    'filter-transition',
    'gallery-scroll',
    'description-reveal',
    'image-focus',
    'soft-pulse',
    'edge-reflection',
    'shadow-shift',
    'icon-transition',
    'divider-pulse',
    'label-arrival',
    'availability-pulse',
    'footer-transition',
    'final-entry',
    'return-home'
  ];

  const applyTheme = () => {
    const colors = cfg.brand.colors || {};
    Object.entries(colors).forEach(([key, value]) => document.documentElement.style.setProperty(`--${key}`, value));
  };
  const motionName = (index) => MOTION_LIBRARY[index % MOTION_LIBRARY.length];
  const tagMotion = (root = document) => $$('.reveal, .tilt-card, .project-card, .plugin-card, .service-card', root).forEach((element, index) => {
    element.dataset.motion = element.dataset.motion || motionName(index);
    element.style.setProperty('--motion-delay', `${(index % 8) * 55}ms`);
  });

  applyTheme();
  $$('[data-brand="availability"]').forEach(element => element.textContent = `${cfg.brand.availability.label} / ${cfg.brand.availability.value}`);
  $('[data-brand="heroTitle"]').innerHTML = escapeHTML(cfg.brand.heroTitle).replace(/\n/g, '<br>');
  $('[data-brand="heroDescription"]').textContent = cfg.brand.heroDescription;
  $('[data-brand="about"]').textContent = cfg.brand.about;

  const profile = cfg.profile || {};
  const profileDataGrid = $('#profile-data-grid');
  if (profileDataGrid) {
    const languageCards = (profile.languages || []).map(language => `<strong>${escapeHTML(language.name)} <small>${escapeHTML(language.level)}</small></strong>`).join('');
    const skillChips = (profile.skills || []).map(skill => `<span>${escapeHTML(skill)}</span>`).join('');
    profileDataGrid.innerHTML = `<article class="profile-data-card reveal"><span class="mono-label">IDIOMAS</span>${languageCards}</article><article class="profile-data-card reveal"><span class="mono-label">STACK VISUAL</span><div class="skill-cloud">${skillChips}</div></article><article class="profile-data-card profile-data-wide reveal"><span class="mono-label">FOCO</span><strong>Configuración de Minecraft</strong><p>Plugins, interfaces, sistemas, YAML y optimización básica sin prometer lag cero.</p></article>`;
    tagMotion(profileDataGrid);
  }
  const terminalStream = $('#terminal-stream');
  const workflow = profile.workflow || [];
  if (terminalStream && workflow.length) {
    let workflowIndex = 0;
    const renderWorkflow = () => { terminalStream.innerHTML = workflow.map((step, index) => `<p class="${index === workflowIndex ? 'terminal-current' : ''}"><span>${String(index + 1).padStart(2, '0')}</span> ${escapeHTML(step)}</p>`).join(''); };
    renderWorkflow();
    if (!reduceMotion()) window.setInterval(() => { workflowIndex = (workflowIndex + 1) % workflow.length; renderWorkflow(); }, 2600);
  }

  const projectGrid = $('#project-grid');
  const projectFilters = $('#project-filters');
  const projectCategories = ['Todos', ...new Set(cfg.projects.flatMap(project => project.categories))];
  let activeProjectFilter = 'Todos';
  const setPressed = (selector, activeValue, key) => $$(selector).forEach(button => button.setAttribute('aria-pressed', String(button.dataset[key] === activeValue)));
  const renderProjectFilters = () => { projectFilters.innerHTML = projectCategories.map((category, index) => `<button class="filter-button ${index === 0 ? 'active' : ''}" aria-pressed="${index === 0}" data-project-filter="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join(''); };
  const renderProjects = () => {
    const projects = activeProjectFilter === 'Todos' ? cfg.projects : cfg.projects.filter(project => project.categories.includes(activeProjectFilter));
    projectGrid.classList.add('is-changing');
    window.setTimeout(() => {
      projectGrid.innerHTML = projects.map((project, index) => {
        const bannerStyle = project.banner ? ` style="background-image:url('${escapeHTML(project.banner)}');background-size:cover;background-position:center"` : '';
        return `<article class="project-card reveal" data-motion="${motionName(index + 15)}" style="--card-accent:${escapeHTML(project.accent)};--motion-delay:${index * 80}ms"><div class="project-art"${bannerStyle}><div class="art-grid"></div><span class="editable-stamp">${project.banner ? 'BANNER CONFIGURADO' : 'BANNER EDITABLE'}</span><span class="art-label">${escapeHTML(initials(project.name))}</span></div><div class="project-content"><span class="project-type">${escapeHTML(project.type)}</span><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p><div class="project-meta"><div class="tag-list">${project.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div><button class="text-button project-detail" data-project-id="${escapeHTML(project.id)}">Detalles ↗</button></div></div></article>`;
      }).join('');
      projectGrid.classList.remove('is-changing');
      $$('.project-detail', projectGrid).forEach(button => button.addEventListener('click', () => openModal(button.dataset.projectId, button)));
      tagMotion(projectGrid);
      observeReveals(projectGrid);
      bindTilt(projectGrid);
    }, reduceMotion() ? 0 : 120);
  };
  renderProjectFilters();
  renderProjects();
  projectFilters.addEventListener('click', event => {
    const button = event.target.closest('[data-project-filter]');
    if (!button) return;
    activeProjectFilter = button.dataset.projectFilter;
    setPressed('[data-project-filter]', activeProjectFilter, 'projectFilter');
    $$('#project-filters .filter-button').forEach(item => item.classList.toggle('active', item === button));
    renderProjects();
  });

  const pluginGrid = $('#plugin-grid');
  const pluginFilters = $('#plugin-filters');
  let activePluginFilter = 'Todos';
  let showAllPlugins = false;
  const pluginDisplayLimit = cfg.pluginDisplayLimit || 12;
  const pluginScopes = cfg.pluginScopes || {};
  const renderPluginFilters = () => { pluginFilters.innerHTML = cfg.pluginCategories.map((category, index) => `<button class="filter-button ${index === 0 ? 'active' : ''}" aria-pressed="${index === 0}" data-plugin-filter="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join(''); };
  const renderPlugins = () => {
    const matchingPlugins = activePluginFilter === 'Todos' ? cfg.plugins : cfg.plugins.filter(plugin => plugin.category === activePluginFilter);
    const plugins = (!showAllPlugins && activePluginFilter === 'Todos') ? matchingPlugins.slice(0, pluginDisplayLimit) : matchingPlugins;
    $('#plugin-count').textContent = showAllPlugins || activePluginFilter !== 'Todos' ? String(plugins.length).padStart(2, '0') : `${plugins.length}/${matchingPlugins.length}`;
    pluginGrid.classList.add('is-changing');
    window.setTimeout(() => {
      pluginGrid.innerHTML = plugins.map((plugin, index) => `<article class="plugin-card reveal" data-motion="${motionName(index + 36)}"><span class="plugin-status ${plugin.status ? 'marked' : ''}" title="Estado editable"></span><div class="plugin-glyph">${escapeHTML(initials(plugin.name))}</div><h3>${escapeHTML(plugin.name)}</h3><p>${escapeHTML(plugin.description)}</p><span class="plugin-category">${escapeHTML(plugin.category)}</span><span class="plugin-config-label">CONFIG // ÁREAS EDITABLES</span><span class="plugin-scope">${escapeHTML(pluginScopes[plugin.category] || 'opciones · mensajes · ajustes')}</span><label class="plugin-select-label">Estado<select class="plugin-status-select" data-plugin-name="${escapeHTML(plugin.name)}" aria-label="Estado editable de ${escapeHTML(plugin.name)}"><option value="">Sin marcar</option>${cfg.pluginStatuses.map(status => `<option ${plugin.status === status ? 'selected' : ''} value="${escapeHTML(status)}">${escapeHTML(status)}</option>`).join('')}</select></label></article>`).join('');
      pluginGrid.classList.remove('is-changing');
      const revealButton = $('#show-all-plugins');
      if (revealButton) {
        const hasMore = activePluginFilter === 'Todos' && !showAllPlugins && matchingPlugins.length > plugins.length;
        revealButton.hidden = !hasMore;
        revealButton.innerHTML = hasMore ? `Mostrar todos los plugins (${matchingPlugins.length}) <span>↓</span>` : 'Catálogo completo visible <span>✓</span>';
      }
      $$('.plugin-status-select', pluginGrid).forEach(select => select.addEventListener('change', event => {
        const plugin = cfg.plugins.find(item => item.name === event.target.dataset.pluginName);
        if (!plugin) return;
        plugin.status = event.target.value;
        event.target.closest('.plugin-card').querySelector('.plugin-status').classList.toggle('marked', Boolean(plugin.status));
      }));
      tagMotion(pluginGrid);
      observeReveals(pluginGrid);
    }, reduceMotion() ? 0 : 80);
  };
  renderPluginFilters();
  renderPlugins();
  $('#show-all-plugins')?.addEventListener('click', () => { showAllPlugins = true; renderPlugins(); });
  const pluginModeToggle = $('#plugin-mode-toggle');
  pluginModeToggle?.addEventListener('click', () => {
    const minimal = pluginGrid.classList.toggle('config-mode-off');
    pluginModeToggle.classList.toggle('active', !minimal);
    pluginModeToggle.textContent = minimal ? 'MODO CONFIG / OFF' : 'MODO CONFIG / ON';
  });
  pluginFilters.addEventListener('click', event => {
    const button = event.target.closest('[data-plugin-filter]');
    if (!button) return;
    activePluginFilter = button.dataset.pluginFilter;
    setPressed('[data-plugin-filter]', activePluginFilter, 'pluginFilter');
    $$('#plugin-filters .filter-button').forEach(item => item.classList.toggle('active', item === button));
    renderPlugins();
  });

  $('#services-grid').innerHTML = cfg.services.map((service, index) => `<article class="service-card reveal" data-motion="${motionName(index + 76)}" style="--motion-delay:${index * 65}ms"><span class="service-number">${escapeHTML(service.number)} / 10</span><span class="service-icon">${escapeHTML(service.icon)}</span><h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p></article>`).join('');

  const menuToggle = $('#menu-toggle');
  const nav = $('#site-nav');
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    menuToggle.classList.toggle('open', open);
  });
  $$('.nav-link').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Abrir menú de navegación'); }));

  const header = $('#site-header');
  const progress = $('#reading-progress');
  const backTop = $('#back-top');
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    header.classList.toggle('scrolled', scrollY > 30);
    backTop.classList.toggle('visible', scrollY > 600);
  };
  addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  let revealObserver;
  const observeReveals = (root = document) => {
    if (!revealObserver) return;
    $$('.reveal', root).forEach(element => revealObserver.observe(element));
  };
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$('.nav-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }), { rootMargin: '-35% 0px -55% 0px' });
  $$('[data-section]').forEach(section => sectionObserver.observe(section));
  revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }), { threshold: 0.12 });
  tagMotion();
  observeReveals();

  const bindTilt = (root = document) => {
    if (reduceMotion()) return;
    $$('.tilt-card, .project-card, .service-card', root).forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = 'true';
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-5px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  };
  bindTilt();

  const modal = $('#project-modal');
  const modalGallery = $('#modal-gallery');
  let lastTrigger = null;
  const openModal = (id, trigger) => {
    const project = cfg.projects.find(item => item.id === id);
    if (!project) return;
    lastTrigger = trigger || null;
    $('#modal-kicker').textContent = `PROJECT / ${project.categories.join(' + ')}`;
    $('#modal-title').textContent = project.name;
    $('#modal-description').textContent = project.description;
    $('#modal-tags').innerHTML = project.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('');
    $('#modal-art').style.background = project.banner ? `center / cover url('${project.banner}')` : `radial-gradient(circle at 68% 28%, ${project.accent}88, transparent 24%), linear-gradient(135deg, #071326, #0a1834 58%, #03060c)`;
    modalGallery.innerHTML = project.gallery.length ? project.gallery.map((image, index) => `<img src="${escapeHTML(image)}" alt="Captura editable ${index + 1} de ${escapeHTML(project.name)}" loading="lazy">`).join('') : '<div class="gallery-empty"><span>⌁</span><p>Galería editable</p></div>';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('.modal-close').focus();
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  };
  $$('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab') {
      const focusable = $$('button, [href], input, textarea, select', modal).filter(item => !item.disabled);
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  const form = $('#contact-form');
  const discordValue = $('#discord-value');
  const copyButton = $('#copy-discord');
  const discordLink = $('#discord-link');
  const emailLink = $('#email-link');
  if (!cfg.contact.formEnabled) form.hidden = true;
  if (cfg.contact.discordUser) {
    discordValue.textContent = cfg.contact.discordUser;
    copyButton.disabled = false;
    copyButton.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(cfg.contact.discordUser); copyButton.textContent = 'Copiado ✓'; }
      catch { copyButton.textContent = 'Copia manual'; }
      window.setTimeout(() => { copyButton.textContent = 'Copiar usuario'; }, 1800);
    });
  }
  if (cfg.contact.discordUrl) { discordLink.href = cfg.contact.discordUrl; discordLink.hidden = false; }
  if (cfg.contact.email && emailLink) { emailLink.href = `mailto:${cfg.contact.email}`; emailLink.textContent = cfg.contact.email; emailLink.hidden = false; }

  const presenceCard = $('#discord-presence-card');
  const presenceStatus = $('#presence-status');
  const presenceDot = $('#presence-dot');
  const presenceIndicator = $('#presence-indicator');
  const discordAvatar = $('#discord-avatar');
  const discordAvatarFallback = $('#discord-avatar-fallback');
  const discordDisplayName = $('#discord-display-name');
  const discordHandle = $('#discord-handle');
  const discordIdLabel = $('#discord-id');
  if (discordIdLabel) discordIdLabel.textContent = `ID / ${cfg.contact.discordId || 'no configurado'}`;
  const activityKicker = $('#activity-kicker');
  const activityTitle = $('#activity-title');
  const activityDetail = $('#activity-detail');
  const presenceDevice = $('#presence-device');
  const discordProfileLink = $('#discord-profile-link');
  const statusLabels = { online: 'EN LÍNEA', idle: 'AUSENTE', dnd: 'NO MOLESTAR', offline: 'DESCONECTADO' };
  const statusClasses = { online: 'online', idle: 'idle', dnd: 'dnd', offline: 'offline' };
  const setPresenceFallback = (message = 'Presencia no disponible ahora.') => {
    if (!presenceCard) return;
    presenceCard.dataset.status = 'offline';
    presenceStatus.textContent = 'DESCONECTADO';
    presenceDot.className = 'offline';
    presenceIndicator.className = 'offline';
    discordDisplayName.textContent = cfg.brand.name;
    discordHandle.textContent = `@${cfg.contact.discordUser}`;
    activityKicker.textContent = 'MI ESTADO';
    activityTitle.textContent = 'Desconectado';
    activityDetail.textContent = message;
    presenceDevice.textContent = 'PRESENCE / OFFLINE';
  };
  const renderPresence = payload => {
    const data = payload?.data;
    if (!data) { setPresenceFallback(); return; }
    const user = data.discord_user || {};
    const status = statusClasses[data.discord_status] ? data.discord_status : 'offline';
    presenceCard.dataset.status = status;
    presenceStatus.textContent = statusLabels[status];
    presenceDot.className = status;
    presenceIndicator.className = status;
    discordDisplayName.textContent = user.global_name || user.username || cfg.brand.name;
    discordHandle.textContent = `@${user.username || cfg.contact.discordUser}`;
    if (user.avatar && user.id) {
      const extension = user.avatar.startsWith('a_') ? 'gif' : 'png';
      discordAvatar.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=128`;
      discordAvatar.hidden = false;
      discordAvatarFallback.hidden = true;
    } else {
      discordAvatar.hidden = true;
      discordAvatarFallback.hidden = false;
    }
    if (data.listening_to_spotify && data.spotify) {
      activityKicker.textContent = 'ESCUCHANDO EN SPOTIFY';
      activityTitle.textContent = data.spotify.song || 'Reproduciendo música';
      activityDetail.textContent = [data.spotify.artist, data.spotify.album].filter(Boolean).join(' · ') || 'Actividad musical compartida';
      presenceCard.dataset.activity = 'spotify';
    } else {
      const activity = (data.activities || []).find(item => item.type !== 2);
      activityKicker.textContent = activity ? 'ACTIVIDAD DE DISCORD' : 'MI ESTADO';
      activityTitle.textContent = activity?.name || (status === 'offline' ? 'Desconectado' : 'Disponible en Discord');
      activityDetail.textContent = activity?.details || activity?.state || (status === 'offline' ? 'No está conectado ahora.' : 'Sin actividad compartida.');
      presenceCard.dataset.activity = activity ? 'activity' : 'idle';
    }
    const devices = [data.active_on_discord_desktop && 'PC', data.active_on_discord_mobile && 'MÓVIL'].filter(Boolean);
    presenceDevice.textContent = devices.length ? `PRESENCE / ${devices.join(' + ')}` : 'PRESENCE / SYNC';
    if (discordProfileLink && cfg.contact.discordUrl) discordProfileLink.href = cfg.contact.discordUrl;
  };
  const refreshDiscordPresence = async () => {
    if (!cfg.contact.presenceUrl) { setPresenceFallback('Configura un endpoint público de presencia.'); return; }
    try {
      const response = await fetch(cfg.contact.presenceUrl, { headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`Presence ${response.status}`);
      renderPresence(await response.json());
    } catch (error) {
      setPresenceFallback('La presencia pública no está disponible ahora.');
    }
  };
  if (presenceCard) {
    setPresenceFallback('Conectando con la presencia pública…');
    refreshDiscordPresence();
    window.setInterval(refreshDiscordPresence, cfg.contact.presencePollMs || 30000);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = escapeHTML(data.get('name'));
    const message = escapeHTML(data.get('message'));
    const feedback = $('#form-feedback');
    if (cfg.contact.email) {
      window.location.href = `mailto:${cfg.contact.email}?subject=${encodeURIComponent(`Consulta de ${data.get('name')}`)}&body=${encodeURIComponent(data.get('message'))}`;
      feedback.textContent = 'Abriendo tu cliente de correo…';
    } else {
      feedback.textContent = `Gracias, ${name}. Tu idea quedó lista para revisar: “${message.slice(0, 72)}${message.length > 72 ? '…' : ''}”. Configura un email o enlace real en config.js para enviar mensajes.`;
    }
    form.reset();
  });
  $$('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
    const target = $(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' });
  }));
})();
