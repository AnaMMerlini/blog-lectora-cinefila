//Barra de progreso
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');

    if (!progressBar) {
        console.error("Elemento con id 'progress-bar' no encontrado.");
        return;
    }

    window.onscroll = function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

        progressBar.style.width = `${scrolled}%`;
    };
});