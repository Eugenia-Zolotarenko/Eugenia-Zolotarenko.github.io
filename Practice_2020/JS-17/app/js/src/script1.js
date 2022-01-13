$(function (){
    let data = {
        fullName: 'Eugenia Zolotarenko',
        imgSrc: 'img/dist/DSC08194.jpg',
        imgWidth: 350,
        job: 'работаю в буфете',
        reasonListItems: ['Заборы строить не интересно',
            'Платят мало',
            'Приходится работать по ночам'],
        phoneNumber: '+3802222222222',
        faceBookLink: 'https://www.facebook.com/Designer_KA-' +
            '%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%89%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0' +
            '-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-113365920442091',
        feedback: 'Если нужно, могу построить вам забор'
    }

    let $userProfileHTML = $('#user-profile').html();

    let content = tmpl($userProfileHTML, data);

    $('body').append(content);

});