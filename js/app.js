const nuevaTarea = document.querySelector(".nuevaTarea");
const btnAgregar = document.querySelector(".btnAgregar");
const lista = document.querySelector(".lista-tareas");

const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas != "" && tareasGuardadas != null) {
    lista.innerHTML = tareasGuardadas;
}

btnAgregar.addEventListener("click", () => {
    const textoTarea = nuevaTarea.value;
    if (textoTarea != "") {
        lista.innerHTML += `<li> ${textoTarea}</li>`;
        localStorage.setItem("tareas", lista.innerHTML);
        nuevaTarea.value = "";
    }
});

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "gray";
        localStorage.setItem("tareas", lista.innerHTML);
    }
});
