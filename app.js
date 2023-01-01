function main() {
    const input = document.querySelector('.inputText');
    const button = document.querySelector('.buttonAdds');
    const taskList = document.querySelector('.list')
    const taskEmpty = document.querySelector('.listEmpty')

    button.addEventListener('click',buttonClick);

    function buttonClick(){

        const taskText = input.value;
        const taskHtml = `
            <div class="el">
                <p class="textInfo">${taskText}</p>
                <button class="checkMark"><img class="checkMarkImg" src="./imgs/mark.png"></button>
                <button class="crossMark"><img class="crossImg" src="./imgs/cross.png"></button>
            </div>`
            console.log(taskHtml)
        //Добавляем задачу на страницу
        taskList.insertAdjacentHTML('beforeend',taskHtml)
        //Очищаем строку ввода, оставляем фокус на инпуте
        input.value = ""
        input.focus()
        //Определим есть ли у нас списки задач и скажем нужно покащзать лист пуст или неет
        if  (taskList.children.length > 1) {
            taskEmpty.classList.add('none')
        }
    }
}

window.onload = main;
