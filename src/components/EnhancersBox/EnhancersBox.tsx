import React from 'react';
import { baseStyles } from './EnhancersBox-styles';

function EnhancersBox() {
	return (
		<div className="eb-container">
			<div className="flex">
				<div className="mr-10">
					<span>DIVISA</span>
				</div>
				<div>
					<span>TIPO DE COBRO</span>
				</div>
			</div>

			<style jsx>{baseStyles}</style>
		</div>
	)
}

export default EnhancersBox;