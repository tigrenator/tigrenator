import css from 'styled-jsx/css';


export const baseStyles = css`
	.background {
		@apply absolute;
		top: -70px;
		width: 70%;
		right: 0;
	}

	.main-container {
		@apply pt-10;
		height: calc(100vh - 64px);
	}
`