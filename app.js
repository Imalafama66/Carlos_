(() => {
  let data = getStoreData();
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  function esc(v){ return String(v ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
  function money(v){ return "$" + Number(v || 0).toFixed(2); }
  function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2200); }

  function render(){
    const s=data.site, st=data.stats;
    document.title = s.name + " — Tienda";
    $("#brandName").textContent=s.name; $("#previewName").textContent=s.name; $("#footerBrand").textContent=s.name; $("#copyrightName").textContent=s.name;
    $("#heroTitle").innerHTML=esc(s.heroTitle).replace(/\b(destaque|destaca|diferente|profesional)\b/gi, m=>`<span>${esc(m)}</span>`);
    $("#heroText").textContent=s.heroText; $("#ctaTitle").textContent=s.ctaTitle; $("#ctaText").textContent=s.ctaText; $("#footerText").textContent=s.footerText;
    $("#discordBtn").href=s.discord; $("#ctaDiscord").href=s.discord; $("#ctaEmail").href="mailto:"+s.email;
    $("#salesMini").textContent=st.sales; $("#statSales").textContent=st.sales; $("#statProjects").textContent=data.projects.length; $("#statReviews").textContent=data.reviews.length; $("#statRating").textContent=Number(st.rating).toFixed(1);
    $("#productsGrid").innerHTML=data.products.map(p=>`
      <article class="product-card reveal">
        <div class="product-visual">${p.image?`<img src="${esc(p.image)}" alt="">`:`<span>${esc(p.name.slice(0,1))}</span>`}</div>
        <div class="tag">${esc(p.tag)}</div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>
        <div class="product-bottom"><strong>${money(p.price)}</strong><a href="${esc(s.discord)}" target="_blank" rel="noopener">Comprar ↗</a></div>
      </article>`).join("");
    $("#projectsGrid").innerHTML=data.projects.map(p=>`
      <article class="project-card reveal">
        <div class="project-image">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)}">`:`<span>${esc(p.title.slice(0,1))}</span>`}</div>
        <div class="project-info"><small>${esc(p.category)}</small><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p></div>
      </article>`).join("");
    $("#reviewsGrid").innerHTML=data.reviews.map(r=>`
      <article class="review-card reveal"><div class="quote">“</div><p>${esc(r.text)}</p>
      <div class="review-user">${r.avatar?`<img src="${esc(r.avatar)}" alt="">`:`<span class="avatar">${esc(r.name.slice(0,1))}</span>`}
      <div><b>${esc(r.name)}</b><small>${esc(r.role)}</small></div><span class="stars">${"★".repeat(Math.max(0,Math.min(5,Number(r.rating)||0)))}</span></div></article>`).join("");
    setupReveal();
  }

  function setupReveal(){
    const obs = new IntersectionObserver(entries => entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.08});
    $$(".reveal").forEach(x=>obs.observe(x));
  }

  $("#year").textContent=new Date().getFullYear();
  render();
})();
