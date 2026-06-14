function handleInput() {
    let input = document.getElementById("userInput").value.toLowerCase().trim();
    let output = document.getElementById("output");

    let p = document.createElement("p");

    // GREETINGS
    if (["hi", "hello", "hey", "greetings", "salutations"].includes(input)) {
        let responses = ["hi", "Greetings", "Salutations"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    // NAME QUESTIONS
    else if (
        input.includes("your name") ||
        input.includes("what is your name") ||
        input.includes("name")
    ) {
        let responses = ["Duhhhhhh", "I am not saying my name"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

      else if (
        input.includes("why")
    ) {
        let responses = ["why not i dont want to say my name", "idk"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }
    // DEFAULT RESPONSE
    else {
        p.textContent = "I don't know how to respond to that!";
    }
    output.appendChild(p);
}