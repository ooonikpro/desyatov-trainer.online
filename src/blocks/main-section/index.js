const DURATION = 2000;

let activeIndex = 0;
const spans = document.querySelectorAll('.text-animation');

const tick = () => {
  spans[activeIndex].classList.toggle('d-none');

  if (activeIndex < spans.length - 1) activeIndex++;
  else activeIndex = 0;

  spans[activeIndex].classList.toggle('d-none');

  setTimeout(tick, DURATION);
}

setTimeout(tick, DURATION);