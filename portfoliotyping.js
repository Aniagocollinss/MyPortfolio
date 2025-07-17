document.addEventListener("DOMContentLoaded", function () {
    var typedName = new Typed("#typing-name", {
        strings: ["ANIAGO CHIWENDU COLLINS"],
        typeSpeed: 120,
        showCursor: false,
    });

    setTimeout(() => {
        var typedJob = new Typed("#typing-job", {
            strings: ["I am a Mechanical Engineer, Front-End Web Developer and an Artist..."],
            typeSpeed: 50,
            showCursor: false,
        });
    }, 3900); // Delay to ensure the name types first
});
