// регистрация события загрузки документа.
// if (window.addEventListener) window.addEventListener("load", init, false);
// else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
// function init() {
//     form1.userName.onchange = nameOnChange;
//     form1.email.onchange = emailOnChange;
//     form1.zip.onchange = zipcodeOnChange;
//     form1.onsubmit = onsubmitHandler;
// }
//
// // метод проверки значения в элементе по регулярному выражению.
// function validate(elem, pattern) {
//     var res = pattern.test(elem.value);
//     if (res === false) {
//         elem.className = "invalid";
//     } // установка CSS класса
//     else {
//         elem.className = "valid";
//     }
// }
//
// // обработчики событий изменения текста в окне.
// function nameOnChange() {
//     var pattern = /\S/;
//     validate(this, pattern);
// }
//
// function emailOnChange() {
//     var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
//     validate(this, pattern);
// }
//
// function zipcodeOnChange() {
//     var pattern = /\d{5}/;
//     validate(this, pattern);
// }
//
// // событие при отправке формы на сервер.
// function onsubmitHandler(event) {
//
//     for (var i = 0; i < form1.elements.length; ++i) {
//         if (form1.elements[i].type === "text")
//             form1.elements[i].className = "valid";
//     }
//
//     var invalid = false;
//
//     for (var i = 0; i < form1.elements.length; ++i) {
//         var elem = form1.elements[i];
//         // проверка типа элемента и наличия обработчика события onchange.
//         if (elem.type == "text" && elem.onchange) {
//             elem.onchange(); // запуск события onchange
//             if (elem.className == "invalid") invalid = true;
//         }
//     }
//
//     if (invalid) {
//         alert("Допущены ошибки при заполнении формы.");
//         event.preventDefault();
//         return false; // отмена отправки формы.
//     }
// }


window.addEventListener("load", function () {
    var form = document.getElementsByName('form1')[0];
    var userName = document.getElementsByName('userName')[0];
    var email = document.getElementsByName('email')[0];
    var zip = document.getElementsByName('zip')[0];
    userName.addEventListener('change', textValidate);
    email.addEventListener('change', emailValidate);
    zip.addEventListener('change', zipcodeValidate);
    var globalRes1;
    var globalRes2;
    var globalRes3;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        textValidate();
        emailValidate();
        zipcodeValidate();
        if((globalRes1 && globalRes2 && globalRes3) != 1){
            alert("Допущены ошибки при заполнении формы.");
        } else{
            form.submit();
        }
    });

    function textValidate() {
        var pattern = /\S/;
        var res = pattern.test(userName.value);
        if (res === false){
            userName.className = 'invalid';
            globalRes1 = false;
        } else{
            userName.className = 'valid';
            globalRes1 = true;
        }
    }

    function emailValidate() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        var res = pattern.test(email.value);
        if (res === false){
            email.className = 'invalid';
            globalRes2 = false;
        } else{
            email.className = 'valid';
            globalRes2 = true;
        }
    }

    function zipcodeValidate() {
        var pattern = /\d{5}/;
        var res3 = pattern.test(zip.value);
        if (res3 === false){
            zip.className = 'invalid';
            globalRes3 = false;
        } else{
            zip.className = 'valid';
            globalRes3 = true;
        }
    }
})



