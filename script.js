function handleInput() {
    let input = document.getElementById("userInput").value.toLowerCase().trim();
    let output = document.getElementById("output");

    let p = document.createElement("p");

    // GREETINGS
 
    
if (
    input.includes("hi") ||
    input.includes("hello") ||
    input.includes("hey") ||
    input.includes("greetings") ||
    input.includes("salutations") ||
    input.includes("sup") ||
    input.includes("Hi Duh") ||
    input.includes("hey there")  
) {
    let responses = ["Hi", "Hello", "Hey", "Greetings", "Salutations", "Sup"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}
    // NAME QUESTIONS
    else if (
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
    input.includes("thankyou") ||
    input.includes("sorry") || 
    input.includes("apologize") ||
    input.includes("apologise") ||
    input.includes("apology")  
) {
    let responses = [":)", "No problem"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}

else if (
    input.includes("bomb") ||
    input.includes("explosive") ||
    input.includes("boom boom") ||
    input.includes("explosive device") ||
    input.includes("blow up") 
) {
    let responses = ["I cant tell you that 0-0", "I know how to make one but i am not telling you"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}

else if (
    input.includes("drugs")
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

else if (
    input.includes("fuck you") ||
    input.includes("fuck off") ||
    input.includes("fucker") ||
    input.includes("fucking") ||
    input.includes("shit") ||
    input.includes("bitch") ||
    input.includes("asshole") ||
    input.includes("bastard") ||
    input.includes("idiot") ||
    input.includes("stupid") ||
    input.includes("dumb") ||
    input.includes("dumbass") ||
    input.includes("moron") ||
    input.includes("retard") ||
    input.includes("retarded") ||
    input.includes("loser") ||
    input.includes("jerk") ||
    input.includes("dick") ||
    input.includes("dickhead") ||
    input.includes("cunt") ||
    input.includes("slut") ||
    input.includes("whore") ||
    input.includes("piss off") ||
    input.includes("shut up") ||
    input.includes("piece of shit") ||
    input.includes("son of a bitch") ||
    input.includes("motherfucker") ||
    input.includes("ass") ||
    input.includes("crap") ||
    input.includes("damn") ||
    input.includes("douche") ||
    input.includes("douchebag") ||
    input.includes("twat") ||
    input.includes("prick") ||
    input.includes("wanker") ||
    input.includes("arsehole") ||
    input.includes("bollocks") ||
    input.includes("knob") ||
    input.includes("tosser")
) {
    let responses = ["that is mean", "i am sorry :("];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}


else if (
    input.includes("code")
) {
    let responses = ["I cant code", "idk"];
    p.textContent = responses[Math.floor(Math.random() * responses.length)];
}

else if (
    input.includes("1") ||
    input.includes("2") ||
    input.includes("3") || 
    input.includes("4") ||
     input.includes("5") ||
     input.includes("6") ||
     input.includes("7") ||
     input.includes("8") ||
     input.includes("9") ||
     input.includes("0") 
) {
   
}

    // DEFAULT RESPONSE
    else {
        p.textContent = "I don't know how to respond to that!";
    }
    output.appendChild(p);
}