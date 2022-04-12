var url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=fc0456071e5e43499f389f5b2577213f';
const mainCtn = document.getElementById('articles_container');
const selections = document.querySelectorAll('.menu_selection');
for (const selection of selections) {
    selection.addEventListener('click', () => {
        mainCtn.innerHTML = "";
        var keySelection = selection.outerText;
        var url = `https://newsapi.org/v2/everything?` +
            `q=${keySelection}&` +
            'sortBy=publishedAt&' +
            'language=fr&' +
            'searchIn=title&' +
            'apiKey=fc0456071e5e43499f389f5b2577213f';
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                let articles = data.articles;
                articles.map(article => MakeArticle(article))
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}


fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let articles = data.articles;
        articles.map(article => MakeArticle(article))
    })
    .catch(function (error) {
        console.log(error);
    });


function MakeArticle(articles) {
    var dateFr = new Date(articles.publishedAt).toLocaleString();
    mainCtn.innerHTML += `
        <div class="article_tile">
        <a class="article_link" href="${articles.url}">
        <div class="container_img">
        ${(articles.urlToImage == null ? (`<img alt="${articles.title}" class="article_img img_null" src="../assets/logo.jpg"/>`) : (`<img alt="${articles.title}" class="article_img" src="${articles.urlToImage}"/>`))}
        </div>
        <h2 class="article_title">${articles.title}</h2>
        ${(articles.description == null || articles.description.length == 0 ? (`<p class="article_content content_null">Plus d'informations dans la suite de l'article</p>`) : (`<p class="article_content">${articles.description}</p>`))}
        <p class="article_published">${dateFr}</p>
        </a>
        </div>`
}
