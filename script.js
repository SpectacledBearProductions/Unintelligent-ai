function checkGreeting() {
    let greeting = document.getElementById("greetingInput").value;

    let output = document.getElementById("output");

    if (
        greeting === "hi" ||
        greeting === "hello" ||
        greeting === "hey" ||
        greeting === "greetings" ||
        greeting === "salutations"
    ) {
        let greetings = ["hi", "Greetings", "Salutations", "fuck you"];

        let randomIndex = Math.floor(Math.random() * greetings.length);

        let p = document.createElement("p");
        p.textContent = greetings[randomIndex];

        output.appendChild(p);

    } else {
        let p = document.createElement("p");
        p.textContent = "I don't know how to respond to that!";
        output.appendChild(p);
    }
}