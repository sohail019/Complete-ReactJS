const firstBasket = document.querySelector(".basket-1 span")
const secondBasket = document.querySelector(".basket-2 span")
const leftArrowBtn = document.querySelector(".left-arrow")
const rightArrowBtn = document.querySelector(".right-arrow")

let totalApples = 10


let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount


firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArrowBtn.addEventListener('click', () => {
    if(firstBasketAppleCount > 0){

        firstBasketAppleCount --
        firstBasket.innerText = firstBasketAppleCount;
        secondBasketAppleCount ++
        secondBasket.innerText = secondBasketAppleCount;
    }
})

leftArrowBtn.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

// the upper logic is imperative.
// That's why we need declarative programming