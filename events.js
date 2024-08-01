document.addEventListener('DOMContentLoaded', function() {
    fetch('your-server-endpoint/events') // Substitua com o endpoint do seu servidor
        .then(response => response.json())
        .then(events => {
            const eventsList = document.getElementById('events-list');
            
            events.forEach(event => {
                const eventArticle = document.createElement('article');
                eventArticle.classList.add('event');
                
                eventArticle.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-details">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <a href="event-details.html?id=${event.id}" class="btn">Ver Fotos</a>
                    </div>
                `;
                
                eventsList.appendChild(eventArticle);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar eventos:', error);
            document.getElementById('events-list').innerHTML = '<p>Ocorreu um erro ao carregar os eventos. Tente novamente mais tarde.</p>';
        });
});
