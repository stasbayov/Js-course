var chooseFirstBtn = document.getElementById('choose-first');
var chooseLastBtn = document.getElementById('choose-last');
var chooseNextBtn = document.getElementById('choose-next');
var choosePrevBtn = document.getElementById('choose-prev');
var addBtn = document.getElementById('add');
var delBtn = document.getElementById('del');
var addStartBtn = document.getElementById('add-start');
var list = document.querySelector('.list');
var listItem = document.getElementsByTagName('li');
var curId = -1;
var curEl = 0;
function cleanClasses(){
    for(var i= 0; i < listItem.length; i++){
        listItem[i].classList.remove('active');
    }
}

chooseFirstBtn.onclick = function () {
    cleanClasses();
    curId = 0;
    listItem[curId].classList.add('active');
}

chooseLastBtn.onclick = function () {
    cleanClasses();
    curId = listItem.length - 1;
    listItem[curId].classList.add('active');
}

chooseNextBtn.onclick = function () {
    cleanClasses();
    if(curId < listItem.length - 1){
        curId++;
        listItem[curId].classList.add('active');
    }
    else{
        curId = 0;
        listItem[curId].classList.add('active');
    }
}

choosePrevBtn.onclick = function () {
    cleanClasses();
    if(curId > 0){
        curId--;
        listItem[curId].classList.add('active');
    }
    else{
        curId = listItem.length - 1;
        listItem[curId].classList.add('active');
    }
}

addBtn.onclick = function () {
    var li = document.createElement('li');
    li.innerText = 'Item ' + (listItem.length + 1);
    list.appendChild(li);
}

delBtn.onclick = function () {
    if(listItem.length >0){
        listItem[listItem.length - 1].remove();
    }
}

addStartBtn.onclick = function () {
    var li = document.createElement('li');
    li.innerText = 'Item ' + (listItem.length + 1);
    list.prepend(li);
}