
  
  let heartCount = 0;
  let coins = 100;
  let copyCount = 0;

  
  const heartCountSpan = document.querySelector('.heart .count');
  const coinCountSpan = document.querySelector('.coin .count');
  const copyCountButton = document.querySelector('.copy button');

  
  coinCountSpan.textContent = coins;
  copyCountButton.textContent = `${copyCount} Copy`;

  
  const heartIcons = document.querySelectorAll('.heart-count');

  
  const callButtons = document.querySelectorAll('.call-btn');
  const copyButtons = document.querySelectorAll('.copy-btn');

  
  const historySection = document.querySelector('.call-history');
  const clearButton = historySection.querySelector('button');

  
  let callList = document.createElement('ul');
  callList.classList.add('mt-4', 'text-xs', 'space-y-2');
  historySection.appendChild(callList);

  
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  
  heartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      heartCount++;
      heartCountSpan.textContent = heartCount;
      icon.classList.add('text-red-500');
    });
  });

  
  callButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const serviceName = card.querySelector('.context h2').textContent;
      const serviceNumber = card.querySelector('.number h2').textContent;

      
      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      
      coins -= 20;
      coinCountSpan.textContent = coins;

      
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      
      const listItem = document.createElement('li');
      const time = getCurrentTime();
      listItem.innerHTML = `<strong>${serviceName}</strong>: ${serviceNumber} <span class="text-gray-500">at ${time}</span>`;
      callList.appendChild(listItem);
    });
  });

  
  copyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const number = card.querySelector('.number h2').textContent;

      
      navigator.clipboard.writeText(number)
        .then(() => {
          alert(`Copied ${number} to clipboard!`);
          copyCount++;
          copyCountButton.textContent = `${copyCount} Copy`;
        })
        .catch(() => {
          alert("Failed to copy!");
        });
    });
  });

  
  clearButton.addEventListener('click', () => {
    callList.innerHTML = '';
  });

