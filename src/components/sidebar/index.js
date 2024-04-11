const checkbox = document.getElementById('sidebar-trigger');

const addNoScroll = () => {
  const paddingRight = window.outerWidth - window.innerWidth;

  document.documentElement.classList.add('no-scroll');
  document.body.style = `padding-right: ${paddingRight + 'px'}`;
}

const removeNoScroll = () => {
  setTimeout(() => {
    document.body.style = `padding-right: 0`;
    document.documentElement.classList.remove('no-scroll');
  }, 300);
}

checkbox.onchange = function() {
  if (this.checked) addNoScroll();
  else removeNoScroll();
}

window.addEventListener('hashchange', () => {
  checkbox.checked = false;
  removeNoScroll();
});