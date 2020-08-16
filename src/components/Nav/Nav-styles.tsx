import css from 'styled-jsx/css';

export const components = css.resolve`

	.nav-container {
		@apply flex items-center;
		height: 64px;
	}
`;

export const baseStyles = css`
	.nav-title {
		font-family: Exo;
		font-weight: 700;
		font-size: 24px;
	}
`
