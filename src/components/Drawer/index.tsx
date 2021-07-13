import React, { FC } from 'react';

import { IDrawerProps } from './types';

const Drawer: FC<IDrawerProps> = ({ onExit, products }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="assets/btn-remove.svg"
            alt="remove"
            onClick={onExit}
          />
        </h2>

        <div className="items">
          {products.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={`assets/sneakers/${obj.img}`}
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="assets/btn-remove.svg" alt="remove" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
