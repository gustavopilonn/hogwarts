// JS para o ícone de Menu no lado superior direito do site para telas menores//
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// JS para o ícone de Pesquisa no lado superior direito do site para telas menores//

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

// JS para os Ícones iniciarem fechados//

window.nscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}