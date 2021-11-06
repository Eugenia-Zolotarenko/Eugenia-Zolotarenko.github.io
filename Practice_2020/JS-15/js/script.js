$(function (){
    'use strict';

    let formElem = document.getElementById('formElem');
    let submitButton = document.getElementById('submit-button');

    formElem.addEventListener('submit', getGitUsersFetch);

    formElem.addEventListener('reset', resetGitUsers);


    async function getGitUsers (event) {
       event.preventDefault();

       let xhr = new XMLHttpRequest();
       xhr.responseType = 'json';
       xhr.open('GET','https://api.github.com/users');
       xhr.send();

        xhr.onload = function() {
            if (xhr.status !== 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка

               console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found

            } else { // если всё прошло гладко, вызываем фукнцию, которая выводит на страницу данные по шаблону

               parseGitUsers (xhr.response) ;

               // блокируем кнопку Отправить
               submitButton.setAttribute('disabled', 'true');
            }
        };

        xhr.onerror = function() {
            alert("Запрос не удался");
        };

    }

    async function getGitUsersFetch (event) {
       event.preventDefault();

       let response = await fetch('https://api.github.com/users');

        if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа

            let gitHubUsers = await response.json();

            parseGitUsers (gitHubUsers) ;

            submitButton.setAttribute('disabled', 'true'); // блокируем кнопку Отправить

        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    }


    function parseGitUsers (users) {

        let $gitUsersHtml = $('#gitUsers').html();

        /*Create DOM for test from template*/
        let gitUsersContent = tmpl($gitUsersHtml,  {data: users});

        $('body').append(gitUsersContent);
    }

    function resetGitUsers (event) {

        document.getElementsByTagName('ul')[0].remove();

        submitButton.removeAttribute('disabled');
    }

    function removeGitUsers () {
        // если не использовать кнопку "Сбросить" удаляем текущий список и подтягиваем новый перед parseGitUsers
        if ( document.getElementsByTagName('ul')[0] !== undefined) {

            document.getElementsByTagName('ul')[0].remove();
       }
    }

});
