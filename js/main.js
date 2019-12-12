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
        "[ insert quote here ]",
        "ｗｅｌｃｏｍｅ　ｔｏ　ｔｈｅ　ｆｕｔｕｒｅ　ミ佳イナ",
        "Look ma, I can make a website",
        "Best viewed on desktop!!1",
        "Quack PWAs!",
        "Eh.",
        "You are a wonderful human being."
    ]
    var randomQuote = wisdom[Math.floor(Math.random() * wisdom.length)];
    document.getElementById("aNotFunnyThing").innerText = randomQuote;
}

function rndProject() {
    const projArray = [
        "https://github.com/ttomovcik/gakko",
        "https://github.com/ttomovcik/onefeed",
        "https://github.com/ttomovcik/quickly",
        "https://github.com/ttomovcik/rd-fluent-theme",
        "https://github.com/ttomovcik/space-invaders",
        "https://github.com/ttomovcik/pedometer-android",
        "https://forum.xda-developers.com/android/software/aosp-n-doogee-x30-t3794931",
        "https://www.needrom.com/download/twrp-3-1-1-0-9/",
        "https://forum.xda-developers.com/android/general/root-coolad-modena-2-sky-2-e502-t3739599",
        "https://github.com/ttomovcik/Steam-Slovak-Translation"
    ]
    window.location.href = projArray[Math.floor(Math.random() * projArray.length)];
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

function noFileFoundAlert() {
    // ! I know, I know..
    alert("Unable to locate file. Try reloading page or visiting later. Sorry about that.")
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