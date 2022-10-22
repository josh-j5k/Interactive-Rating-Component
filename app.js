const number = document.querySelector('.number');
const btns = document.querySelectorAll('.btns');
const card = document.querySelector('.card');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const currentBtn = e.currentTarget
      if (btn === currentBtn) {
        btn.style.backgroundColor = "hsl(216, 12%, 54%)"
        btn.style.color = "#ffffff"
     } else {
        console.log(false)
     }
      number.textContent = currentBtn.value
    })
}) 