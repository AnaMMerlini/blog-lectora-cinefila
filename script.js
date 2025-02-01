//Reseñas ocultas
document.addEventListener('DOMContentLoaded', () => {
    const btnVerTodos = document.getElementById('btn-ver-todos');
    const infoOculta = document.getElementById('info-oculta');

    // Verificar si los elementos se seleccionan correctamente
    console.log(btnVerTodos); // Debería mostrar el botón en la consola
    console.log(infoOculta); // Debería mostrar el div con la información oculta

    btnVerTodos.addEventListener('click', () => {
        console.log('Botón clickeado'); // Confirmar que se hace clic en el botón
        if (infoOculta.classList.contains('oculto')) {
            infoOculta.classList.remove('oculto');
            btnVerTodos.textContent = 'Ocultar Reseñas';
        } else {
            infoOculta.classList.add('oculto');
            btnVerTodos.textContent = 'Ver todas las reseñas';
        }
    });
});

//Comentarios
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');
    
    // Cargar comentarios desde localStorage
    loadComments();

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Crear el comentario
        const newComment = {
            name: name,
            comment: comment,
            timestamp: new Date().toISOString()
        };

        // Guardar comentario en localStorage
        saveComment(newComment);

        // Añadir comentario al DOM
        addCommentToDOM(newComment);

        // Resetear formulario
        commentForm.reset();
    });

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => {
            addCommentToDOM(comment);
        });
    }

    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function addCommentToDOM(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.name}</strong><p>${comment.comment}</p><small>${new Date(comment.timestamp).toLocaleString()}</small>`;
        commentsContainer.appendChild(commentElement);
    }
});