const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  { quote: "What we think, we become.", author: "Buddha" },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },

  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  { quote: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou" },

  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estée Lauder",
  },
  { quote: "Limit your ‘always’ and your ‘nevers’.", author: "Amy Poehler" },
  { quote: "Nothing will work unless you do.", author: "Maya Angelou" },

  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    quote: "Success doesn’t just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    quote:
      "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown",
  },
  {
    quote: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Unknown",
  },
  {
    quote: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Unknown",
  },
  { quote: "Little things make big days.", author: "Unknown" },
  {
    quote: "It’s going to be hard, but hard does not mean impossible.",
    author: "Unknown",
  },

  { quote: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  {
    quote:
      "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown",
  },
  {
    quote: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown",
  },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  {
    quote: "Don’t limit your challenges. Challenge your limits.",
    author: "Unknown",
  },
  {
    quote: "Work hard in silence. Let success make the noise.",
    author: "Frank Ocean",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Difficult roads often lead to beautiful destinations.",
    author: "Unknown",
  },
  {
    quote: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  { quote: "Small steps every day.", author: "Unknown" },

  { quote: "Your only limit is your mind.", author: "Unknown" },
  {
    quote: "Success is what comes after you stop making excuses.",
    author: "Luis Galarza",
  },
  { quote: "Make each day your masterpiece.", author: "John Wooden" },
  { quote: "Wherever you go, go with all your heart.", author: "Confucius" },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  { quote: "You are enough just as you are.", author: "Meghan Markle" },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },

  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  { quote: "I can and I will. Watch me.", author: "Unknown" },
  { quote: "The best way out is always through.", author: "Robert Frost" },
  {
    quote: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    quote: "What we achieve inwardly will change outer reality.",
    author: "Plutarch",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    author: "Eleanor Roosevelt",
  },

  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "Failure is the opportunity to begin again more intelligently.",
    author: "Henry Ford",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  { quote: "You become what you believe.", author: "Oprah Winfrey" },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Go confidently in the direction of your dreams.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },

  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "Do what you love and the money will follow.",
    author: "Marsha Sinetar",
  },
  {
    quote:
      "If you’re not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
];

const btnGenerateQuote = document.querySelector(".generate");
const quoteField = document.querySelector(".quote");
const authorField = document.querySelector(".author");
const quoteIcon = document.querySelector(".quote-icon");

let ranIndex = Math.floor(Math.random() * quotes.length);
let currentQuote = quotes[ranIndex];
btnGenerateQuote.addEventListener("click", function () {
  quoteField.classList.add("flash-animation");
  authorField.classList.add("flash-animation");
  quoteIcon.classList.add("flash-animation");
  setTimeout(function () {
    quoteField.classList.remove("flash-animation");
    authorField.classList.remove("flash-animation");
    quoteIcon.classList.remove("flash-animation");

    quotes.splice(ranIndex, 1);
    ranIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[ranIndex];

    quoteField.textContent = `"${currentQuote.quote}"`;
    authorField.textContent = `— ${currentQuote.author}`;
  }, 600);
});
