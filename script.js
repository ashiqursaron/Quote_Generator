const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

// Backup quotes array
const backupQuotes = [
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { content: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
];

async function getquote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        // Use a random backup quote if API fails
        const random = backupQuotes[Math.floor(Math.random() * backupQuotes.length)];
        quote.innerHTML = random.content;
        author.innerHTML = random.author;
    }
}

getquote(api_url);

function tweet(){
    window.open(
        "https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML,
        "Tweet Window",
        "width=600, height=300"
    );
}