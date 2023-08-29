const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
    author: "Albert Camus",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote:
      "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    author: "Dr. Seuss",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// randomness 부여하기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
