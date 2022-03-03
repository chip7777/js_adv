class HambElem {
    constructor(name,cost,calories){
        this.name = name;
        this.cost = cost;
        this.calories = calories;
    }
}
class hamburger {
    constructor(main,addition,sous){
        this.main = new HambElem(this.getName(main),this.getCost(main),this.getCalories(main));
        this.addition =  new HambElem(this.getName(addition),this.getCost(addition),this.getCalories(addition));
        this.sous = [];
        this.getSous(sous);
    }

    getName(elem){
        const item = document.querySelector(`[name=${elem}]:checked`);
        return item.dataset.name;
    }
    getCost(elem){
        const item = document.querySelector(`[name=${elem}]:checked`);
        return item.dataset.cost;
    }
    getCalories(elem){
        const item = document.querySelector(`[name=${elem}]:checked`);
        return item.dataset.calories;
    }
    getSous(elem){
        document.querySelectorAll(`[name=${elem}]:checked`).forEach(elem => {
            const hE = new HambElem(elem.dataset.name,elem.dataset.cost,elem.dataset.calories);
            this.sous.push(hE);
        });
    }
    getTotalCost(){
        let tCost = +this.main.cost + +this.addition.cost;
        this.sous.forEach(elem => tCost += +elem.cost);
        return tCost;
    }

    getTotalCalories(){
        let tCalor = +this.main.calories + +this.addition.calories;
        this.sous.forEach(elem => tCalor += +elem.calories);
        return tCalor;
    }

    showCostAndCalories(){
        const line = document.querySelector('#total');
        line.textContent = `Итоговая стоимость: ${this.getTotalCost()}, калорийность: ${this.getTotalCalories()}`;
    }
    
}

document.querySelector('button').addEventListener('click',targ => {
    hamb = new hamburger('main','addition','sous');
    console.log(hamb);
    hamb.showCostAndCalories();
    //console.log(hamb.getTotalCost());
    //console.log(hamb.getTotalCalories());
});
let hamb = new hamburger('main','addition','sous');
//console.log(hamb);
hamb.showCostAndCalories();
