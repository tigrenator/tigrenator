import css from 'styled-jsx/css';

export const baseStyles = css`
	.eb-container {
		@apply bg-white p-10;
		border-radius: 10px;
		box-shadow: 0px 10px 22px -5px rgba(0,0,0,0.2);
	}
`

export const components = css.resolve`
	.coins-dropdown {
		min-width: 100px;
	}
`