const quotes = [
  {
    quote: "Subtle is the lord",
    author: "Albert Einstein",
  },
  {
    quote: "The way to get stated is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "I don't give a fxxx about what you think of",
    author: "Me",
  },
  {
    quote: "Be less, Do more",
    author: "Me",
  },
  {
    quote: "Enjoy your life",
    author: "Dad",
  },
  {
    quote: "Know yourself",
    author: "Socrates",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
