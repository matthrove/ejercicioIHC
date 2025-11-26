// Selecciona el botón de libro
const btn = document.querySelector(".menu-toggle");

// Selecciona el panel de contenido
const panelContent = document.querySelector(".panel-content");
const headerPanel = document.querySelector(".header-panel");

// Al hacer clic en el botón de libro
if (btn && panelContent) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Alterna la clase "active" en el panel
    panelContent.classList.toggle("active");
  });

  // Cerrar el panel al hacer click fuera de él
  document.addEventListener("click", (e) => {
    // En móviles, siempre cerrar al hacer click fuera
    if (window.innerWidth <= 768) {
      if (!btn.contains(e.target) && !panelContent.contains(e.target)) {
        panelContent.classList.remove("active");
      }
    }
    // En desktop, también permitir cerrar con click fuera si está activo
    else {
      if (panelContent.classList.contains("active")) {
        if (!headerPanel.contains(e.target)) {
          panelContent.classList.remove("active");
        }
      }
    }
  });

  // Prevenir que el hover cierre el panel cuando está activo en móviles
  if (headerPanel) {
    headerPanel.addEventListener("mouseleave", () => {
      // Solo cerrar con hover en desktop
      if (window.innerWidth > 768) {
        panelContent.classList.remove("active");
      }
    });
  }
}
