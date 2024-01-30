let formButton = document.getElementsByClassName("form-button")[0];
let form = document.getElementsByClassName("form")[0];
let contactsField = document.getElementsByClassName("contacts-field")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.style.display = "none";

  let formSuccess = document.createElement("div");
  formSuccess.className = "form-success";
  contactsField.append(formSuccess);

  let formSuccessMsg = document.createElement("p");
  formSuccessMsg.className = "form-success__msg";
  formSuccessMsg.innerHTML = "Thank you!<br />Your message has been sent!";
  formSuccess.append(formSuccessMsg);

  let newMsgBtn = document.createElement("button");
  newMsgBtn.className = "button form-button";
  newMsgBtn.textContent = "new message";
  formSuccess.append(newMsgBtn);

  function newMessage() {
    formSuccess.style.display = "none";
    form.style.display = "block";
    form.reset();
  }

  newMsgBtn.addEventListener("click", newMessage);
});
