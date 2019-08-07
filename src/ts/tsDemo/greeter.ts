const greeter = (person:string)=> {
    return "Hello, " + person;
}

let user = "Usman";

document.body.textContent = greeter(user);