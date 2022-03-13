const checkField = function(elem,patern){
    const regExp = patern;
    if (regExp.test(elem.value)) {
        elem.classList.remove('marked');
        return false;
    } else { 
            elem.classList.add('marked');
            return true;
        }
}

document.querySelector('button').addEventListener('click',ev => {
    ev.preventDefault();
    document.querySelectorAll('input').forEach(el => {
        switch(el.placeholder) {
            case 'Имя':   
                if (checkField(el,/^[a-яА-яa-zA-zёЁ]+$/)) {
                alert('Имя должно содержать только буквы!');
                }
            break;
            case 'Телефон':
                if (checkField(el,/^\+7\(\d{3}\)\d{3}\-\d{4}$/)) {
                    alert('Телефон должен быть в формате: +7(000)000-0000');
                }                
            break;
            case 'Почта':
                if (checkField(el,/^[0-9a-z-\.]+@[0-9a-z-]+\.[a-z]{2,4}$/i)) {
                    alert('неверный формат почтового адреса');
                }                
            break;
        }
    });
    
});
