const inputsVazios = document.querySelectorAll('.input');

const formulario = document.querySelector('.formulario');


inputsVazios.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('preenchido')
        }
    })
})


formulario.addEventListener('submit', function(event) { 
    inputsVazios.forEach(input => {
        if (input.value === "") {
            event.preventDefault();
            input.classList.add('mudar-cor');
            input.nextElementSibling.classList.add('campo-invalido');
        } else {
            return true
        }
    })
})