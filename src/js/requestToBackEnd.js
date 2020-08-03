const requestBuilder = () => {
  const data = {};
  const priceTriggers = document.querySelectorAll('.filter__btn--price');
  const shapeTriggers = document.querySelectorAll('.filter__btn--shape');
  const widthTriggers = document.querySelectorAll('.filter__btn--width');
  const heightTriggers = document.querySelectorAll('.filter__btn--height');
  const applyTrigger = document.querySelector('.filter__apply');

  priceTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      data.price = e.target.dataset.filter
    })
  })

  shapeTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      data.shape = e.target.dataset.filter
    })
  })

  widthTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      data.width = e.target.dataset.filter
    })
  })

  heightTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      data.height = e.target.dataset.filter
    })
  })

  applyTrigger.addEventListener('click', () => {
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://google.com', true);
    xhr.send(JSON.stringify(data))
  })
}

export default requestBuilder;