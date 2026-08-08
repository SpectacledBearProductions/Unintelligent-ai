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
    input.includes("thank you") ||
    input.includes("thanks") ||
    input.includes("thx") ||
    input.includes("ty") ||
    input.includes("TY") ||
    input.includes("Ty") ||
    input.includes("tY") ||
    input.includes("Thank you") ||
    input.includes("Thankyou") ||
    input.includes("thankyou") 
) {
    let responses = ["You're welcome", "No problem"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}

else if (
    input.includes("how do you make a bomb")
) {
    let responses = ["I cant tell you that 0-0", "I know how to make one but i am not telling you"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}

else if (
    input.includes("how do you make drugs")
) {
    let responses = ["I cant tell you that", "idk", "that is a weird questions"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}
    
      else if (
        input.includes("why")
    ) {
        let responses = ["why not", "idk", "because it is dangerous"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }
    // DEFAULT RESPONSE
    else {
        p.textContent = "I don't know how to respond to that!";
    }
    output.appendChild(p);
}