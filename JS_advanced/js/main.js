const products = [
    {id: 1, title: 'Notebook', price: 2000,
    url : "https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg"},
    {id: 2, title: 'Mouse', price: 20, 
    url : "https://st4.depositphotos.com/20524830/26077/i/1600/depositphotos_260771386-stock-photo-computer-mouse-has-black-wire.jpg"},
    {id: 3, title: 'Keyboard', price: 200,
    url: "https://static3.depositphotos.com/1001003/142/i/950/depositphotos_1424160-stock-photo-keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 50,
    url : "https://st2.depositphotos.com/32514642/46900/i/1600/depositphotos_469002574-stock-photo-playstation-next-generation-gaming-console.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (prod) => {
    return `<div class="product-item">
                <img class="product-img" src="${prod.url}">
                <h3 class= "product-title">${prod.title}</h3>
                <p class = "product-price">${prod.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);