const checkField = function(elem,patern){
    const regExp = patern;
    if (regExp.test(elem.value)) {
        elem.classList.remove('marked');
    } else { 
            elem.classList.add('marked');
        }
}

document.querySelector('button').addEventListener('click',ev => {
    ev.preventDefault();
    document.querySelectorAll('input').forEach(el => {
        switch(el.placeholder) {
            case 'Имя':   
                checkField(el,/^[a-яА-яa-zA-zёЁ]+$/);
            break;
            case 'Телефон':
                checkField(el,/^\+7\(\d{3}\)\d{3}\-\d{4}$/);                
            break;
            case 'Почта':
                checkField(el,/^[0-9a-z-\.]+@[0-9a-z-]+\.[a-z]{2,4}$/i);                
            break;
        }
    });
    
});
