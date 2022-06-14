import { NestedSelectOptions } from 'components/forms/NestedSelect/NestedSelect.types';

export const colors: Option[] = [
  {
    label: 'Vermelho',
    value: 'red',
  },
  {
    label: 'Laranja',
    value: 'orange',
  },
  {
    label: 'Verde',
    value: 'green',
  },
  {
    label: 'Azul',
    value: 'blue',
  },
  {
    label: 'Amarelo',
    value: 'yellow',
  },
  {
    label: 'Roxo',
    value: 'purple',
  },
];

export const categories: NestedSelectOptions = [
  {
    value: 'environments',
    label: 'Ambientes',
    items: [
      { value: 'bedroom', label: 'Quarto' },
      { value: 'bathroom', label: 'Banheiro' },
      { value: 'kitchen', label: 'Cozinha' },
    ],
  },
  {
    value: 'sideboards',
    label: 'Aparadores',
    items: [
      { value: 'chairs', label: 'Cadeiras' },
      { value: 'tables', label: 'Mesas' },
      { value: 'armchairs', label: 'Poltronas' },
    ],
  },
  {
    value: 'external_area',
    label: 'Área externa',
    items: [
      { value: 'chairs', label: 'Cadeiras' },
      { value: 'tables', label: 'Mesas' },
      { value: 'armchairs', label: 'Poltronas' },
    ],
  },
  {
    value: 'upholstered',
    label: 'Estofados',
    items: [
      { value: 'sofa', label: 'Sofá' },
      { value: 'tables', label: 'Mesas' },
      { value: 'armchairs', label: 'Poltronas' },
    ],
  },
  {
    value: 'Tables',
    label: 'Mesas',
    items: [
      { value: 'round', label: 'Redonda' },
      { value: 'rectangular', label: 'Retangular' },
    ],
  },
];

export const tags: NestedSelectOptions = [
  {
    value: 'environments',
    label: 'Ambientes',
    items: [
      { value: 'bedroom', label: 'Quarto' },
      { value: 'bathroom', label: 'Banheiro' },
      { value: 'kitchen', label: 'Cozinha' },
    ],
  },
  {
    value: 'features',
    label: 'Características',
    items: [
      { value: 'heavy', label: 'Pesado' },
      { value: 'limited', label: 'Limitado' },
    ],
  },
  {
    value: 'material',
    label: 'Material',
    items: [
      { value: 'painted_metal', label: 'Metal Pintado' },
      { value: 'natural_wood', label: 'Madeira Natural' },
      { value: 'glass', label: 'Vidro' },
      { value: 'silk', label: 'Tecido' },
      { value: 'natural_leather', label: 'Couro natural' },
    ],
  },
];
