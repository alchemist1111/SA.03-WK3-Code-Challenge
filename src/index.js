document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch film data from the server
  function fetchFilmData() {
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(data => {
        // Call a function to render the film list on the left side of the page
        renderFilmList(data);
        // Display details of the first film by default
        if (data.length > 0) {
          displayFilmDetails(data[0].id);
        }
      })
      .catch(error => console.error('Error fetching film data:', error));
  };

  // Function to render film list on the left side of the page
  function renderFilmList(films) {
    const filmsListElement = document.getElementById('films');

    filmsListElement.innerHTML = ''; // Clear existing list
    films.forEach(film => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = film.title;

      // Add click event listener to each film item
      li.addEventListener('click', () => {
        displayFilmDetails(film.id);
        fetch(`http://localhost:3000/films/${film.id}`)
          .then(response => response.json())
          .then(data => {
            const posterElement = document.getElementById('poster');
            posterElement.src = data.poster;
          })
          .catch(error => console.error('Error fetching film details:', error));
      });
      filmsListElement.appendChild(li)
    });
  };

  // Function to display film details on the right side of the page
  function displayFilmDetails(filmId) {
    fetch(`http://localhost:3000/films/${filmId}`)
      .then(response => response.json())
      .then(data => {
        const titleElement = document.getElementById('title');
        const runtimeElement = document.getElementById('runtime');
        const filmInfoElement = document.getElementById('film-info');
        const showtimeElement = document.getElementById('showtime');
        const ticketNumElement = document.getElementById('ticket-num');
        const buyTicketButton = document.getElementById('buy-ticket');

        // Update film details
        titleElement.textContent = data.title;
        runtimeElement.textContent = `${data.runtime} minutes`;
        filmInfoElement.textContent = data.description;
        showtimeElement.textContent = data.showtime;
        const availableTickets = data.capacity - data.tickets_sold;
        ticketNumElement.textContent = `${availableTickets} remaining tickets`;

        // Update Buy Ticket button
        if (availableTickets > 0) {
          buyTicketButton.textContent = 'Buy Ticket';
          buyTicketButton.disabled = false;
        } else {
          buyTicketButton.textContent = 'Sold Out';
          buyTicketButton.disabled = true;
        }

        // Add event listener to Buy Ticket button
        buyTicketButton.onclick = () => handleBuyTicket(filmId, availableTickets, data);
      })
      .catch(error => console.error('Error fetching film details:', error));
  };

  // Function to handle buying a ticket
  function handleBuyTicket(filmId, availableTickets, data) {
    if (availableTickets > 0) {
      const updatedTicketsSold = data.tickets_sold + 1;
      updateTicketsSoldOnServer(filmId, updatedTicketsSold, data);

      // Update ticket count on the frontend
      const ticketNumElement = document.getElementById('ticket-num');
      ticketNumElement.textContent = `${availableTickets - 1} remaining tickets`;
    }
  };

  // Function to update tickets sold on the server
  function updateTicketsSoldOnServer(filmId, updatedTicketsSold, data) {
    fetch(`http://localhost:3000/films/${filmId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
        },
        body: JSON.stringify({
          tickets_sold: updatedTicketsSold
        })
      })
      .then(response => response.json())
      .then(data => console.log('Updated tickets sold on server:', data))
      .catch(error => console.error('Error updating tickets sold on server:', error));
    };
    
     
  
    // Fetch film data when the page loads
    fetchFilmData();
  });