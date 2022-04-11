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
    var dateFr = new Date(articles.publishedAt).toLocaleString();
    const mainCtn = document.getElementById('articles_container')
    mainCtn.innerHTML += `
        <div class="article_tile">
        <a href="${articles.url}">
        <div class="container_img">
        <img alt="${articles.title}" class="article_img" src="${(articles.urlToImage == null ? (articles.urlToImage = "../assets/logo.jpg") : (articles.urlToImage))}"/>
        </div>
        <h2 class="article_title">${articles.title}</h2>
        <p class="article_content">${(articles.description == null ? (articles.description = "Plus d'informations dans la suite de l'article") : (articles.description))}</p>
        <p class="article_published">${dateFr}</p>
        </a>
        </div>`

}
