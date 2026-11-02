

console.log("Bienvenido a mi portafolio");

s
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        console.log("Navegando por el portafolio");
    });
});
