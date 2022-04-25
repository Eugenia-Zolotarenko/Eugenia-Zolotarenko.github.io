$(function (){
    let data = {
        news: [
            {
                newsImg: 'img/dist/news-img1.png',
                newsDate: new Date(2022, 0, 21),
                newsHeading: 'Powerful Techniques for Advanced Service',
                newsAuthor: 'cmsmasters',
                newsAuthorLink: 'cmsmasters',
                newsComments: 6,
                newsCommentsLink: 'cmsmasters',
                newsText: ''
            },

            {
              newsImg: 'img/dist/news-img1.png',
              newsDate: new Date(2022, 0, 21),
              newsHeading: 'Powerful Techniques for Advanced Service',
              newsAuthor: 'cmsmasters',
              newsAuthorLink: 'cmsmasters',
              newsComments: 6,
              newsCommentsLink: 'cmsmasters',
              newsText: ''
            },

            {
              newsImg: 'img/dist/news-img1.png',
              newsDate: new Date(2022, 0, 21),
              newsHeading: 'Powerful Techniques for Advanced Service',
              newsAuthor: 'cmsmasters',
              newsAuthorLink: 'cmsmasters',
              newsComments: 6,
              newsCommentsLink: 'cmsmasters',
              newsText: "",
            },

            {
              newsImg: 'img/dist/news-img1.png',
              newsDate: new Date(2022, 0, 21),
              newsHeading: 'Powerful Techniques for Advanced Service',
              newsAuthor: 'cmsmasters',
              newsAuthorLink: 'cmsmasters',
              newsComments: 6,
              newsCommentsLink: 'cmsmasters',
              newsText: '',
            },

            {
              newsImg: 'img/dist/news-img1.png',
              newsDate: new Date(2022, 0, 21),
              newsHeading: 'Powerful Techniques for Advanced Service',
              newsAuthor: 'cmsmasters',
              newsAuthorLink: 'cmsmasters',
              newsComments: 6,
              newsCommentsLink: 'cmsmasters',
              newsText: '',
            },

            ],
    }

    let $newsItem = $('.js-latest-news').html();

    let content = tmpl($newsItem, data);

    let $newsPlace = $('.social')

    $socialPlace.append(content);

});
