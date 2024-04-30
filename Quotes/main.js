var quotes = [
    { text: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    { text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "― Albert Einstein" },
    { text: "“So many books, so little time.”", author: "― Frank Zappa" },
    { text: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”", author: "― William W. Purkey" },
    { text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "― Bernard M. Baruch" },
    { text: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
    { text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", author: "― Marilyn Monroe" }
];

var i;
function getRandomQuote() {
   var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = quote.text;
    document.getElementById("author").innerHTML = quote.author;

}

