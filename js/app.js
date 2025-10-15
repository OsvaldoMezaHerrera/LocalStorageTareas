const nuevaTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista-tareas");

const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
  lista.innerHTML = tareasGuardadas;
}

btnAgregar.addEventListener("click", () => {
  if (nuevaTarea.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = nuevaTarea.value;
  lista.appendChild(li);
  nuevaTarea.value = "";
  guardar();
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completada");
    guardar();
  }
});

function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
