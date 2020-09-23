const categories = document.querySelectorAll('.container')
const bgImageCategory = document.querySelectorAll('.sub-container')
const body = document.querySelector('body')
const categoryImg = document.querySelector('.category-image')


for (let i = 0; i < categories.length; i++) {
    const categorySelected = categories[i]
    categorySelected.addEventListener('click', function () {


        for (let category of categories) {
            for (let bgImg of bgImageCategory) {
                bgImg.classList.remove('active')

            }
            category.classList.remove('active')
        }


        let categoryId = categorySelected.getAttribute('id')

        categorySelected.classList.add('active')
        bgImageCategory[i].classList.add('active')

        categoryImg.setAttribute('id', 'show')
        categoryImg.querySelector("img").src = `assets/${categoryId}.png`
        categoryImg.querySelector("img").alt = `${categoryId}`


    })
}
