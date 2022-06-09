import { IconType } from 'react-icons';

export type SidebarItemProps = {
  linkTo?: string;
  onClick?: () => void;
  icon: IconType;
  label: string;
};
