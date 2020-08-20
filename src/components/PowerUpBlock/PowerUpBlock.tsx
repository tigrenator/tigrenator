import React, { useMemo, useState } from 'react';
import cx from 'classnames';
import { baseStyles } from './PowerUp-styles';

type PowerUpProps = {
  name: string;
  icon: string;
}

type PowerUpBlockProps = {
  title: string;
  powers: PowerUpProps[];
  active: string;
  onClick: () => void;
}

function PowerUpBlock(props: PowerUpBlockProps) {
  const { title, powers, active } = props;

  return (
    <div className="power-up flex flex-col w-11/12 md:w-auto">
      <h2 className="block mb-2 uppercase">{title}</h2>
      <div className="flex">
        {powers.map((powerUp : PowerUpProps) => {
          const { name, icon } = powerUp;
          const activeClass = (active === name) ? 'active' : ''
          return (
            <button
              className={cx('power-up-button', activeClass)}
              key={`powerUp-${name}`}
            >
              <img src={icon} alt={`${name} icon`} />
              <span>{powerUp.name}</span>
            </button>
          )
        })}
      </div>
      <style jsx>{baseStyles}</style>
    </div>
  )
}

export default PowerUpBlock