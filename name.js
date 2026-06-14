function checkGreeting() {
    let name= document.getElementById("nameInput").value;
    let output = document.getElementById("output");

    if (
        greeting === "what is you name" ||
        greeting === "what are you named" ||
        greeting === "tell me your name" ||
        greeting === "name"||
        greeting === "what is your name"
    ) {
        let name = ["Duhhhhhh", "I am not saying my name"];
        let randomIndex = Math.floor(Math.random() * name.length);

        let p = document.createElement("p");
        p.textContent = name[randomIndex];
        output.appendChild(p);

    } else {
        let p = document.createElement("p");
        p.textContent = "I don't know how to respond to that!";
        output.appendChild(p);
    }
}