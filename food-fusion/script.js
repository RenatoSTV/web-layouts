const category = document.querySelectorAll('.container')
const bgImageCategory = document.querySelectorAll('.sub-container')
const body = document.querySelector('body')

for (let i = 0; i < category.length; i++) {
    const categorySelected = category[i]
    const active = categorySelected.getElementsByClassName('active')
    categorySelected.addEventListener('click', function () {


        const categoryImg = document.querySelector('.category-image')
        let categoryId = categorySelected.getAttribute('id')

        categorySelected.classList.add('active')
        bgImageCategory[i].classList.add('active')
        categoryImg.classList.remove('out')
        categoryImg.classList.add('in')
        categoryImg.querySelector("img").src = `assets/${categoryId}.png`
        categoryImg.querySelector("img").alt = `${categoryId}`

        if (active) {
            categorySelected.addEventListener('click', function () {
                categorySelected.classList.remove('active')
                bgImageCategory[i].classList.remove('active')
                categoryImg.classList.toggle('out')


            })
        }

    })
}





// for (let i = 0; i < category.length; i++) {
//     const categorySelected = category[i]
//     categorySelected.addEventListener('click', function () {


//         const categoryImg = document.querySelector('.category-image')
//         let categoryId = categorySelected.getAttribute('id')

//         if (categorySelected.querySelector('.active')) {
//             categorySelected.classList.remove('active')
//             bgImageCategory[i].classList.remove('active')
//             categoryImg.classList.remove('in')
//             categoryImg.classList.add('out')
//         } else {
//             categorySelected.classList.add('active')
//             bgImageCategory[i].classList.add('active')
//             categoryImg.classList.add('in')
//             categoryImg.querySelector("img").src = `assets/${categoryId}.png`
//             categoryImg.querySelector("img").alt = `${categoryId}`
//         }
//     })
// }
