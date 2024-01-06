// calling required elements from html and naming them

let container = document.querySelector('.container');

// creating by using DOM
let form = document.createElement("div");

let h1 = document.createElement("h1");

let inputText = document.createElement("input");

let button = document.createElement("button");

let qrCode = document.createElement("div");

let qrImg = document.createElement("img");

let p = document.createElement("p");


// Adding class for the elements we created
form.classList.add("form");

qrCode.classList.add("qr_code");

qrImg.classList.add("qr_img");


// Appending the elemnts 
container.appendChild(form);

form.appendChild(inputText);

form.appendChild(button);

container.appendChild(qrCode);

qrCode.appendChild(qrImg);


// Creating text in buttin
button.innerText = "Click here"

let preinput


// function for generating qr code when user click
button.onclick = function () {
    
    let input = inputText.value

    // if user didn't enerter anything and tries to generate qr shows alert
    if (input == "") {

        form.appendChild(p)

        p.innerHTML = "Please Enter A Valid Name"
    }

    // if user enter's input generating qr code according to user input
    else {
        preinput = input

        button.innerHTML = "Gnerating Qr ..."

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;

        qrImg.onload = function () {

            container.classList.add("active")

            button.innerHTML = "Gnerate Qr"
            
            form.removeChild(p)
        }
    }


}