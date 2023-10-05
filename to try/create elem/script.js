const box = document.querySelector('.box')
const someObj = [
    {title: 'someTitle 1', id: 1},
    {title: 'someTitle 2', id: 2},
    {title: 'someTitle 3', id: 3}
]
const someArr = [ 'title 1', 'title 2', "title 3"]

for(let elem in someArr) {
    const li = document.createElement('li')
    li.classList.add('li-item')
    box.append(li)
    li.innerText = `${someArr[elem]}`
    li.style.color = 'red'
}


const someElement = document.createElement('div')
someElement.classList.add('test-class')
document.body.append(someElement)


