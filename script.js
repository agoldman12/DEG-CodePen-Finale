/* 
Below we have an array of quotes from the movie "Ghostbusters".

Goal: Combine what you've learned about DOM selectors and event listeners to complete the task

Task: Make the "Add Quote" and "Remove Quote" buttons add/remove a "Show Quote" button within the "quotes" element. Then, make clicking the newly added "Show Quote" button display a random quote from the provided quotes array. You can not alter the DOM, but can use the provided helper functions below.

Hint: Keep memory leaks in mind when adding/removing event listeners.
*/

const quotes = [
  {
    speaker: 'Egon Spengler',
    text: `Don't cross the streams!`
  },
  {
    speaker: 'Louis Tully',
    text: `Ok, who brought the dog?`
  },
  {
    speaker: 'Peter Venkman',
    text: `Back off, man! I'm a scientist!`
  },
  {
    speaker: 'Dana Barrett',
    text: `There is no Dana, only Zool!`
  }
];
const quotesEl = document.querySelector('.quotes');

function addQuoteButton() {
  const quoteButton = document.querySelector('.show-quote');

  quoteButton.classList.toggle('isHidden');
};


function removeQuoteButton() {
   addQuoteButton();
};

function displayQuote() {
  const quote = quotes[Math.floor(Math.random()*quotes.length)];
  alert(`"${quote.text}" - ${quote.speaker}`);
}

document.addEventListener('click', function(e) {
    if(e.target.dataset.action == "add"){
       addQuoteButton(e);
    }else if(e.target.dataset.action == "remove"){
       removeQuoteButton(e);
    }else if(e.target.dataset.action == "show-quote"){
      displayQuote(e);
    }
});
    
