const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

var toastLiveExample = document.getElementById('liveToast')

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isUsernameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isConfirmPasswordOk = false;

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length <= 3) {
    setErrorFor(username, "Username must be atleast 4 letters");
  } else {
    setSuccessFor(username);
    isUsernameOk = true;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    isEmailOk = true;
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be above 8 letters");
  } else {
    setSuccessFor(password);
    isPasswordOk = true;
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
    isConfirmPasswordOk = true;
  }
  if (isUsernameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) {
    var toast = new bootstrap.Toast(toastLiveExample)

                toast.show()
                modalContainerDiv.classList.remove("hidden")
                overlayContainerDiv.classList.remove("hidden")
                toastLiveExample.classList.remove('hidden')
            
        setTimeout(closeModal, 4000)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "my-form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "my-form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


// Toast

const openModal = document.querySelectorAll('.show-modal');
        const modalContainerDiv = document.querySelector('.modal');
        const overlayContainerDiv = document.querySelector('.overlay');
        const closeModalBtn = document.querySelector('.close-modal');

        overlayContainerDiv.onclick = () => closeModal()
        closeModalBtn.onclick = () => closeModal()

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.key === 'Esc') {
                closeModal()
            }
        })

        const closeModal = () => {
            modalContainerDiv.classList.add('hidden')
            overlayContainerDiv.classList.add('hidden')
            toastLiveExample.classList.add('hidden')
        }