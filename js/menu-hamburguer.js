

// clicar no button
// mostrar o menu 
// clicar no button 
// fechar o menu

const btnMenu = document.getElementById("btn-menu")
const navPrincipal = document.getElementById("navegacao-primaria")
const icone = btnMenu.querySelector("i")



// add.eventListener - serve para observar ações/eventos em elementos do HTML
// e executar uma função quando esse evento acontece
// addEventListener(evento/ação, função)

btnMenu.addEventListener("click", abrirMenu)

function abrirMenu() {

    //navPrincipal.style.display = "block"
    // Toggle adiciona/remove a classe 
    navPrincipal.classList.toggle("nav-ativa")

    // verifica se o menu está aberto. O metodo contais, retorna verdadeiro ou falso
    const menuAberto = navPrincipal.classList.contains("nav-ativa")

    // atualiza acessibilidade 
    btnMenu.setAttribute("aria-expaded", menuAberto)

    if(menuAberto){ 
        icone.classList.remove("bi-list")
        icone.classList.add("bi-x")
    } else{
        icone.classList.remove("bi-x")
        icone.classList.add("bi-list")
    }

}


