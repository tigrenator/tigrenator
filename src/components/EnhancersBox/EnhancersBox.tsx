import React, { useMemo, useState } from 'react';
import cx from 'classnames';
import { motion } from "framer-motion";
import { baseStyles, components } from './EnhancersBox-styles';
import Dropdown from '../Dropdown';
import { Coin } from '../../types/Calculator';
import PowerUpBlock from '../PowerUpBlock';
import { powerUps, powerUpAnimation, containerAnimation } from './utils';

type EnhancersBoxProps = {
	coins:  Coin[]
}

function EnhancersBox(props: EnhancersBoxProps) {
	const { coins } = props;
	const [selectedCoin, setSelectedCoin] = useState<number>();
	const coinsOptions = useMemo(() => coins.map(e => ({ label: e.nomenclature, value: e._id })), [coins])
	return (
		<div className="eb-container">
			<div className="flex">
				<div className="mr-10 flex flex-col">
					<h2>DIVISA</h2>
					<Dropdown
						onChange={(val) => setSelectedCoin(val as number)}
						options={coinsOptions}
						value={selectedCoin}
						placeholder="Divisa"
						className={cx("coins-dropdown", components.className)}
					/>
				</div>
				<div>
					<span>TIPO DE COBRO</span>
				</div>
			</div>
			<motion.ul
				className="flex mt-3"
				variants={containerAnimation}
				initial="hidden"
				animate="visible"
			>
				{powerUps.map((powerUp, index) => (
					<motion.li key={`powerup-${index}`} variants={powerUpAnimation}>
						<PowerUpBlock
							title={powerUp.title}
							powers={powerUp.options}
							active="PARTICULAR"
							onClick={() => {}}
						/>
					</motion.li>
				))}
			</motion.ul>
			<style jsx>{baseStyles}</style>
			{components.styles}
		</div>
	)
}

export default EnhancersBox;