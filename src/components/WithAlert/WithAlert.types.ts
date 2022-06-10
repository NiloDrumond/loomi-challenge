import { AlertDialogProps } from '@chakra-ui/react';

export type RenderTriggerParams = {
  onOpen: () => void;
};

export type WithAlertProps = {
  alertProps?: AlertDialogProps;
  header: string;
  renderTrigger: (params: RenderTriggerParams) => JSX.Element;
  onConfirm: () => void;
  confirmLabel?: string;
};
