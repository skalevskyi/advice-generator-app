// Отримуємо елементи для оновлення тексту поради та її номеру
const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

// Функція для отримання випадкової поради із API
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json()) 
    .then(data => {
      const advice = data.slip; 
      adviceIdElement.textContent = advice.id; 
      adviceTextElement.textContent = `"${advice.advice}"`; 
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      adviceTextElement.textContent = "Oops! Something went wrong.";
    });
}

// Додаємо клас 'animate' для запуску анімації
function startDiceAnimation() {
    const diceImage = document.querySelector('#dice-button img');
    if (diceImage.classList.contains('animate')) {
        diceImage.classList.remove('animate'); // Видаляємо анімацію якщо вона була
    }
      
    diceImage.classList.add('animate'); // Додаємо анімацію знову
    
    // Знімаємо клас 'animate' після завершення анімації
    setTimeout(() => {
      diceImage.classList.remove('animate');
      fetchAdvice();
    }, 1000); 
}

// Додаємо подію на кнопку: при натисканні отримуємо нову пораду
diceButton.addEventListener('click', startDiceAnimation);

// Викликаємо функцію при завантаженні сторінки, щоб відразу показати одну пораду

startDiceAnimation();