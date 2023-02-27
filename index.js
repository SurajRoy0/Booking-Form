let form = document.querySelector("form").addEventListener("submit", myfun);
function myfun(e) {
  e.preventDefault();
  let inputName = document.querySelector("#name").value;
  let inputEmail = document.querySelector("#email").value;
  let inputNumber = document.querySelector("#phone").value;
  let inputDate = document.getElementById("date").value;
  let inputTime = document.getElementById("time").value;

  if (
    inputName === "" ||
    inputEmail === "" ||
    inputNumber === "" ||
    inputDate === "" ||
    inputTime === ""
  ) {
    alert("Please Fill All credentials");
  } else {
    var user = {
      name: inputName,
      email: inputEmail,
      number: inputNumber,
      date: inputDate,
      time : inputTime
    }

    localStorage.setItem(inputName,JSON.stringify(user));

    alert("Registration Done Please Check Console");
  }
}