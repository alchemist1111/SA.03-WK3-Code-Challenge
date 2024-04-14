document.addEventListener('DOMContentLoaded', function () {
  // Function to fetch film data from the server
  function fetchFilmData() {
    fetch('https://json-server-avvr.onrender.com/films')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch film data');
        }
        return response.json();
      })
      .then(data => {
        renderFilmList(data);
        if (data.length > 0) {
          displayFilmDetails(data[0]);
        }
      })
      .catch(error => console.error('Error fetching film data:', error.message));
  }

  // Function to render film list on the left side of the page
  function renderFilmList(films) {
    const filmsListElement = document.getElementById('films');
    filmsListElement.innerHTML = ''; // Clear existing list

    films.forEach(film => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = film.title;
      li.addEventListener('click', () => displayFilmDetails(film));
      filmsListElement.appendChild(li);
    });
  }

  // Function to display film details on the right side of the page
  function displayFilmDetails(film) {
    const {
      id,
      title,
      runtime,
      description,
      showtime,
      tickets_sold,
      capacity,
      poster
    } = film;

    const titleElement = document.getElementById('title');
    const runtimeElement = document.getElementById('runtime');
    const filmInfoElement = document.getElementById('film-info');
    const showtimeElement = document.getElementById('showtime');
    const ticketNumElement = document.getElementById('ticket-num');
    const buyTicketButton = document.getElementById('buy-ticket');
    const posterElement = document.getElementById('poster');

    titleElement.textContent = title;
    runtimeElement.textContent = `${runtime} minutes`;
    filmInfoElement.textContent = description;
    showtimeElement.textContent = showtime;

    const availableTickets = capacity - tickets_sold;
    ticketNumElement.textContent = `${availableTickets} remaining tickets`;

    buyTicketButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out';
    buyTicketButton.disabled = availableTickets <= 0;

    buyTicketButton.onclick = () => handleBuyTicket(id, tickets_sold, capacity);
    posterElement.src = poster;
  }

  // Function to handle buying a ticket
  function handleBuyTicket(filmId, ticketsSold, capacity) {
    event.preventDefault();
    const updatedTicketsSold = ticketsSold + 1;
    if (updatedTicketsSold <= capacity) {
      updateTicketsSoldOnServer(filmId, updatedTicketsSold)
        .then(() => {
          fetchFilmData(); // Refresh film data to update ticket count
        })
        .catch(error => console.error('Error updating tickets sold on server:', error.message));
    } else {
      console.error('Cannot buy more tickets than the capacity allows');
    }
  };
  

  // Function to update tickets sold on the server
  async function updateTicketsSoldOnServer(filmId, updatedTicketsSold) {
    const response = await fetch(`https://json-server-avvr.onrender.com/${filmId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tickets_sold: updatedTicketsSold
      })
    });
    if (!response.ok) {
      throw new Error('Failed to update tickets sold on server');
    }
  }

  // Fetch film data when the page loads
  fetchFilmData();
});

