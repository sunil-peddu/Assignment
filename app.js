const nameArea= document.getElementById("name");
const StudentId= document.getElementById("SId");
const studentEmail= document.getElementById("email");
const mobileNo= document.getElementById("contactno");
const button= document.getElementById("button");
button.addEventListener("click", adddetails);  
const list=document.querySelector(".registration");     

button.addEventListener("click", (event) => {
    event.preventDefault(); 
});

function adddetails(){
    const createDiv=document.createElement("div");
    createDiv.classList.add("cDiv");
    const items=document.createElement("p");
    items.classList.add("iDiv");
    if(nameArea.value=='')return;
    items.innerHTML=`
    Name: ${nameArea.value},
    Student ID: ${StudentId.value}, 
    Email: ${studentEmail.value},
    Mobile No: ${mobileNo.value}
    `;
    // items.innerHTML=`${nameArea.value},  ${StudentId.value},  ${studentEmail.value},  ${mobileNo.value}`;
    createDiv.appendChild(items);
    list.appendChild(createDiv);
    const deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("bDiv");
    items.appendChild(deleteButton)
    nameArea.value='';
    StudentId.value='';
    studentEmail.value='';
    mobileNo.value='';

    deleteButton.addEventListener("click",()=>{
        createDiv.remove();

    });
}