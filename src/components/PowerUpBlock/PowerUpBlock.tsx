import React from 'react';
import cx from 'classnames';
import { motion } from "framer-motion"
import { components } from './PowerUp-styles';
import { PowerUpBlockProps, PowerUpProps } from '../../types/Calculator';

function PowerUpBlock(props: PowerUpBlockProps) {
  const { title, powers, active } = props;

  return (
    <div className="mr-6 flex flex-col w-11/12 md:w-auto">
      <h2 className="block mb-2 uppercase">{title}</h2>
      <div className="flex">
        {powers.map((powerUp : PowerUpProps) => {
          const { name, icon } = powerUp;
          const isActive = active === name;
          const activeClass = isActive ? 'active' : ''
          return (
              <motion.button
                className={cx('power-up-button', activeClass, components.className)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={`powerUp-${name}`}
              >
                <img src={icon} alt={`${name} icon`} className="h-10 mb-2" />
                <h2>{powerUp.name}</h2>
                <style jsx>{`
                  img {
                    filter: ${isActive ? 'invert(1)' : 'contrast(0.3)'};
                  }
                `}</style>
              </motion.button>
          )
        })}
      </div>
      {components.styles}
    </div>
  )
}

export default PowerUpBlock