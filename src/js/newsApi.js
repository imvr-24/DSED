

const fetchLatestNews = async () => {

    const apiKey = 'b85765f3a10a43be9e59ec9706558361';
    const country = 'in';
    const searchQuery = 'cricket';
    const date = '2019-06-4';


    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&q=${searchQuery}&from=${date}&sortBy=popularity`;
    var req = new Request(url);
    let news = fetch(req)
    const response = await news;
    const data = await response.json();
    console.log(data);
    return data;
};



async function fillModal(data) {

    console.log(data);
    const headDiv = document.querySelector('.headlines');

    console.log(headDiv);

    const optimumResults =  data.articles.length; 
    console.log(optimumResults);
    for (let i = 0; i < optimumResults ; i++) {
        headDiv.insertAdjacentHTML('beforeend', `
        <div class="card" style=" margin: 1rem 0">
            <img class="card-img-top newsImg" src="" alt="">
            <div class="card-body">
                <p class="card-text articleTitle"> </p>
            </div>
        </div>
        `);
    }


    const newsImage = Array.from(document.querySelectorAll('.newsImg'));

    const newsTitle = Array.from(document.querySelectorAll('.articleTitle'));
    console.log(newsTitle);
    const { articles, status } = data;

    let topheadlines = articles;

    for (let i = 0; i < newsTitle.length; i++) {
        newsImage[i].setAttribute('src', `${topheadlines[i].urlToImage}`)
        newsImage[i].setAttribute('alt', `${topheadlines[i].title}`)
        newsTitle[i].innerHTML = topheadlines[i].description;
    }
    console.log(topheadlines);
    console.log(status);
}


export { fetchLatestNews, fillModal  }