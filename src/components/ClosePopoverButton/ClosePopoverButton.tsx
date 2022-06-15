import React from 'react';
import { Icon, IconButton, usePopoverContext } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { hoverOnBlack } from 'styles/utils/hoverOnBlack';

const ClosePopoverButton = () => {
  const { onClose } = usePopoverContext();
  return (
    <IconButton
      onClick={onClose}
      position="absolute"
      right={0}
      top={0}
      {...hoverOnBlack()}
      icon={<Icon w={5} h={5} as={FiX} />}
      aria-label="Fechar popover"
    />
  );
};

export { ClosePopoverButton };
