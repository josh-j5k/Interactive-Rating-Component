const number = document.querySelector('.number');
const btns = document.querySelectorAll('.btns');
const card = document.querySelector('.card');
const submitBtn = document.getElementById('submit-btn')

btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const currentBtn = e.currentTarget
      if (currentBtn) {
        btn.classList.toggle('btn-active')
      }
      btns.forEach(btn => {
        if(btn !== currentBtn) {
            btn.classList.remove('btn-active')
        }
      })
      number.textContent = currentBtn.value
    })
});

submitBtn.addEventListener('click', () => {
    const rating = document.querySelector('.rating');
    rating.classList.add('hide-page');
    const succesPage = document.querySelector('.success-page');
    succesPage.classList.add('show-page');
});
