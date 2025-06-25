document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('stickyBox');
  const container = document.querySelector('.container');

  if (!box || !container) return;

  function checkOverlap() {
    const boxRect = box.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const verticalOverlap =
      containerRect.top < boxRect.bottom &&
      containerRect.bottom > boxRect.top;

    const horizontalOverlap =
      containerRect.left < boxRect.right &&
      containerRect.right > boxRect.left;

    if (verticalOverlap && horizontalOverlap) {
      box.classList.add('blur');
    } else {
      box.classList.remove('blur');
    }
  }

  // Comprobar al cargar y cada vez que hagas scroll
  window.addEventListener('scroll', checkOverlap);
  window.addEventListener('resize', checkOverlap);
  checkOverlap(); // primera comprobación al cargar
});
