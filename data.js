window.DEFAULT_DATA = {
  site: {
    name: "MI STUDIO",
    heroTitle: "Diseño que hace que tu proyecto destaque.",
    heroText: "Diseños, portafolios y recursos digitales creados para comunidades, servidores y creadores.",
    ctaTitle: "¿Empezamos?",
    ctaText: "Cuéntame qué necesitas y te respondo con precio y disponibilidad.",
    discord: "https://discord.com/",
    email: "contacto@tustudio.com",
    footerText: "Diseño y desarrollo para comunidades y creadores."
  },
  stats: { sales: 24, rating: 5.0 },
  products: [
    {id:1, name:"Portfolio Web", description:"Página web profesional, responsive y animada.", price:10, tag:"POPULAR", image:""},
    {id:2, name:"Banner Minecraft", description:"Banner personalizado para servidor o comunidad.", price:5, tag:"DISEÑO", image:""},
    {id:3, name:"Logo", description:"Identidad visual limpia y lista para usar.", price:7, tag:"DISEÑO", image:""},
    {id:4, name:"Miniatura", description:"Miniatura para YouTube, TikTok o anuncios.", price:4, tag:"RÁPIDO", image:""}
  ],
  projects: [
    {id:1, title:"Proyecto Minecraft", category:"Diseño de servidor", description:"Identidad visual y piezas para una comunidad.", image:""},
    {id:2, title:"Portfolio", category:"Web", description:"Landing profesional con animaciones.", image:""},
    {id:3, title:"Diseño de comunidad", category:"Discord", description:"Diseño visual para una comunidad gaming.", image:""},
    {id:4, title:"Branding", category:"Identidad", description:"Logo y sistema visual completo.", image:""}
  ],
  reviews: [
    {id:1, name:"Cliente", role:"Cliente verificado", text:"Muy buen trabajo, rápido y con un resultado profesional.", rating:5, avatar:""},
    {id:2, name:"Cliente 2", role:"Servidor Minecraft", text:"Me gustó mucho el resultado. La atención fue excelente.", rating:5, avatar:""},
    {id:3, name:"Cliente 3", role:"Creador", text:"Todo quedó como lo pedí y las revisiones ayudaron bastante.", rating:5, avatar:""}
  ]
};

window.STORE_KEY = "mi_studio_store_v1";
window.getStoreData = function(){
  try {
    const saved = localStorage.getItem(window.STORE_KEY);
    if (!saved) return structuredClone(window.DEFAULT_DATA);
    const parsed = JSON.parse(saved);
    return Object.assign(structuredClone(window.DEFAULT_DATA), parsed);
  } catch(e) {
    return structuredClone(window.DEFAULT_DATA);
  }
};
window.saveStoreData = function(data){
  localStorage.setItem(window.STORE_KEY, JSON.stringify(data));
};
