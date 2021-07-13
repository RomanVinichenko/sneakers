import { ProductsType } from '../../../App';

export interface IDrawerProps {
  onExit: () => void;
  products: ProductsType[];
}
