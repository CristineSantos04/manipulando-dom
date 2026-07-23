

// clicar no button
// mostrar o menu 
// clicar no button 
// fechar o menu

const btnMenu = document.getElementById("btn-menu")

// add.eventListener - serve para observar ações/eventos em elementos do HTML
// e executar uma função quando esse evento acontece
// addEventListener(evento/ação, função)

btnMenu.addEventListener("click", abrirMenu)

function abrirMenu(){
    console.log("Clicou no button")
}