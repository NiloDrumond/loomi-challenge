import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import React from 'react';
import { WithAlertProps } from './WithAlert.types';

function WithAlert({
  renderTrigger,
  alertProps,
  header,
  onConfirm,
  confirmLabel,
}: WithAlertProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleConfirm = React.useCallback(() => {
    onConfirm();
    onClose();
  }, [onConfirm, onClose]);

  return (
    <>
      {renderTrigger({ onOpen })}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        {...alertProps}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {header}
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja fazer isso? Essa acao nao podera ser
              desfeita.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="solid" ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                onClick={handleConfirm}
                ml={3}
              >
                {confirmLabel || 'Confirmar'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default WithAlert;
