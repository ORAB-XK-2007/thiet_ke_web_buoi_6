var imageList = [
    {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: 240,
        height: 160
    },
    {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: 320,
        height: 195
    },
    {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: 500,
        height: 343
    }
];

function display_random_image() {
    var randomIndex = Math.floor(Math.random() * imageList.length);
    var item = imageList[randomIndex];

    var container = document.getElementById('image_container');

    container.innerHTML = '<img src="' + item.url + '" width="' + item.width + '" height="' + item.height + '" alt="Random Image">';
}