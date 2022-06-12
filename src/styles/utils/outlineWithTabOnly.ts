// Disable blue outline when the user clicks with the mouse, and re-enable it when Tab is pressed
// https://github.com/chakra-ui/chakra-ui/issues/708#issuecomment-1045344924
function outlineWithTabOnly() {
  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
  });

  // Re-enable focus styling when Tab is pressed
  document.body.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });
}

export { outlineWithTabOnly };
