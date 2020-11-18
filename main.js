let addToDo = document.getElementById("addToDo");
let toDosContainer = document.getElementById('toDosContainer');
let inputField = document.getElementById('inputField');

addToDo.addEventListener('click',function () {
  var paragraph=document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText=inputField.value;
  toDosContainer.appendChild(paragraph);
  inputField.value="";

  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration="line-through";
    paragraph.style.backgroundColor="#F2B1A2";
  })

  paragraph.addEventListener('dblclick',function(){
    toDosContainer.removeChild(paragraph);
  })
})
