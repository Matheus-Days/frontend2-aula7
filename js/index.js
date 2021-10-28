const form = document.createElement("form");

const h1 = document.createElement("h1");
h1.innerText = "Login";

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Email");

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Senha");

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Enviar";

const resetBtn = document.createElement("button");
resetBtn.setAttribute("type", "reset");
resetBtn.innerText = "Cancelar";

// Appending

const body = document.querySelector("body");

body.appendChild(form);
form.appendChild(h1);
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(submitBtn);
form.appendChild(resetBtn);

// Altering

emailInput.setAttribute("disabled", "");

form.style.display = "flex";
form.style.flexDirection = "Column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.gap = "24px";

emailInput.removeAttribute("placeholder")

// Extra

form.removeChild(submitBtn);
form.removeChild(resetBtn);

const div = document.createElement("div");

div.appendChild(submitBtn);
div.appendChild(resetBtn);

form.appendChild(div);

div.style.display = "flex";
div.style.gap = "16px";

body.style.fontFamily = "Arial";