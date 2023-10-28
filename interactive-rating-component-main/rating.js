const ratingButtons = document.getElementsByTagName('button');
const result = document.querySelector('.result');
const ratingState = document.querySelector('.rating-state');
const thankState = document.querySelector('.thank-state');
const submitButton = document.getElementById('submit-button');
const backButton = document.querySelector('.back-button');
    
function handleClick(value) {
   let number = '';
   result.innerHTML = (`You selected ${number += value} of 5`);
}

for (let i = 0; i < ratingButtons.length; i++) {
   ratingButtons[i].addEventListener('click', () => {
      handleClick(i + 1);
   })
}

function changeColor() {
   for (let i = 0; i < ratingButtons.length; i++) {
      ratingButtons[i].classList.add('rating');
   }
}

for (let i = 0; i < ratingButtons.length; i++) {
   ratingButtons[i].addEventListener('click', changeColor);
}

submitButton.addEventListener('click', () => {
   ratingState.style.display = 'none';
   thankState.style.display = 'block';
})

backButton.addEventListener('click', () => {
   ratingState.style.display = 'block';
   thankState.style.display = 'none';
})
