function toggleNav() {
    var x = document.getElementById("nav_main");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function getThought() {
    const wisdom = [
        "Bubbles are rain in negative.",
        "Music is just flavored air.",
        "Web developers for porn sites don't have to worry about NSFW content on their PC screen when at work.",
        "An introvert’s internet probably goes out more than they do",
        "Reload this page to get new quote :)",
        "ｗｅｌｃｏｍｅ　ｔｏ　ｔｈｅ　ｆｕｔｕｒｅ　ミ佳イナ",
        "Look ma, I can make a website",
        "Eh.",
        "You are a wonderful human being."
    ]
    var randomQuote = wisdom[Math.floor(Math.random() * wisdom.length)];
    document.getElementById("aNotFunnyThing").innerText = randomQuote;
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        } catch (e) {
            console.warn("uwu we made a fucky wacky. sowwy about that.\n", e);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function gtag() {
    dataLayer.push(arguments);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

console.log(`%c  ______________________________________________________________
< Look at this dude. Just look at him. This is not funny at all! >
  --------------------------------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace");
console.log("Narrator: Or is it?")
window.dataLayer = window.dataLayer || [];
gtag('js', new Date());
gtag('config', 'UA-133294265-2');
getThought();