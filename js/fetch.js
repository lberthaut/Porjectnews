const url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=fc0456071e5e43499f389f5b2577213f';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let articles = data.articles;
        return articles.map(article => MakeArticle(article))
    })
    .catch(function (error) {
        console.log(error);
    });

function MakeArticle(articles) {
    const mainCtn = document.getElementById('articles_container')
    mainCtn.innerHTML +=
        `<h2>${articles.title}</h2>`
}