import css from 'styled-jsx/css';

export const components = css.resolve`
	.al-content {
		@apply py-5 px-8 bg-white mb-3 flex items-center outline-none;
		border-radius: 15px;
		font-size: 18px;
		font-weight: bold;
	}

	.al-content.active {
		background-color: #FFD69A;
		color: #71685B;
	}
`
