const form = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-header");
const alert = document.querySelectorAll(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const query = document.querySelector('input[name="query"]:checked');
    const message = document.querySelector("#message").value.trim();
    const consent = document.querySelector("#consent").checked;

    let isValid = true;

    //validating of inputs
    if(firstName === '') {
        isValid = false;

        document.querySelector(".first-name .alert").style.display = 'block';
        document.querySelector("#first-name").style.border = '1px solid var(--red)';
    } else {
        document.querySelector(".first-name .alert").style.display = 'none';
        document.querySelector("#first-name").style.border = '1px solid var(--medium-grey)';
    }
    //last name
    if(lastName === '') {
        isValid = false;

        document.querySelector(".last-name .alert").style.display = 'block';
        document.querySelector("#last-name").style.border = '1px solid var(--red)';
    } else {
        document.querySelector(".last-name .alert").style.display = 'none';
        document.querySelector("#last-name").style.border = '1px solid var(--medium-grey)';
    }
    //email
    if(!isValidEmail(email)) {
        isValid = false;

        document.querySelector(".email .alert").style.display = 'block';
        document.querySelector("#email").style.border = '1px solid var(--red)';
    } else {
        document.querySelector(".email .alert").style.display = 'none';
        document.querySelector("#email").style.border = '1px solid var(--medium-grey)';
    }
    //query
    if(!query) {
        isValid = false;

        document.querySelector(".query .alert").style.display = 'block';
    } else {
        document.querySelector(".query .alert").style.display = 'none';
    }
    //message
    if(message === '') {
        isValid = false;

        document.querySelector(".message .alert").style.display = 'block';
        document.querySelector("#message").style.border = '1px solid var(--red)';
    } else {
        document.querySelector(".message .alert").style.display = 'none';
        document.querySelector("#message").style.border = '1px solid var(--medium-grey)';
    }
    //consent
    if(!consent) {
        isValid = false;

        alert[5].classList.add("error");
    } else {
        alert[5].classList.remove("error");
    }

    if(isValid) {
        successMessage.classList.add('active')
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 3000);
        form.reset();
    }
})

//email is valid
function isValidEmail(email) {
    const emailCont = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCont.test(email)
}