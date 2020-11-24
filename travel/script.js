const countrys = document.querySelector(".countrys");
const sets = document.querySelectorAll(".setCountries");
const nextBtn = document.querySelector("#arrow");
const countries = document.querySelectorAll(".country");


// for (let i = 0; i < 3; i++) {
//   countries[i].style.display = "flex";
// }

function next(){
    sets.forEach(set => {
      set.classList.toggle('active')
    })
}
nextBtn.addEventListener("click", next)