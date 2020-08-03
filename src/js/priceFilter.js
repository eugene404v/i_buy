const images = document.querySelectorAll('.gallery__item');
const controls = document.querySelectorAll('.filter__btn--price');

const priceFilter = () => {
  controls.forEach((el) => {
    el.addEventListener('click', (e) => {
      images.forEach((el) => {
        el.classList.remove('gallery__item--hidden')
      });

      if (e.target.dataset.filter == "200") {
        filterHandler(0, 200);
      } else if (e.target.dataset.filter == "400") {
        filterHandler(200, 400);
      } else if (e.target.dataset.filter == "600") {
        filterHandler(400, 600);
      } else if (e.target.dataset.filter == "more") {
        filterHandler(600, Infinity);
      }
    })
  })
}

function filterHandler(valueMin, valueMax) {
  images.forEach((el) => {
    if (+el.dataset.price < valueMin || +el.dataset.price > valueMax) {
      el.classList.add('gallery__item--hidden')
    }
  })
}

export default priceFilter;