
let dataArray = [
    {
        imgSrc: "https://images.unsplash.com/photo-1552901464-1449e53709c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
        text: "Kada ta žiema?"

    },
    {
        imgSrc: "https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg",
        text: "Kur tu, vasara?"
    },
    {
        imgSrc: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210316134609-01-wisdom-project-spring.jpg",
        text: "Ech, pavasaris..."
    }
];
function changeHtml(data) {
    let text = document.getElementById("text");
    let img = document.getElementById("img");
    img.setAttribute("src", data.imgSrc);
    text.innerHTML = data.text;
}

function randomIndex(size) {
    let randInd = Math.floor(Math.random() * size);
    return randInd;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    let randInd = randomIndex(dataArray.length);
    changeHtml(dataArray[randInd]);
});