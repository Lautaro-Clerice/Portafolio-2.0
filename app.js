//DECLARACION DE VARIABLES
const botonMenu = document.getElementById("toggle-menu");
const listaMenu = document.getElementById("navbar-list1");
const barraNav = document.getElementById("header");
const navbarOpciones = document.getElementsByClassName("navbar-opciones");
const logoNombre = document.getElementsByClassName("logoNombre");
const logo = document.getElementById("logoNombre")
const scrollTopUp = document.getElementsByClassName("scrollTop");
const imgFlecha = document.getElementById("imgFlecha");
const sobreMi = document.getElementById("sobre-mi");
//------------------------------------------------------------>

//------------------------------------------------------------>
// TRANSICION MENU HAMBURGUESA
botonMenu.addEventListener("click", () => {
  listaMenu.classList.toggle("visible");
  if (listaMenu.classList.contains("visible")) {
    listaMenu.style.maxHeight = listaMenu.scrollHeight + "0px";
    listaMenu.style.maxWidth = "500px"
  } else {
    listaMenu.style.maxHeight = "0";
  }
});
//--------------------------------------------------------------->

   // COLOR AL SCROLLER EL NAV
   window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const alturaCambio = 100;
    const alturaScrollTop = 400;

    if (scrollY > alturaScrollTop) {
      scrollTopUp[0].style.display = "flex";
    }else {
      scrollTopUp[0].style.display = "none";
    }

    if (scrollY > alturaCambio) {
      barraNav.classList.add("colorNavMov");
      for (let i = 0; i < navbarOpciones.length; i++) {
        navbarOpciones[i].style.color = "black";
      }
      
      // Cambia el color del texto en logoNombre a negro
      for (let i = 0; i < logoNombre.length; i++) {
        logoNombre[i].style.color = "black";
      }
    } else {
      barraNav.classList.remove("colorNavMov");
      for (let i = 0; i < navbarOpciones.length; i++) {
        navbarOpciones[i].style.color = "white";
      }
      // Cambia el color del texto en logoNombre a blanco
      for (let i = 0; i < logoNombre.length; i++) {
        logoNombre[i].style.color = "white";
      }
    }
  });
  
//-------------------------------------------------------------->

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".navbar-list a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    listaMenu.classList.remove("visible");
    listaMenu.style.maxHeight = "0";
  });
});
//--------------------------------------------------------------->

//---------------------------------------------------------------->
// Funcionalidad boton scrollTop y imgFlecha
scrollTopUp[0].addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//---------------------------------------------------------------->

