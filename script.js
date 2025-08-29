
  // Initial values
  let heartCount = 0;
  let coins = 100;

  // Get navbar count elements
  const heartCountSpan = document.querySelector('.heart .count');
  const coinCountSpan = document.querySelector('.coin .count');

  // Select all heart icons in cards
  const heartIcons = document.querySelectorAll('.fa-heart');

  // Call buttons
  const callButtons = document.querySelectorAll('.button button:nth-child(2)'); // second button in .button

  // Call history container
  const callHistoryContainer = document.querySelector('.col-span-3'); // Adjust selector if needed

  // Clear history button
  const clearButton = callHistoryContainer.querySelector('button');

  // Call history list (create dynamically)
  const callList = document.createElement('ul');
  callList.classList.add('mt-4', 'text-xs', 'space-y-2');
  callHistoryContainer.appendChild(callList);

  // --- HEART ICON FUNCTIONALITY ---
  heartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      heartCount++;
      heartCountSpan.textContent = heartCount;
      icon.classList.add('text-red-500'); // Optional: add visual feedback
    });
  });

  // --- CALL BUTTON FUNCTIONALITY ---
  callButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card-1, .card-2, .card-3, .card-4, .card-5, .card-6, .card-7, .card-8, .card-9');
      const serviceName = card.querySelector('.context h2').textContent;
      const serviceNumber = card.querySelector('.number h2').textContent;

      // Check if enough coins
      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      // Show alert
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      // Deduct 20 coins
      coins -= 20;
      coinCountSpan.textContent = coins;

      // Add to call history
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${serviceName}</strong>: ${serviceNumber}`;
      callList.appendChild(listItem);
    });
  });

  // --- CLEAR HISTORY FUNCTIONALITY ---
  clearButton.addEventListener('click', () => {
    callList.innerHTML = '';
  });

