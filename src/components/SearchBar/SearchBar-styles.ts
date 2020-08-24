import css from 'styled-jsx/css';

export const baseStyles = css`
	.search-bar {
		@apply mt-20 mb-6 bg-white flex flex-row justify-between p-6 items-center self-center w-3/5;
		box-shadow: 0px 10px 22px -5px rgba(0,0,0,0.2);
		border-radius: 1.5rem;
	}

	.sb-btn {
		@apply bg-orange text-white rounded-lg py-2 px-5;
		font-size: 18px;
	}

	.sb-input {
		@apply outline-none;
		flex: 0 0 60%;
		font-size: 18px;
	}

	.sb-input::placeholder {
		color: #CDB399;
	}
`