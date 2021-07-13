import React, { FC } from 'react';

import { IHeaderProps } from './types';

const Header: FC<IHeaderProps> = ({ onOpenCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="assets/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onOpenCart}>
          <img width={18} height={18} src="assets/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="assets/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
