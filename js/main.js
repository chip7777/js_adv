const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
//                 console.log(data);
                 this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
console.log(list.allProducts);

class Basket {
    constructor (block = '.basket-block'){
        this.block = block;
        this._addListener();
        this.goods = [];
        this._getGoods();
        this.show();
    }
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }

    _addListener (){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.block).classList.toggle('invisible');
        });
    }
    _getGoods(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => data.contents.forEach(element => {
                this.goods.push(element);
                this.show(element);
            }));
    }
    _render (elem, image = 'https://via.placeholder.com/50x50') {
        return `<div class='basket-el'>
            <img src="${image}" alt="image">
            <span class='basket-title'>${elem.product_name}</span>
            <span class='basket-cost'>${elem.price}</span>
            <span class='basket-quantity'>${elem.quantity}</span>
            </div>`;
    }
    show (elem){
        const block = document.querySelector(this.block);
        block.insertAdjacentHTML('beforeend',this._render(elem));
        
    }
}



const basket = new Basket();

console.log(basket);