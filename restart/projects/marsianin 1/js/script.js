/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // Мой вариант решения:
    
    // const advert = document.querySelector('.promo__adv')
    // const ganre = document.querySelector('.promo__genre')
    // const backgroundImg = document.querySelector('.promo__bg')
    // const oldList = document.querySelector('.promo__interactive-list')
    // const boxForFilmList = document.querySelector('.promo__interactive-title')
    
    // // удаляем рекламу со страницы
    // // Вариант 1
    // advert.remove()
    
    // // Вариант 2
    // // advert.style.display = 'none'
    
    // // Меняем жанр
    // ganre.innerText = 'Драма'
    
    // backgroundImg.style.backgroundImage = 'url(img/bg.jpg)'
    
    // // удаляем старый елемент
    // oldList.remove()
    
    // // создаём контейнер ul куда поместим потом li
    // const newList = document.createElement('ul')
    // newList.classList.add('promo__interactive-list')
    // boxForFilmList.append(newList)
    
    // // создаём li и помещаем туда информацию из объекта movieDB
    // for(let elem of movieDB.movies) {
    //     const li = document.createElement('li')
    //     li.classList.add('promo__interactive-item')
    //     newList.append(li)
    //     li.innerText = `${elem}`
    // }
    
    // Решение с курса
    
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]')

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newFilm = addInput.value
        const favorite = checkbox.checked

        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }
            if(favorite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm)
            // movieDB.movies.sort()
            sortArr(movieDB.movies)
    
            createMovieList(movieDB.movies, movieList)
        }
        // Очищаем инпут
        // addForm.reset()
        // Очищаем инпут 2 
        event.target.reset()
    })
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove()
        })
    }
    
    const makeChanges = () => {
        genre.textContent = 'драма'
    
        poster.style.backgroundImage = 'url(img/bg.jpg)'
    }
    
    const sortArr = (arr) => {
        arr.sort()
    }

    // для моегорешения:
    // movieList.innerHTML = ''
    
    function createMovieList(films, parent) {
        parent.innerHTML = ''
        sortArr(films)

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)

                createMovieList(films, parent)
            })
        })
    }
    
    deleteAdv(adv)
    makeChanges()
    createMovieList(movieDB.movies, movieList)

    // function render() {
    //     movieDB.movies.forEach((film, i) => {
    //         movieList.innerHTML += `
    //         <li class="promo__interactive-item">${i+1} ${film}
    //             <div class="delete"></div>
    //         </li>
    //         `
    //     })
    // }
    // render()
    
    /* Задания:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */
    
    
    // Моё решение
    
    // const input = document.querySelector('.adding__input'),
    //     button = document.querySelector('button')
    
    // button.addEventListener('click', (e) => {
    //     let result
    //     if(input.value.length > 21) {
    //         result = input.value.slice(0,9) + '...'
    //     }
    //     e.preventDefault()
    //     movieDB.movies.push(result)
    //     movieList.innerHTML = ''
    //     render()
    // })
    
    // Решение с курса
    
    
    
    
    
    
    
})
