import { IProduct } from 'pages/AddProduct/AddProduct.types';
import { Control, UseFieldArrayRemove } from 'react-hook-form';

export type ItemsListProps = {
  control: Control<IProduct>;
};

export type ItemsListItemProps = {
  index: number;
  remove: UseFieldArrayRemove;
  control: Control<IProduct>;
};
