import React from 'react';

function useOnEnterPressed(onPress: () => void) {
  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        onPress();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [onPress]);
}

export { useOnEnterPressed };
