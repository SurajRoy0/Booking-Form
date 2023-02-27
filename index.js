let form = document.querySelector("form").addEventListener("submit", myfun);
function myfun(e) {
  e.preventDefault();
  let inputName = document.querySelector("#name").value;
  let inputEmail = document.querySelector("#email").value;
  let inputNumber = document.querySelector("#phone").value;
  let inputDate = document.getElementById("date").value;
  let inputTime = document.getElementById("time").value;
  var tableBody = document.querySelector('#tableBody');

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

    //Adding Booking Informations as a list
    //Creating New Tr
    let newTr = document.createElement('tr');

    //Creating New Td
    let nameTd = document.createElement('td');


    let emailTd = document.createElement('td');

    let phoneTd = document.createElement('td');

    let dateTd = document.createElement('td');

    let timeTd = document.createElement('td');

    let delTd = document.createElement('td');

    //Appending Text
    var nameText = document.createTextNode(inputName);
    nameTd.appendChild(nameText);

    var emailText = document.createTextNode(inputEmail);
    emailTd.appendChild(emailText);

    var phoneText = document.createTextNode(inputNumber);
    phoneTd.appendChild(phoneText);

    var dateText = document.createTextNode(inputDate);
    dateTd.appendChild(dateText);

    var timeText = document.createTextNode(inputTime);
    timeTd.appendChild(timeText);

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-warning delete';
    let delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    delTd.appendChild(delBtn);

    //Appending Td into Tr
    newTr.appendChild(nameTd);
    newTr.appendChild(emailTd);
    newTr.appendChild(phoneTd);
    newTr.appendChild(dateTd);
    newTr.appendChild(timeTd);
    newTr.appendChild(delTd)

    //Appending Tr into Tbody
    tableBody.appendChild(newTr);
    alert("Registration Done Please Check Console");
  }

}

let bookTable = document.querySelector('#book-table')
let tableBody = document.querySelector('#tableBody');
bookTable.addEventListener('click',removeItem);

//Removing Items
function removeItem(e){
  if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
          let deleteItem = e.target.parentElement.parentElement;
          tableBody.removeChild(deleteItem);
          let delKey = e.target.parentElement.parentElement.firstElementChild.textContent;
          localStorage.removeItem(delKey);
      }
  }
}



