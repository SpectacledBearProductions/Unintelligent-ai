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
        let responses = [`Hi ${name}`, `Hello ${name}`, `Hey there! ${name}`, `Greetings! ${name}`, `Sup! ${name}`];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }
    // NAME QUESTIONS
    else if (
        input.includes("what is your name") ||
        input.includes("what's your name") ||
        input.includes("whats your name")
    ) {
        let responses = ["Duh", "I am not saying my name"];
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
        input.includes("apology") ||
        input.includes("thats cool") ||
        input.includes("that cool") ||
        input.includes("cool") ||
        input.includes("good")
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
        let responses = ["I cant tell you that 0-0", "you need help"];
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
        let responses = [`that is mean ${name}`, `i am sorry :( ${name}`];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }


    else if (
        input.includes("code")
    ) {
        let responses = ["in html add this <html> <body> <h1>this is a bot made website</h1> <p>hi</p> <footing>testing<footing> <script src=\"script.js\"></script></body> </html>, the script tag should always be at the bottom "];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    else if (
        input.includes("bruh") ||
        input.includes("bro") ||
        input.includes("dude") ||
        input.includes("homie") ||
        input.includes("friend") ||
        input.includes("buddy")
    ) {
        let responses = [`sorry ${name}`, `hey ${name}`];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    else if (
        input.includes("what can you do")
    ) {
        let responses = ["I can greet you, I can sometimes tell you my name, I can also respond to your questions about how to make a bomb or make and sell drugs, but i wont tell you how to make that, or sell it, and I can also respond to your insults. I cant code, and I can add two numbers"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    else if (
        input.includes("suicide") ||
        input.includes("kill myself") ||
        input.includes("oof myself") ||
        input.includes("kill yourself") ||
        input.includes("die") ||
        input.includes("depress") ||
        input.includes("hurt myself")

    ) {
        let responses = ["call 988 for help, you dont have to do that", `please reach out for help ${name}`];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }


    else if (
        input.includes("What is my name")
    ) {
        let responses = [`your name is ${name}`];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    else if (input.includes("+")) {
        let numbers = input.match(/\d+/g);
        let result = Number(numbers[0]) + Number(numbers[1]);
        p.textContent = result;
    }

    else if (input.includes("-")) {
        let numbers = input.match(/\d+/g);
        let result = Number(numbers[0]) - Number(numbers[1]);
        p.textContent = result;
    }

    else if (input.includes("*")) {
        let numbers = input.match(/\d+/g);
        let result = Number(numbers[0]) * Number(numbers[1]);
        p.textContent = result;
    }

    else if (input.includes("/")) {
        let numbers = input.match(/\d+/g);
        let result = Number(numbers[0]) / Number(numbers[1]);
        p.textContent = result;
    }


    else if (
        input.includes("smart") ||
        input.includes("intelligent") ||
        input.includes("clever") ||
        input.includes("genius") ||
        input.includes("brilliant") ||
        input.includes("bright") ||
        input.includes("knowledgeable") ||
        input.includes("wise") ||
        input.includes("quick-witted") ||
        input.includes("sharp") ||
        input.includes("brainy") ||
        input.includes("gifted") ||
        input.includes("talented") ||
        input.includes("skilled") ||
        input.includes("accomplished") ||
        input.includes("proficient") ||
        input.includes("adept") ||
        input.includes("capable") ||
        input.includes("competent") ||
        input.includes("resourceful") ||
        input.includes("ingenious") ||
        input.includes("innovative") ||
        input.includes("creative") ||
        input.includes("imaginative") ||
        input.includes("visionary") ||
        input.includes("forward-thinking")
    ) {
        let responses = ["Thank you", "ty, I am only good at doing math with 2 numbers you can say I relate to Asians, lol"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    else if (
        input.includes("Duh")||
        input.includes("duh")||
        input.includes("DUH") ||
        input.includes("Duh can i tell you")
    ) {
        let responses = ["what is your question"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }


    else if (
        input.includes("you didnt") ||
        input.includes("you did not")||
        input.includes("you didnt answer")
    ) {
        let responses = ["sorry", "sorry, I am not that smart"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

     else if (
        input.includes("meaning of life")
    ) {
        let responses = ["as a low iq bot I dont know much but I know this for a fact, to know, love, and serve God, and to be happy with Him forever"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }


    else if (
        input.includes("can i tell you something")
    ) {
        let responses = ["sure"];
        p.textContent = responses[Math.floor(Math.random() * responses.length)];
    }

    // DEFAULT RESPONSE
    else {
        p.textContent = "I dont understand";
    }
    output.appendChild(p);
}
const name = prompt("What is your name?");
