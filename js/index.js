const quotes = [
    'I make things do beep boop.',
    'Have a nice day!',
    "Don't forget to drink water",
    'You want another quote? Just refresh this page.',
    '[INSERT FAMOUS QUOTE HERE]',
    'Pretty cool, eh?',
    'Do not commit suicide. You could die! 😢',
    'Music is just flavored air.',
    '▶ Now playing: Flatline by No Mana',
    'https://www.youtube.com/watch?v=yfly9i-dvxU'
]
const displayQuote = document.getElementById('qotd');
let targetQuote = quotes[Math.floor(Math.random() * quotes.length)];

window.onscroll = function () {
    scrollFunction()
};
window.onload = function () {
    toggleQuote();
    Mousetrap.bind('s u c c', function () {
        let win = window.open('https://www.youtube.com/watch?v=qFchpvKpYm0', '_blank');
        win.focus();
    });
}

function scrollFunction() {
    if (document.body.scrollTop > 16 ||
        document.documentElement.scrollTop > 16) {
        $("#btn_scrollToTop").fadeIn(300);
    } else {
        $("#btn_scrollToTop").fadeOut(300);
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleQuote() {
    displayQuote.innerHTML = '<strong>' + targetQuote + '</strong>';
}