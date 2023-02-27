let form = document.querySelector("form").addEventListener("submit", myfun);
function myfun(e) {
  e.preventDefault();
  let inputName = document.querySelector("#name").value;
  let inputEmail = document.querySelector("#email").value;
  let inputNumber = document.querySelector("#phone").value;
  let inputDate = document.getElementById("date").value;
  let inputTime = document.getElementById("time").value;
  let tableBody = document.querySelector('#tableBody');

  if (
    inputName === "" ||
    inputEmail === "" ||
    inputNumber === "" ||
    inputDate === "" ||
    inputTime === ""
  ) {
    alert("Please Fill All credentials");
  } else {
    let user = {
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
    nameTd.className="Name"

    let emailTd = document.createElement('td');
    emailTd.className="Email"

    let phoneTd = document.createElement('td');
    phoneTd.className="Phone"

    let dateTd = document.createElement('td');
    dateTd.className="Date"

    let timeTd = document.createElement('td');
    timeTd.className="Time"

    let btnTd = document.createElement('td');



    //Appending Text
    let nameText = document.createTextNode(inputName);
    nameTd.appendChild(nameText);

    let emailText = document.createTextNode(inputEmail);
    emailTd.appendChild(emailText);

    let phoneText = document.createTextNode(inputNumber);
    phoneTd.appendChild(phoneText);

    let dateText = document.createTextNode(inputDate);
    dateTd.appendChild(dateText);

    let timeText = document.createTextNode(inputTime);
    timeTd.appendChild(timeText);

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success edit';
    let editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.style.marginRight='12px';
    btnTd.appendChild(editBtn);

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-warning delete';
    let delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    btnTd.appendChild(delBtn);


    //Appending Td into Tr
    newTr.appendChild(nameTd);
    newTr.appendChild(emailTd);
    newTr.appendChild(phoneTd);
    newTr.appendChild(dateTd);
    newTr.appendChild(timeTd);
    newTr.appendChild(btnTd);
  

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
  else if(e.target.classList.contains('edit')){
    if(confirm('Are You Want To Edit This Booking?')){

      let inputName = document.querySelector(".Name").textContent;
      let inputEmail = document.querySelector(".Email").textContent;
      let inputNumber = document.querySelector(".Phone").textContent;
      let inputDate = document.querySelector(".Date").textContent;
      let inputTime = document.querySelector(".Time").textContent;

      document.querySelector("#name").value= inputName;
      document.querySelector("#email").value= inputEmail;
      document.querySelector("#phone").value= inputNumber;
      document.getElementById("date").value= inputDate;
      document.getElementById("time").value= inputTime;

      let deleteItem = e.target.parentElement.parentElement;
      tableBody.removeChild(deleteItem);

      let delKey = e.target.parentElement.parentElement.firstElementChild.textContent;
      localStorage.removeItem(delKey);
  }
  }
}



