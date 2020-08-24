import css from 'styled-jsx/css';

export const baseStyles = css`
	.background {
		@apply absolute;
		top: -70px;
		width: 80%;
		right: 0;
		height: 90vh;
    object-fit: contain;
    object-position: top right;
	}

	.main-container {
		@apply pt-10 relative flex-1;
	}

	.home-page {
		@apply bg-brown-lighter flex flex-col h-full;
    min-height: 100vh;
	}
`