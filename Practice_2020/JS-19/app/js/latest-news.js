$(function (){
    let data = {
        news: [
            {
                newsImg: 'img/dist/news-img1.png',
                newsMonth: "Jan",
                newsDay: "23",
                newsHeading: 'Advanced Machinery Helps Improve',
                newsAuthor: 'cmsmasters',
                newsAuthorLink: 'https://www.google.com/',
                newsComments: 6,
                newsCommentsLink: 'https://www.google.com/',
                newsText: "Cum sociis natoque penatibus et magnis dis parturient ontesmus. " +
                    "Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia" +
                    " ptas sit aspernatur samomo enim ipsam voluptatem.",
            },

            {
              newsImg: 'img/dist/news-img2.png',
              newsMonth: "Jan",
              newsDay: "21",
              newsHeading: 'Powerful Techniques for Advanced Service',
              newsAuthor: 'cmsmasters',
              newsAuthorLink: 'https://www.google.com/',
              newsComments: 3,
              newsCommentsLink: 'https://www.google.com/',
              newsText: "Cum sociis natoque penatibus et magnis dis parturient ontesmus. " +
                  "Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia" +
                  " ptas sit aspernatur samomo enim ipsam voluptatem.",
            },

            ],
    }

    let $newsItem = $('#js-latest-news').html();

    let content = tmpl($newsItem, data);

    let $newsPlace = $('.latest-news')

    $newsPlace.append(content);

});
