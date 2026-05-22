const elementos = document.querySelectorAll('.animar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        }
    });
});
elementos.forEach((elemento) => {
    observer.observe(elemento);
});