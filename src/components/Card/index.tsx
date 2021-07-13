import React, { FC } from 'react';

import { ICardProps } from './types';

import styles from './style.module.scss';

const Card: FC<ICardProps> = ({ name, price, img, onClickAdd, onClickFavorite }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const catchClick = () => {
    onClickAdd();
    setIsAdded(!isAdded);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className="favorite" onClick={onClickFavorite}>
          <img src="assets/heart-unliked.svg" alt="unliked" />
        </div>
        <img width={133} height={112} src={`assets/sneakers/${img}`} alt="" />
        <h5>{name}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img
            className={styles.plus}
            onClick={catchClick}
            src={isAdded ? 'assets/btn-checked.svg' : 'assets/btn-plus.svg'}
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
