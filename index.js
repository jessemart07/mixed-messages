const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank',
  },
  {
    quote:
      'You will face many defeats in life, but never let yourself be defeated.',
    author: 'Maya Angelou',
  },
  {
    quote: 'Do not let making a living prevent you from making a life.',
    author: 'John Wooden',
  },
  {
    quote: 'Life itself is the most wonderful fairy tale.',
    author: 'Hans Christian Andersen',
  },
  {
    quote:
      'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Learn as if you will live forever, live like you will die tomorrow.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'When you change your thoughts, remember to also change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    quote:
      'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill',
  },
  {
    quote: 'It is better to fail in originality than to succeed in imitation.',
    author: 'Herman Melville',
  },
];
const emotions = [
  'a little low',
  'a little down',
  'like you want to give up',
  'sad',
  'anxious',
];
const encouragement = [
  'encouragement',
  'a little pick me up',
  'some inspiration',
  'to get a load off',
];
const getRandomMessage = () => {
  const quoteIndex = Math.floor(Math.random() * (quotes.length - 1));
  const emotionsIndex = Math.floor(Math.random() * (emotions.length - 1));
  const encouragementIndex = Math.floor(
    Math.random() * (encouragement.length - 1)
  );

  const randomMessage = `If you're feeling ${emotions[emotionsIndex]} and you need a little ${encouragement[encouragementIndex]} read this: `;
  const randomQuote = quotes[quoteIndex];

  document.getElementById('message').innerHTML = randomMessage;
  document.getElementById('quote').innerHTML = '"' + randomQuote.quote + '"';
  document.getElementById('author').innerHTML = '—' + randomQuote.author;
};

getRandomMessage();
