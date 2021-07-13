export interface ICardProps {
  name: string;
  price: number;
  img: string;
  onClickAdd: () => void;
  onClickFavorite: () => void;
}
