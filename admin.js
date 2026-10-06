(() => {
  let data = getStoreData();
  const $=s=>document.querySelector(s);
  const $$=s=>document.querySelectorAll(s);
  const titles={dashboard:"Dashboard",general:"General",products:"Tienda",projects:"Trabajos",reviews:"Reseñas",stats:"Ventas / Stats",backup:"Copias"};

  function esc(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  function notify(m){const t=$("#adminToast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}
  function getPath(obj,path){return path.split(".").reduce((a,k)=>a?.[k],obj);}
  function setPath(obj,path,val){const a=path.split(".");const last=a.pop();const target=a.reduce((o,k)=>o[k],obj);target[last]=val;}

  function fillGeneral(){
    $$("[data-field]").forEach(el=>{
      const v=getPath(data,el.dataset.field);
      el.value=v??"";
      el.oninput=()=>setPath(data,el.dataset.field,el.type==="number"?Number(el.value):el.value);
    });
    $("#rawData").value=JSON.stringify(data,null,2);
  }
  function productEditor(p,i){
    return `<div class="edit-card">
      <div class="edit-title"><b>Producto #${i+1}</b><button class="delete-btn" data-delete-product="${p.id}">Eliminar</button></div>
      <div class="form-grid">
        <label>Nombre<input data-p="${p.id}" data-k="name" value="${esc(p.name)}"></label>
        <label>Precio<input type="number" step="0.01" data-p="${p.id}" data-k="price" value="${p.price}"></label>
        <label>Etiqueta<input data-p="${p.id}" data-k="tag" value="${esc(p.tag)}"></label>
        <label>Imagen URL<input data-p="${p.id}" data-k="image" value="${esc(p.image)}"></label>
        <label class="full">Descripción<textarea data-p="${p.id}" data-k="description">${esc(p.description)}</textarea></label>
      </div></div>`;
  }
  function projectEditor(p,i){
    return `<div class="edit-card">
      <div class="edit-title"><b>Trabajo #${i+1}</b><button class="delete-btn" data-delete-project="${p.id}">Eliminar</button></div>
      <div class="form-grid">
        <label>Título<input data-pr="${p.id}" data-k="title" value="${esc(p.title)}"></label>
        <label>Categoría<input data-pr="${p.id}" data-k="category" value="${esc(p.category)}"></label>
        <label>Imagen URL<input data-pr="${p.id}" data-k="image" value="${esc(p.image)}"></label>
        <label class="full">Descripción<textarea data-pr="${p.id}" data-k="description">${esc(p.description)}</textarea></label>
      </div></div>`;
  }
  function reviewEditor(r,i){
    return `<div class="edit-card">
      <div class="edit-title"><b>Reseña #${i+1}</b><button class="delete-btn" data-delete-review="${r.id}">Eliminar</button></div>
      <div class="form-grid">
        <label>Nombre<input data-r="${r.id}" data-k="name" value="${esc(r.name)}"></label>
        <label>Rol<input data-r="${r.id}" data-k="role" value="${esc(r.role)}"></label>
        <label>Estrellas (1-5)<input type="number" min="1" max="5" data-r="${r.id}" data-k="rating" value="${r.rating}"></label>
        <label>Avatar URL<input data-r="${r.id}" data-k="avatar" value="${esc(r.avatar)}"></label>
        <label class="full">Reseña<textarea data-r="${r.id}" data-k="text">${esc(r.text)}</textarea></label>
      </div></div>`;
  }
  function renderLists(){
    $("#productsAdmin").innerHTML=data.products.map(productEditor).join("");
    $("#projectsAdmin").innerHTML=data.projects.map(projectEditor).join("");
    $("#reviewsAdmin").innerHTML=data.reviews.map(reviewEditor).join("");
    bindListInputs();
  }
  function bindListInputs(){
    $$("[data-p]").forEach(e=>e.oninput=()=>updateItem(data.products,e.dataset.p,e.dataset.k,e.value,e.type));
    $$("[data-pr]").forEach(e=>e.oninput=()=>updateItem(data.projects,e.dataset.pr,e.dataset.k,e.value,e.type));
    $$("[data-r]").forEach(e=>e.oninput=()=>updateItem(data.reviews,e.dataset.r,e.dataset.k,e.value,e.type));
    $$("[data-delete-product]").forEach(b=>b.onclick=()=>{data.products=data.products.filter(x=>x.id!=b.dataset.deleteProduct);renderLists();notify("Producto eliminado");});
    $$("[data-delete-project]").forEach(b=>b.onclick=()=>{data.projects=data.projects.filter(x=>x.id!=b.dataset.deleteProject);renderLists();notify("Trabajo eliminado");});
    $$("[data-delete-review]").forEach(b=>b.onclick=()=>{data.reviews=data.reviews.filter(x=>x.id!=b.dataset.deleteReview);renderLists();notify("Reseña eliminada");});
  }
  function updateItem(arr,id,key,val,type){const item=arr.find(x=>x.id==id);if(item)item[key]=type==="number"?Number(val):val;}

  function refreshDash(){
    $("#dSales").textContent=data.stats.sales;$("#dProjects").textContent=data.projects.length;$("#dReviews").textContent=data.reviews.length;$("#dRating").textContent=Number(data.stats.rating).toFixed(1);
  }
  function save(){
    saveStoreData(data); refreshDash(); $("#rawData").value=JSON.stringify(data,null,2); notify("Cambios guardados correctamente");
  }

  function openTab(name){
    $$(".tab").forEach(t=>t.classList.add("hidden"));
    $("#tab-"+name).classList.remove("hidden");
    $$(".side-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===name));
    $("#panelTitle").textContent=titles[name];
    if(name==="general"||name==="stats") fillGeneral();
    if(name==="products"||name==="projects"||name==="reviews") renderLists();
    if(name==="dashboard") refreshDash();
    if(name==="backup") $("#rawData").value=JSON.stringify(data,null,2);
  }

  function login(){
    if($("#loginPassword").value==="admin123" || localStorage.getItem("mi_studio_admin_password")===btoa($("#loginPassword").value)){
      localStorage.setItem("mi_studio_admin_ok","1");$("#login").classList.add("hidden");$("#adminApp").classList.remove("hidden");refreshDash();
    } else notify("Contraseña incorrecta");
  }

  $("#loginBtn").onclick=login;
  $("#loginPassword").onkeydown=e=>{if(e.key==="Enter")login();};
  if(localStorage.getItem("mi_studio_admin_ok")==="1"){$("#login").classList.add("hidden");$("#adminApp").classList.remove("hidden");}
  $$(".side-btn").forEach(b=>b.onclick=()=>openTab(b.dataset.tab));
  $("#logoutBtn").onclick=()=>{localStorage.removeItem("mi_studio_admin_ok");location.reload();};
  $("#saveBtn").onclick=save;

  $("#addProduct").onclick=()=>{data.products.push({id:Date.now(),name:"Nuevo producto",description:"Descripción del producto.",price:5,tag:"NUEVO",image:""});renderLists();};
  $("#addProject").onclick=()=>{data.projects.push({id:Date.now(),title:"Nuevo trabajo",category:"Proyecto",description:"Descripción del trabajo.",image:""});renderLists();};
  $("#addReview").onclick=()=>{data.reviews.push({id:Date.now(),name:"Nuevo cliente",role:"Cliente",text:"Escribe aquí la reseña.",rating:5,avatar:""});renderLists();};

  $("#exportBtn").onclick=()=>{
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");
    a.href=URL.createObjectURL(blob);a.download="mi-studio-backup.json";a.click();URL.revokeObjectURL(a.href);
  };
  $("#importFile").onchange=e=>{
    const f=e.target.files[0];if(!f)return;const r=new FileReader();
    r.onload=()=>{try{data=JSON.parse(r.result);save();renderLists();fillGeneral();notify("Datos importados");}catch(_){notify("JSON no válido");}};r.readAsText(f);
  };
  $("#resetBtn").onclick=()=>{if(confirm("¿Restaurar todos los datos iniciales?")){data=structuredClone(DEFAULT_DATA);save();renderLists();fillGeneral();notify("Datos restaurados");}};
  $("#rawData").oninput=()=>{try{data=JSON.parse($("#rawData").value)}catch(_){}};

  refreshDash(); fillGeneral(); renderLists();
})();
