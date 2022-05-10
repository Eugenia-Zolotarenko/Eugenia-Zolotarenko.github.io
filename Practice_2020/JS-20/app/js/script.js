$(document).ready(function() {

    let dataJson = '[\n' +
        '        {\n' +
        '            "guid": "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",\n' +
        '            "index": 0,\n' +
        '            "favoriteFruit": "banana",\n' +
        '            "latitude": 58.161524999999997,\n' +
        '            "company": "INDEXIA",\n' +
        '            "email": "moorehensley@indexia.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2015-07-03T08:30:59 -03:00",\n' +
        '            "eyeColor": "blue",\n' +
        '            "phone": "+1 (848) 556-2344",\n' +
        '            "address": "268 Debevoise Street, Fidelis, North Carolina, 3606",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Sharron Pace"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": false,\n' +
        '            "about": "Velit laborum aliquip voluptate incididunt dolore qui proident velit adipisicing. Pariatur sint fugiat aute eiusmod aute aliquip dolor culpa enim quis. Ea elit ad duis cillum et aliquip. Elit aliquip enim ut quis tempor. Veniam irure minim esse proident culpa Lorem duis veniam dolor anim quis laboris id laboris. Enim minim eiusmod labore do consectetur voluptate pariatur cillum fugiat dolore magna incididunt. Qui eiusmod Lorem qui irure consequat.\\r\\n",\n' +
        '            "balance": "$2,811.93",\n' +
        '            "name": "Moore Hensley",\n' +
        '            "skills": [\n' +
        '                "ea",\n' +
        '                "ipsum",\n' +
        '                "Lorem"\n' +
        '            ],\n' +
        '            "gender": "male",\n' +
        '            "age": 37,\n' +
        '            "greeting": "Hello, Moore Hensley! You have 5 unread messages.",\n' +
        '            "longitude": -10.931599,\n' +
        '            "_id": "56bdc339702f16daa316d2eb"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "7a3cbd18-57a1-4534-8e12-1caad921bda1",\n' +
        '            "index": 1,\n' +
        '            "favoriteFruit": "banana",\n' +
        '            "latitude": 14.810798999999999,\n' +
        '            "company": "TUBESYS",\n' +
        '            "email": "sharlenebush@tubesys.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2014-03-22T11:03:44 -02:00",\n' +
        '            "eyeColor": "blue",\n' +
        '            "phone": "+1 (855) 582-2464",\n' +
        '            "address": "848 Hicks Street, Chestnut, Palau, 5667",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Briana Decker"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Sharron Pace"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": true,\n' +
        '            "about": "Consectetur velit officia eiusmod esse labore sint anim nostrud elit nulla dolore dolor. In aute ad incididunt pariatur cupidatat do deserunt irure. Exercitation cillum enim incididunt amet Lorem ut Lorem nulla.\\r\\n",\n' +
        '            "balance": "$3,821.77",\n' +
        '            "name": "Sharlene Bush",\n' +
        '            "skills": [\n' +
        '                "tempor",\n' +
        '                "mollit",\n' +
        '                "velit",\n' +
        '                "commodo",\n' +
        '                "veniam",\n' +
        '                "cupidatat",\n' +
        '                "laborum"\n' +
        '            ],\n' +
        '            "gender": "female",\n' +
        '            "age": 34,\n' +
        '            "greeting": "Hello, Sharlene Bush! You have 2 unread messages.",\n' +
        '            "longitude": 65.625151000000002,\n' +
        '            "_id": "56bdc33986e3357811d1a81e"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",\n' +
        '            "index": 2,\n' +
        '            "favoriteFruit": "apple",\n' +
        '            "latitude": 73.588680999999994,\n' +
        '            "company": "XINWARE",\n' +
        '            "email": "rossvazquez@xinware.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2014-06-14T03:11:08 -03:00",\n' +
        '            "eyeColor": "green",\n' +
        '            "phone": "+1 (814) 593-3825",\n' +
        '            "address": "680 Pooles Lane, Sattley, Maine, 3025",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Marilyn Mcintosh"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Padilla Garrison"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 2,\n' +
        '                    "name": "Naomi Buckner"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": false,\n' +
        '            "about": "Ut dolor nostrud enim ullamco sit reprehenderit nisi commodo eiusmod amet esse ea. Lorem amet duis in culpa do laboris deserunt esse culpa irure est. Lorem tempor officia amet amet magna ea pariatur. Occaecat qui minim commodo quis excepteur eiusmod in minim deserunt occaecat dolor. Ipsum dolore elit pariatur exercitation anim.\\r\\n",\n' +
        '            "balance": "$3,793.59",\n' +
        '            "name": "Ross Vazquez",\n' +
        '            "skills": [\n' +
        '                "nulla",\n' +
        '                "anim",\n' +
        '                "proident",\n' +
        '                "ipsum",\n' +
        '                "ad",\n' +
        '                "consectetur",\n' +
        '                "elit"\n' +
        '            ],\n' +
        '            "gender": "male",\n' +
        '            "age": 24,\n' +
        '            "greeting": "Hello, Ross Vazquez! You have 9 unread messages.",\n' +
        '            "longitude": 139.45094800000001,\n' +
        '            "_id": "56bdc3397558ab111683cfd6"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "249b6175-5c30-44c6-b154-f120923736f5",\n' +
        '            "index": 3,\n' +
        '            "favoriteFruit": "banana",\n' +
        '            "latitude": -76.562336000000002,\n' +
        '            "company": "OMATOM",\n' +
        '            "email": "elmahead@omatom.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2014-01-15T06:51:52 -02:00",\n' +
        '            "eyeColor": "green",\n' +
        '            "phone": "+1 (909) 547-2687",\n' +
        '            "address": "956 Roebling Street, Fairforest, Virgin Islands, 2586",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Goldie Gentry"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Aisha Tran"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": true,\n' +
        '            "about": "Anim mollit tempor ullamco adipisicing ipsum labore incididunt occaecat aliquip sint et enim. Ad nulla labore commodo proident aute. Nisi elit aute labore magna fugiat aliqua. Voluptate cupidatat duis est laboris. Quis ut amet nulla sit esse commodo commodo fugiat dolor tempor enim velit. In pariatur ex labore ea tempor proident proident. Sint excepteur excepteur dolor tempor nostrud nisi proident cupidatat excepteur laborum incididunt culpa aliqua.\\r\\n",\n' +
        '            "balance": "$2,278.75",\n' +
        '            "name": "Elma Head",\n' +
        '            "skills": [\n' +
        '                "adipisicing",\n' +
        '                "irure",\n' +
        '                "sit",\n' +
        '                "quis",\n' +
        '                "velit"\n' +
        '            ],\n' +
        '            "gender": "female",\n' +
        '            "age": 21,\n' +
        '            "greeting": "Hello, Elma Head! You have 8 unread messages.",\n' +
        '            "longitude": -131.352147,\n' +
        '            "_id": "56bdc3395273667c0f89b902"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "334f8cb3-eb04-45e6-abf4-4935dd439b70",\n' +
        '            "index": 4,\n' +
        '            "favoriteFruit": "banana",\n' +
        '            "latitude": 19.039227,\n' +
        '            "company": "NURALI",\n' +
        '            "email": "careybarr@nurali.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2015-04-03T01:25:56 -03:00",\n' +
        '            "eyeColor": "blue",\n' +
        '            "phone": "+1 (956) 512-2693",\n' +
        '            "address": "500 Harbor Court, Wilmington, District Of Columbia, 4946",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Jordan Sampson"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Eddie Strong"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": true,\n' +
        '            "about": "Deserunt anim esse duis labore enim ex ullamco. Commodo enim fugiat dolore qui aliquip. Est voluptate sit fugiat est. Duis eu exercitation amet cillum esse aliquip quis culpa mollit commodo anim.\\r\\n",\n' +
        '            "balance": "$3,951.17",\n' +
        '            "name": "Carey Barr",\n' +
        '            "skills": [\n' +
        '                "ex",\n' +
        '                "culpa",\n' +
        '                "nostrud",\n' +
        '                "et"\n' +
        '            ],\n' +
        '            "gender": "male",\n' +
        '            "age": 27,\n' +
        '            "greeting": "Hello, Carey Barr! You have 4 unread messages.",\n' +
        '            "longitude": -100.85060199999999,\n' +
        '            "_id": "56bdc3398f16bb4615b26c69"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "150b00fb-dd82-427d-9faf-2879ea87c695",\n' +
        '            "index": 5,\n' +
        '            "favoriteFruit": "apple",\n' +
        '            "latitude": -33.762830999999998,\n' +
        '            "company": "FURNIGEER",\n' +
        '            "email": "blackburndotson@furnigeer.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2014-12-19T02:55:31 -02:00",\n' +
        '            "eyeColor": "brown",\n' +
        '            "phone": "+1 (876) 411-2433",\n' +
        '            "address": "219 Bijou Avenue, Finzel, Wisconsin, 9092",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Jacklyn Lucas"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Linda Chapman"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": false,\n' +
        '            "about": "Qui consequat exercitation incididunt elit non est est ea amet. Ad veniam eiusmod nostrud esse occaecat nulla dolor velit deserunt. Aliquip ex minim amet id id ullamco fugiat. Non exercitation duis fugiat consectetur amet cupidatat veniam id sint enim Lorem amet sit aute. Voluptate minim dolor exercitation id incididunt ullamco proident sit. Velit ut id eu dolore laboris consectetur aute consequat tempor. Sunt aliquip proident officia magna veniam voluptate.\\r\\n",\n' +
        '            "balance": "$1,498.77",\n' +
        '            "name": "Blackburn Dotson",\n' +
        '            "skills": [\n' +
        '                "non",\n' +
        '                "do",\n' +
        '                "non",\n' +
        '                "amet",\n' +
        '                "ipsum"\n' +
        '            ],\n' +
        '            "gender": "male",\n' +
        '            "age": 38,\n' +
        '            "greeting": "Hello, Blackburn Dotson! You have 6 unread messages.",\n' +
        '            "longitude": 32.616394999999997,\n' +
        '            "_id": "56bdc33939066929c893b269"\n' +
        '        },\n' +
        '        {\n' +
        '            "guid": "e1bf46ab-7168-491e-925e-f01e21394812",\n' +
        '            "index": 6,\n' +
        '            "favoriteFruit": "strawberry",\n' +
        '            "latitude": 15.419051,\n' +
        '            "company": "KOG",\n' +
        '            "email": "shereeanthony@kog.com",\n' +
        '            "picture": "http://placehold.it/32x32",\n' +
        '            "registered": "2015-02-25T01:02:55 -02:00",\n' +
        '            "eyeColor": "brown",\n' +
        '            "phone": "+1 (979) 504-2554",\n' +
        '            "address": "702 Highland Avenue, Caberfae, Minnesota, 5570",\n' +
        '            "friends": [\n' +
        '                {\n' +
        '                    "id": 0,\n' +
        '                    "name": "Goldie Gentry"\n' +
        '                },\n' +
        '                {\n' +
        '                    "id": 1,\n' +
        '                    "name": "Briana Decker"\n' +
        '                }\n' +
        '            ],\n' +
        '            "isActive": true,\n' +
        '            "about": "Cillum fugiat officia exercitation nulla quis consequat eu irure ut magna irure. Mollit laborum nulla in laboris officia sit. Nisi cupidatat velit ad deserunt commodo minim minim ullamco adipisicing qui dolore adipisicing esse.\\r\\n",\n' +
        '            "balance": "$2,764.03",\n' +
        '            "name": "Sheree Anthony",\n' +
        '            "skills": [\n' +
        '                "Lorem",\n' +
        '                "veniam",\n' +
        '                "excepteur",\n' +
        '                "culpa"\n' +
        '            ],\n' +
        '            "gender": "female",\n' +
        '            "age": 39,\n' +
        '            "greeting": "Hello, Sheree Anthony! You have 5 unread messages.",\n' +
        '            "longitude": 37.385548,\n' +
        '            "_id": "56bdc3396fdbaec5ee4ca929"\n' +
        '        }\n' +
        '    ]'


let data = JSON.parse(dataJson);

 /*1. Массив скиллов (поле skills) всех людей,
  не должно быть повторяющихся скиллов, так же они должны
  быть отсортированы по алфавиту;*/

    let skillsArray = [];

    for (let i=0; i < data.length; i++) {
        skillsArray[i] = data[i].skills;
    }

    let skills = _.sortBy( _.union(...skillsArray) );

    console.log('1.Массив скиллов', skills);






 /* 2.Массив имен (поле name) людей, отсортированных
 в зависимости от количества их друзей (friends);*/

    function User(name,friends ) {
        this.name = name;
        this.friends = friends;
    }

    let users = [];

   for (let i=0; i < data.length; i++) {
        users[i] = new User(data[i].name, data[i].friends.length);
    }

    /*function countFriends (arr) {
        let outArr=[];

        for (let i = 0; i < arr.length; i++) {

            outArr[i].name= arr[i].name;
            outArr[i].friends= arr[i].friends.length;
        }
        return  outArr;
    }

    let userFriends = _.map(data, countFriends(data));
    console.log('userFriends', userFriends);*/


    console.log('2.Массив имен (поле name) людей, отсортированных\n' +
        ' в зависимости от количества их друзей (friends);', _.map( _.sortBy(users, 'friends'), 'name') ) ;




    /*3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей*/

    let friends = [];

    for (let i=0; i < data.length; i++) {

        for (let j=0; j<data[i].friends.length; j++ ) {

            friends[i] = data[i].friends[j].name;
        }
    }

    console.log('3. Массив всех друзей всех пользователей', _.uniq(friends));

});