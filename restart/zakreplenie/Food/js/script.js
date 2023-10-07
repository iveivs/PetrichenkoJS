window.addEventListener('DOMContentLoaded', () => {
    const itemWrapper = document.querySelector('.tabheader__items'), // обёртка для элементов меню родитель item-ов
    tabs = document.querySelectorAll('.tabcontent'), // сами табы
    menuItems = document.querySelectorAll('.tabheader__item') // элементы меню, item-ы менюшки

    function hideTabContent() {
        tabs.forEach( item => {
            item.style.display = 'none'
        })
        menuItems.forEach( (item) => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function showTabContent(i = 0){
        tabs[i].style.display = 'block'
        menuItems[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    itemWrapper.addEventListener('click', (event) => {
        if( event.target && event.target.classList.contains('tabheader__item')) {
            menuItems.forEach((item, i) => {
                if(event.target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

}
)

