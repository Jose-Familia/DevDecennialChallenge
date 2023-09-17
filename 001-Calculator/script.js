const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const btnclicked = button.textContent;

    if (button.id === 'AC') {
      screen.textContent = '0';
    } else if (button.id === 'Eraser') {
      if (screen.textContent.length === 1 || screen.textContent === 'Error') {
        screen.textContent = '0';
      } else {
        screen.textContent = screen.textContent.slice(0, -1);
      }
    } else if (button.id === 'Equals') {
      try {
        screen.textContent = eval(screen.textContent);
      } catch (error) {
        screen.textContent = 'Error';
      }
    } else {
      if (screen.textContent === '0' || screen.textContent === 'Error') {
        screen.textContent = btnclicked;
      } else {
        screen.textContent += btnclicked;
      }
    }
  });
});
