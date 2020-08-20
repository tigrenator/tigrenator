import React, { useMemo, useState } from 'react';
import cx from 'classnames';
import { baseStyles, components } from './EnhancersBox-styles';
import Dropdown from '../Dropdown';
import { Coin } from '../../types/Calculator';
import PowerUpBlock from '../PowerUpBlock';

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
			<div className="flex mt-3">
				<PowerUpBlock
					title="Cliente"
					powers={[{
						icon: '/particular-icon.svg',
						name: 'PARTICULAR'
					}, {
						icon: '/company-icon.svg',
						name: 'EMPRESA'
					}]}
					active="PARTICULAR"
					onClick={() => {}}
				/>
				<PowerUpBlock
					title="Tiempo"
					powers={[{
						icon: '/particular-icon.svg',
						name: 'PARTICULAR'
					}, {
						icon: '/company-icon.svg',
						name: 'EMPRESA'
					}]}
					active="PARTICULAR"
					onClick={() => {}}
				/>
				<PowerUpBlock
					title="Freelancer"
					powers={[{
						icon: '/particular-icon.svg',
						name: 'PARTICULAR'
					}, {
						icon: '/company-icon.svg',
						name: 'EMPRESA'
					}]}
					active="PARTICULAR"
					onClick={() => {}}
				/>
			</div>
			<style jsx>{baseStyles}</style>
			{components.styles}
		</div>
	)
}

export default EnhancersBox;