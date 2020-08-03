const filterOpener = () => {
  const openTrigger = document.querySelector('.right-nav__btn');
  const closeTrigger = document.querySelector('.filter__close');
  const filterMenu = document.querySelector('.filter');

  openTrigger.addEventListener('click', () => {
    filterMenu.classList.remove('filter--hidden');
  })

  closeTrigger.addEventListener('click', () => {
    filterMenu.classList.add('filter--hidden');
  })
}

export default filterOpener;