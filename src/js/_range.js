import noUiSlider from 'nouislider';

export default function rangeInit(idSlider) {
  const slider = document.getElementById(idSlider);
 

  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 100,
    range: {
      'min': 0,
      'max': 15000
    }
  });
}