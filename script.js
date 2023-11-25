const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addBtn = document.querySelector('.addButton');
const deleteBtn = document.querySelectorAll('span');
const li = document.querySelectorAll('li');

let globalArray = [];
li.forEach((item) => globalArray.push(item));

function createRecord() {
  const element = document.createElement('li');
  const value = input.value;
  if (value) {
    element.innerHTML = `
    <a>${value}</a><span class="delete">x</span>
    `;
    ul.append(element);
    input.value = '';
    globalArray.push(element);
    updateArray();
  }
}
addBtn.addEventListener('click', createRecord);
window.addEventListener('keydown', function (e) {
  if (e.code == 'Enter') {
    createRecord();
  }
});

ul.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
  if (e.target.nodeName == 'LI') {
    console.dir(e.target);
    e.target.firstElementChild.classList.toggle('textdecor');
  }

  for (let i = 0; i < globalArray.length; i++) {
    if (e.target.parentElement == globalArray[i]) {
      globalArray.splice(i, 1);
    }
  }
  updateArray();
});

ul.addEventListener('mouseover', function (e) {
  if (e.target.nodeName == 'LI') {
    e.target.style.background = 'gray';
  }
});

ul.addEventListener('mouseout', function (e) {
  if (e.target.nodeName == 'LI') {
    updateArray();
  }
});

function updateArray() {
  for (let i = 1; i < globalArray.length + 1; i++) {
    if (i % 2 == 0) {
      globalArray[i - 1].style.background = 'white';
    } else {
      globalArray[i - 1].style.background = '#E5E7E9';
    }
  }
}

updateArray();
