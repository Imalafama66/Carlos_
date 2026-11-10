window.XLAU_CONFIG = {
  brand: {
    name: 'xLau',
    eyebrow: 'CONFIGURADOR DE MINECRAFT',
    heroTitle: 'xLau\nconfig',
    heroDescription: 'Configuración de Minecraft con identidad visual: plugins, sistemas, interfaces y detalles organizados para convertir una idea de servidor en una experiencia clara y funcional.',
    about: 'Soy xLau, configurador de servidores Minecraft con 3 meses de experiencia. Me especializo en la configuración y personalización de plugins, interfaces y sistemas de servidor. Me interesa crear configuraciones organizadas, cuidar los detalles visuales y adaptar cada proyecto a sus necesidades. Continúo desarrollando mis habilidades y ampliando mis conocimientos para ofrecer mejores resultados en cada trabajo.',
    availability: { label: 'DISPONIBILIDAD', value: 'Disponible para conversar', tone: 'online' },
    experience: '3 meses',
    colors: { ink: '#05070D', panel: '#0A1020', blue: '#1677FF', cyan: '#39FF88', ice: '#9AFFBF', white: '#F5F8FF', muted: '#8996AD' }
  },
  profile: {
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'English', level: 'Comunicación' }
    ],
    skills: ['Configuración de Minecraft', 'Plugins y YAML', 'HTML / CSS / JavaScript', 'TAB y scoreboard', 'Interfaces y menús', 'Permisos y rangos', 'Hologramas', 'Optimización básica'],
    workflow: ['analizar estructura del servidor', 'ordenar plugins y permisos', 'construir la interfaz visual', 'revisar configuración y rendimiento']
  },
  contact: {
    discordUser: 'carlitosxit',
    discordId: '1484659327716294657',
    discordUrl: 'https://discord.com/users/1484659327716294657',
    presenceUrl: 'https://api.lanyard.rest/v1/users/1484659327716294657',
    presencePollMs: 30000,
    email: 'elhadeshadesseisseis@gmail.com',
    formEnabled: true
  },
  projects: [
    { id: 'noxara', name: 'NoxaraMines', type: 'Proyecto trabajado', categories: ['Configuración', 'Personalización'], accent: '#00B7FF', banner: '', description: 'Espacio editable para describir la configuración, personalización visual o sistemas trabajados en este servidor.', tags: ['Plugins', 'Interfaces', 'Sistemas'], gallery: [] },
    { id: 'suntrix', name: 'Suntrix', type: 'Proyecto trabajado', categories: ['Plugins', 'Sistemas de juego'], accent: '#1677FF', banner: '', description: 'Espacio editable para añadir una descripción del trabajo realizado, sin inventar resultados ni responsabilidades.', tags: ['Configuración', 'YAML', 'Gameplay'], gallery: [] },
    { id: 'minekravex', name: 'MineKravex', type: 'Proyecto trabajado', categories: ['Personalización', 'Visual'], accent: '#64D8FF', banner: '', description: 'Espacio editable para documentar detalles del proyecto y añadir capturas cuando estén disponibles.', tags: ['Visual', 'Menús', 'Detalles'], gallery: [] }
  ],
  pluginCategories: ['Todos', 'Permisos y rangos', 'Interfaces y menús', 'TAB y scoreboard', 'Hologramas', 'Economía y tiendas', 'Protección y administración', 'Modalidades y sistemas de juego', 'Compatibilidad y configuración general'],
  pluginScopes: {
    'Permisos y rangos': 'grupos · herencias · prefijos',
    'Interfaces y menús': 'GUI · botones · acciones',
    'TAB y scoreboard': 'tablist · score · placeholders',
    'Hologramas': 'textos · posiciones · animación',
    'Economía y tiendas': 'precios · monedas · recompensas',
    'Protección y administración': 'reglas · regiones · moderación',
    'Modalidades y sistemas de juego': 'kits · eventos · gameplay',
    'Compatibilidad y configuración general': 'YAML · mensajes · dependencias'
  },
  pluginStatuses: ['Conozco', 'He configurado', 'Quiero aprender'],
  pluginDisplayLimit: 12,
  plugins: [
    ['TAB','TAB y scoreboard'],['LuckPerms','Permisos y rangos'],['PlaceholderAPI','Compatibilidad y configuración general'],['DeluxeMenus','Interfaces y menús'],['WorldEdit','Protección y administración'],['WorldGuard','Protección y administración'],['FancyHolograms','Hologramas'],['EssentialsX','Compatibilidad y configuración general'],['Vault','Economía y tiendas'],['Citizens','Modalidades y sistemas de juego'],['DecentHolograms','Hologramas'],['ExcellentCrates','Economía y tiendas'],['PlayerKits','Modalidades y sistemas de juego'],['LiteBans','Protección y administración'],['AdvancedBan','Protección y administración'],['ajLeaderboards','TAB y scoreboard'],['Shopkeepers','Economía y tiendas'],['Multiverse-Core','Compatibilidad y configuración general'],['CoreProtect','Protección y administración'],['ViaVersion','Compatibilidad y configuración general'],['ProtocolLib','Compatibilidad y configuración general'],['Skript','Modalidades y sistemas de juego'],['MythicMobs','Modalidades y sistemas de juego'],['ExcellentShop','Economía y tiendas'],['ConditionalEvents','Modalidades y sistemas de juego'],['MiniMOTD','Compatibilidad y configuración general'],['AuthMe Reloaded','Protección y administración'],['CombatLogX','Protección y administración'],['GSit','Modalidades y sistemas de juego'],['Geyser','Compatibilidad y configuración general'],['CMI','Compatibilidad y configuración general'],['ItemsAdder','Interfaces y menús'],['Oraxen','Interfaces y menús'],['ModelEngine','Modalidades y sistemas de juego'],['BetterRTP','Modalidades y sistemas de juego'],['Jobs Reborn','Economía y tiendas'],['PlayerPoints','Economía y tiendas'],['AuctionHouse','Economía y tiendas'],['SuperiorSkyblock2','Modalidades y sistemas de juego'],['IridiumSkyblock','Modalidades y sistemas de juego'],['HolographicDisplays','Hologramas'],['InteractiveChat','Compatibilidad y configuración general'],['DiscordSRV','Compatibilidad y configuración general'],['SkinsRestorer','Compatibilidad y configuración general'],['spark','Protección y administración'],['ViaBackwards','Compatibilidad y configuración general'],['ViaRewind','Compatibilidad y configuración general'],['Plan','Compatibilidad y configuración general'],['BlueMap','Modalidades y sistemas de juego'],['Dynmap','Modalidades y sistemas de juego']
  ].map(([name, category]) => ({ name, category, status: '', description: 'Descripción editable: añade aquí el uso o nivel de familiaridad real con esta herramienta.' })),
  services: [
    ['01','⚙','Configuración de plugins','Organización y personalización de archivos de configuración, mensajes, opciones y parámetros compatibles.'],
    ['02','▦','TAB y scoreboard','Diseño de encabezados, pies de página, información de jugadores, colores, gradientes y elementos visuales.'],
    ['03','⌘','Permisos y rangos','Organización de grupos, permisos, prefijos y jerarquías mediante plugins compatibles.'],
    ['04','◌','Hologramas','Configuración de textos informativos, hologramas de bienvenida y elementos decorativos.'],
    ['05','▤','Menús interactivos','Creación y personalización de menús para acceder a funciones del servidor.'],
    ['06','⬡','BoxPvP','Configuración de elementos de juego, menús, kits, recompensas y sistemas compatibles.'],
    ['07','⌂','Lobby y spawn','Personalización de zonas de aparición, mensajes de bienvenida y elementos informativos.'],
    ['08','✦','Personalización visual','Gradientes, animaciones, colores, mensajes, prefijos y detalles estéticos.'],
    ['09','⌗','Configuración general','Organización de archivos YAML, revisión de parámetros y personalización de plugins.'],
    ['10','↗','Optimización básica','Revisión de configuraciones y ajustes que puedan ayudar a mejorar el rendimiento, sin prometer lag cero.']
  ].map(([number, icon, title, description]) => ({ number, icon, title, description }))
};
