
  const quotes = [
    {
      quote:
      "A genius is the one most like himself.",
      author: "Thelonious Monk"
    },
    {
      quote:
      "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche"
    },
    {
      quote:
      "Everything you can imagine is real.",
      author: "Pable Picasso"
    },
    {
      quote:
      "Life isn't about finding yourself. Life is about creating yourself",
      author: "George Bernard Shaw"
    },
    {
      quote:
      "Reality is wrong, dreams are for real.",
      author: "Tupac"
    },
    {
      quote:
      "Happiness is a state of activity.",
      author: "Aristotle"
    },
    {
      quote:
      "The world breaks everything, and afterward, some are strong at the broken places.",
      author: "Ernest Hemingway"
    }
  ];

  const button = document.getElementById("generate-btn");

  button.addEventListener("click", getQuote);



  function getQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  };
