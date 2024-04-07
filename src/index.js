// // // write your code here
// // aion to fetch image data from the server
// //     function fetchImageData() {
// //       fetch('http://localhost:4002/images/1')
// //         .then(response => response.json())
// //         .then(data => {
// //           // Call a function to render the image data on the page
// //           renderImageData(data);
// //         })
// //         .catch(error => console.error('Error fetching image data:', error));
// //     };
  
// //     // Function to display image data on the page
// //     function displayImageData(data) {
// //       const titleElement = document.getElementById('poster');
// //       const imageElement = document.getElementById('poster');
// //       const likeCountElement = document.getElementById('like-count');
// //       const commentsListElement = document.getElementById('comments-list');
  
// //       // Update title, image source, and like count
// //       titleElement.textContent = data.title;
// //       imageElement.src = data.image;
// //       likeCountElement.textContent = `${data.likes} likes`;
  
// //       // Clear existing comments
// //       commentsListElement.innerHTML = '';
  
// //       // Render comments
// //       data.comments.forEach(comment => {
// //         const li = document.createElement('li');
// //         li.textContent = comment.content;
// //         commentsListElement.appendChild(li);
// //       });
// //     }
  
// //     // Function to handle like button click
// //     function handleLikeButtonClick() {
// //       // Increment like count and update UI
// //       const likeCountElement = document.getElementById('like-count');
// //       const currentLikes = parseInt(likeCountElement.textContent);
// //       likeCountElement.textContent = `${currentLikes + 1} likes`;
// //     }
  
// //     // Function to handle comment submission
// //     function handleCommentSubmission(event) {
// //       event.preventDefault();
// //       const commentInput = document.getElementById('comment');
// //       const commentContent = commentInput.value.trim();
  
// //       if (commentContent !== '') {
// //         // Add the new comment to the UI
// //         const commentsListElement = document.getElementById('comments-list');
// //         const li = document.createElement('li');
// //         li.textContent = commentContent;
// //         commentsListElement.appendChild(li);
  
// //         // Clear the comment input field
// //         commentInput.value = '';
// //       }
// //     }
  
// //     // Event listeners
// //     document.getElementById('like-button').addEventListener('click', handleLikeButtonClick);
// //     document.getElementById('comment-form').addEventListener('submit', handleCommentSubmission);
  
// //     // Fetch image data when the page loads
// //     fetchImageData();
// //   });

// // document.addEventListener('DOMContentLoaded', function () {
// //     // Function to fetch film data from the server
// //     function fetchFilmData() {
// //       fetch('http://localhost:5000/films/1')
// //         .then(response => response.json())
// //         .then(data => {
// //           // Call a function to render the film data on the page
// //           renderFilmData(data);
// //         })
// //         .catch(error => console.error('Error fetching film data:', error));
// //     }
  
// //     // Function to display film data on the page
// //     function fetchFilmData(data) {
// //       const titleElement = document.getElementById('title');
// //       const runTimeElement = document.getElementById('runtime');
// //       const filmInfoElement = document.getElementById('film-info');
// //       const showTimeElement = document.getElementById('showtime');
// //       const ticketNumElement = document.getElementById('ticket-num');
// //       const buyTicketButton = document.getElementById('buy-ticket');
  
// //       // Update film details
// //       titleElement.textContent = data.title;
// //       runTimeElement.textContent = `${data.runtime} minutes`;
// //       filmInfoElement.textContent = data.description;
// //       showTimeElement.textContent = data.showtime;
// //       const availableTickets = data.capacity - data.ticketsSold;
// //       ticketNumElement.textContent = `${availableTickets} remaining tickets`;
  
// //       // Update Buy Ticket button
// //       if (availableTickets > 0) {
// //         buyTicketButton.textContent = 'Buy Ticket';
// //         buyTicketButton.disabled = false;
// //       } else {
// //         buyTicketButton.textContent = 'Sold Out';
// //         buyTicketButton.disabled = true;
// //       };
  
// //       // Add event listener to Buy Ticket button
// //       buyTicketButton.addEventListener('click', () => handleBuyTicket(data.id, availableTickets));
// //     };
  
// //     // Function to handle buying a ticket
// //     function handleBuyTicket(filmId, availableTickets) {
// //       if (availableTickets > 0) {
// //         // Update tickets sold on the server
// //         const updatedTicketsSold = data.ticketsSold + 1;
// //         updateTicketsSoldOnServer(filmId, updatedTicketsSold);
// //         // Update ticket count on the frontend
// //         const ticketNumElement = document.getElementById('ticket-num');
// //         ticketNumElement.textContent = `${availableTickets - 1} remaining tickets`;
// //       }
// //     }
  
// //     // Function to update tickets sold on the server
// //     function updateTicketsSoldOnServer(filmId, updatedTicketsSold) {
// //       fetch(`http://localhost:4002/films/${filmId}`, {
// //         method: 'PATCH',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'accept': 'application/json'
// //         },
// //         body: JSON.stringify({
// //           ticketsSold: updatedTicketsSold
// //         })
// //       })
// //       .then(response => response.json())
// //       .then(data => console.log('Updated tickets sold on server:', data))
// //       .catch(error => console.error('Error updating tickets sold on server:', error));
// //     }
  
// //     // Fetch film data when the page loads
// //     fetchFilmData();
// //   });
  

// document.addEventListener('DOMContentLoaded', function () {
//     // Function to fetch film data from the server
//     function fetchFilmData() {
//       fetch('http://localhost:5000/films/1')
//         .then(response => response.json())
//         .then(data => {
//           // Call a function to render the film data on the page
//           renderFilmData(data);
//         })
//         .catch(error => console.error('Error fetching film data:', error));
//     }
  
//     // Function to display film data on the page
//     function renderFilmData(data) {
//       const titleElement = document.getElementById('title');
//       const runTimeElement = document.getElementById('runtime');
//       const filmInfoElement = document.getElementById('film-info');
//       const showTimeElement = document.getElementById('showtime');
//       const ticketNumElement = document.getElementById('ticket-num');
//       const buyTicketButton = document.getElementById('buy-ticket');
  
//       // Update film details
//       titleElement.textContent = data.title;
//       runTimeElement.textContent = `${data.runtime} minutes`;
//       filmInfoElement.textContent = data.description;
//       showTimeElement.textContent = data.showtime;
//       const availableTickets = data.capacity - data.ticketsSold;
//       ticketNumElement.textContent = `${availableTickets} remaining tickets`;
  
//       // Update Buy Ticket button
//       if (availableTickets > 0) {
//         buyTicketButton.textContent = 'Buy Ticket';
//         buyTicketButton.disabled = false;
//       } else {
//         buyTicketButton.textContent = 'Sold Out';
//         buyTicketButton.disabled = true;
//       };
  
//       // Add event listener to Buy Ticket button
//       buyTicketButton.addEventListener('click', () => handleBuyTicket(data.id, availableTickets));
//     };
  
//     // Function to handle buying a ticket
//     function handleBuyTicket(filmId, availableTickets) {
//       if (availableTickets > 0) {
//         // Update tickets sold on the server
//         const updatedTicketsSold = data.ticketsSold + 1;
//         updateTicketsSoldOnServer(filmId, updatedTicketsSold);
//         // Update ticket count on the frontend
//         const ticketNumElement = document.getElementById('ticket-num');
//         ticketNumElement.textContent = `${availableTickets - 1} remaining tickets`;
//       }
//     }
  
//     // Function to update tickets sold on the server
//     function updateTicketsSoldOnServer(filmId, updatedTicketsSold) {
//       fetch(`http://localhost:5000/films/${filmId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'accept': 'application/json'
//         },
//         body: JSON.stringify({
//           ticketsSold: updatedTicketsSold
//         })
//       })
//       .then(response => response.json())
//       .then(data => console.log('Updated tickets sold on server:', data))
//       .catch(error => console.error('Error updating tickets sold on server:', error));
//     }
  
//     // Fetch film data when the page loads
//     fetchFilmData();
//   });
  
document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch film data from the server
    function fetchFilmData() {
      fetch('http://localhost:5000/films')
        .then(response => response.json())
        .then(data => {
          // Call a function to render the film data on the page
          renderFilmList(data);
          // Display details of the first film by default
          if (data.length > 0) {
            displayFilmData(data[0]);
          }
        })
        .catch(error => console.error('Error fetching film data:', error));
    }
  
    // Function to render film list on the page
    // Function to render film list on the page
function renderFilmList(films) {
    const filmsListElement = document.getElementById('films');
    filmsListElement.innerHTML = ''; // Clear existing list
    films.forEach(film => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = film.title;
  
      // Add img element for movie poster
      const img = document.createElement('img');
      img.src = film.poster_url;
      img.alt = film.title;
      li.appendChild(img);
  
      // Add click event listener to each film item
      li.addEventListener('click', () => displayFilmData(film));
      filmsListElement.appendChild(li);
    });
  }
  
    // Function to display film data on the page
    function displayFilmData(data) {
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
      buyTicketButton.addEventListener('click', () => handleBuyTicket(data.id, availableTickets));
    }
  
    // Function to handle buying a ticket
    function handleBuyTicket(filmId, availableTickets) {
      if (availableTickets > 0) {
        // Update tickets sold on the server
        const updatedTicketsSold = data.tickets_sold + 1;
        updateTicketsSoldOnServer(filmId, updatedTicketsSold);
        // Update ticket count on the frontend
        const ticketNumElement = document.getElementById('ticket-num');
        ticketNumElement.textContent = `${availableTickets - 1} remaining tickets`;
      }
    }
  
    // Function to update tickets sold on the server
    function updateTicketsSoldOnServer(filmId, updatedTicketsSold) {
      fetch(`http://localhost:5000/films/${filmId}`, {
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
    }
  
    // Fetch film data when the page loads
    fetchFilmData();
  });
  