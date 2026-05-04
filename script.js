/* =========================
   SCROLL BOTÓN COMENZAR
========================= */
const btnComenzar = document.getElementById("btnComenzar");

if (btnComenzar) {
  btnComenzar.addEventListener("click", () => {
    document.getElementById("quienes").scrollIntoView({
      behavior: "smooth"
    });
  });
}


/* =========================
   MENÚ RESPONSIVE
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  // Usamos classList para mayor estabilidad en el responsive
  menu.classList.toggle("active"); 
  
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}


/* =========================
   CAMBIO DE TEMA + GUARDADO
========================= */
const toggle = document.getElementById("themeToggle");

// Cargar tema guardado
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  if (toggle) toggle.textContent = "☀️";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");
    toggle.textContent = isLight ? "☀️" : "🌙";

    // Guardar preferencia
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}


/* =========================
   ANIMACIONES SCROLL (REVEAL)
========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15 // Se activa un poco antes para mejor fluidez
});

// Ahora observamos las nuevas tarjetas individuales y las secciones
// Actualiza esta línea en tu JS actual:
const elements = document.querySelectorAll(".card, .producto-card, .perfil-card, .quienes-card");

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


/* =========================
   NAVBAR DINÁMICA (SCROLL)
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Fondo más sólido al bajar
    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.backdropFilter = "blur(25px)";
    navbar.style.padding = "10px 40px"; // Se hace un poco más delgada
  } else {
    // Fondo más transparente al inicio
    navbar.style.background = "rgba(255,255,255,0.05)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.padding = "15px 40px";
  }
});

/* MENÚ RESPONSIVE: Hamburguesa y Lista */
function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggleBtn = document.querySelector(".menu-toggle");

  menu.classList.toggle("active");

  // Cambia el ícono de hamburguesa (☰) a cerrar (✕) según el estado
  if (menu.classList.contains("active")) {
    toggleBtn.innerHTML = "✕"; 
  } else {
    toggleBtn.innerHTML = "☰";
  }
}

// Cerrar el menú automáticamente al hacer clic en una opción
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById("menu");
    const toggleBtn = document.querySelector(".menu-toggle");
    menu.classList.remove("active");
    toggleBtn.innerHTML = "☰";
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggleBtn = document.querySelector(".menu-toggle");

  menu.classList.toggle("active");

  // Cambio de icono dinámico
  if (menu.classList.contains("active")) {
    toggleBtn.innerHTML = "✕"; 
    document.body.style.overflow = "hidden"; // Evita que la página se mueva al estar abierto
  } else {
    toggleBtn.innerHTML = "☰";
    document.body.style.overflow = "auto"; // Devuelve el scroll
  }
}

// Cerrar el menú automáticamente cuando eligen una opción
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById("menu");
    const toggleBtn = document.querySelector(".menu-toggle");
    menu.classList.remove("active");
    toggleBtn.innerHTML = "☰";
    document.body.style.overflow = "auto";
  });
});