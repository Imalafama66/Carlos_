window.DEFAULT_CONFIG={
brand:{name:'IMALAFAMA66',tagline:'Diseño digital que hace que tu proyecto se vea profesional.',eyebrow:'STUDIO / DESIGN / DIGITAL',description:'Creamos logos, banners, diseños, webs, branding y contenido para redes con una estética limpia, moderna y premium.',about:'Estudio digital enfocado en identidad visual y presentación profesional. Cada proyecto se trabaja con composición, tipografía y detalle.',email:'contacto@imalafama66.com',discord:'#',instagram:'#',tiktok:'#'},
theme:{bg:'#070707',card:'#101010',text:'#f5f5f5',muted:'#8d8d8d',accent:'#fff'},
stats:[{value:'50+',label:'Proyectos realizados'},{value:'6',label:'Categorías'},{value:'24/7',label:'Atención'},{value:'100%',label:'Personalizado'}],
services:[
{id:'1',category:'Logos',title:'Diseño de Logo',price:'$2 USD',description:'Logo profesional para servidores, marcas, comunidades o proyectos.',features:['1 concepto','PNG alta calidad','Fondo transparente'],image:'assets/logo.svg'},
{id:'2',category:'Banners',title:'Banner Premium',price:'$5 USD',description:'Banner para servidores, tiendas, Discord, YouTube o redes.',features:['Diseño personalizado','Formato horizontal','Listo para publicar'],image:'assets/banner.svg'},
{id:'3',category:'Diseños',title:'Diseño Visual',price:'$3 USD',description:'Piezas para anuncios, publicaciones, presentaciones y contenido.',features:['Personalizado','Adaptado a tu estilo','Archivo final'],image:'assets/design.svg'},
{id:'4',category:'Webs',title:'Web / Landing',price:'$10 USD',description:'Página moderna y responsive para presentar tu proyecto o servicio.',features:['Responsive','Animaciones','Código organizado'],image:'assets/web.svg'},
{id:'5',category:'Branding',title:'Branding Full',price:'$10 USD',description:'Pack completo para construir una identidad visual coherente.',features:['Logo','Banners','Colores y tipografías','Identidad'],image:'assets/branding.svg'},
{id:'6',category:'Redes',title:'Pack Social',price:'$4 USD',description:'Diseños para TikTok, YouTube, Discord y otras plataformas.',features:['Posts / portadas','Adaptación','Estilo consistente'],image:'assets/social.svg'}],
projects:[
{id:'p1',category:'Logos',title:'Nova Identity',description:'Logo minimalista y sistema visual para una comunidad gaming.',image:'assets/logo.svg',status:'COMPLETADO'},
{id:'p2',category:'Banners',title:'Server Network',description:'Banner premium con composición enfocada en impacto visual.',image:'assets/banner.svg',status:'COMPLETADO'},
{id:'p3',category:'Diseños',title:'Creative Pack',description:'Diseño promocional para publicaciones y anuncios.',image:'assets/design.svg',status:'COMPLETADO'},
{id:'p4',category:'Webs',title:'Digital Landing',description:'Landing responsive con animaciones y presentación de servicios.',image:'assets/web.svg',status:'AVANZANDO'},
{id:'p5',category:'Branding',title:'Brand System',description:'Identidad completa con paleta, tipografía y aplicaciones.',image:'assets/branding.svg',status:'COMPLETADO'},
{id:'p6',category:'Redes',title:'Social Pack',description:'Kit de contenido visual para redes sociales.',image:'assets/social.svg',status:'COMPLETADO'}],
reviews:[{id:'r1',name:'Cliente verificado',role:'Servidor Minecraft',rating:5,text:'Muy buen trabajo, atención rápida y diseño profesional.'},{id:'r2',name:'Cliente verificado',role:'Creador',rating:5,text:'Diseños limpios y todo quedó listo para publicar.'},{id:'r3',name:'Cliente verificado',role:'Proyecto digital',rating:5,text:'Excelente presentación y buena comunicación.'}],
orders:[{id:'ORD-001',client:'Ejemplo',service:'Banner Premium',price:'$5 USD',status:'COMPLETADO',date:'2026-10-01'}],
texts:{servicesTitle:'Servicios diseñados para destacar',servicesIntro:'Revisa cada servicio, su precio y lo que incluye.',portfolioTitle:'Trabajos y diseños',portfolioIntro:'Logos, banners, diseños, webs, branding y contenido social.',processTitle:'Cómo trabajamos',process:['01 — Cuéntanos tu idea','02 — Definimos estilo y detalles','03 — Diseñamos y revisamos','04 — Entregamos el resultado final'],reviewsTitle:'Lo que dicen nuestros clientes',contactTitle:'¿Listo para llevar tu proyecto al siguiente nivel?',contactText:'Escríbenos con tu idea, servicio y referencias.'}}
window.getStudioConfig=()=>{try{return JSON.parse(localStorage.getItem('imalafama66_config'))||structuredClone(window.DEFAULT_CONFIG)}catch(e){return structuredClone(window.DEFAULT_CONFIG)}};
window.saveStudioConfig=x=>localStorage.setItem('imalafama66_config',JSON.stringify(x));
