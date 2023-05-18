    const input = document.querySelector('.inputText');
    const button = document.querySelector('.buttonAdds');
    const taskList = document.querySelector('.list')
    const taskEmpty = document.querySelector('.listEmpty')
    const textInfo = document.querySelector('.textInfo')

    //добавление задачи
    button.addEventListener('click',buttonClick);
    //удаление задачи
    taskList.addEventListener('click',crossTask)
    //отмечаем выполненые задачи
    taskList.addEventListener('click',checkTask)


    //функции
    function buttonClick(){

        const taskText = input.value;

        const taskHtml = `
            <div class="el">
                <p class="textInfo">${taskText}</p>
                <button data-action="check" class="checkMark btn-action"><img class="checkMarkImg" src="./imgs/mark.png"></button>
                <button data-action="cross" class="crossMark btn-action"><img class="crossImg" src="./imgs/cross.png"></button>
            </div>`
        //Добавляем задачу на страницу
        taskList.insertAdjacentHTML('beforeend',taskHtml)
        //как и innerHTML добовляет хтмл код на страницу но в заданом taskList месте
        //аргумент beforeend добавляет элемент в конец какого то списка или где оно там все расположено


        //Очищаем строку ввода, оставляем фокус на инпуте
        input.value = ""
        input.focus()
        //Определим есть ли у нас списки задач и скажем нужно покащзать лист пуст или неет
        if  (taskList.children.length > 1) {
            taskEmpty.classList.add('none')
        }


    }

    function crossTask(event){
       // console.log(event.target) //именно тот элемент по которому было совершено дейстиве
        if (event.target.dataset.action !== 'cross'){
            return
        }
        //находим и удаляем данный элемент
        if (event.target.dataset.action === 'cross'){
            const parent = event.target.closest('div')
            parent.remove()
        }
        //если в списке 0 задач тогда список дел пуст убрали класс скрытия
        if  (taskList.children.length === 1) {
            taskEmpty.classList.remove('none')
        }

    }

    function checkTask(event){
        if (event.target.dataset.action === 'check'){
            const parent = event.target.closest('div')
            const parentNode = parent.querySelector('.textInfo')
            parentNode.classList.toggle('taskCheck') //toggle добовляет класс как add, но если нажать езе раз тогда вызхванный класс уберется
        }

    }

