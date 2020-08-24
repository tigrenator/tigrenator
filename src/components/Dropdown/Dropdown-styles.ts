import css from 'styled-jsx/css';

export const baseStyles = css`
	.dropdown-btn {
		border-bottom: 1px solid;
		text-decoration: none;
		@apply w-full cursor-pointer flex justify-between items-center text-gray-700 pb-1 border-gray-400;
	}

	.dropdown-btn:focus {
		outline: none;
	}

	.dropdown-btn span {
		@apply text-orange;
		font-size: 16px;
	}

	.dropdown {
		position: relative;
	}

	.dropdown-content {
		@apply absolute w-full overflow-y-auto bg-white overflow-x-hidden;
		transition: all 0.25s;
		max-height: 200px;
		z-index: 3;
		transform-origin: top center;
		transform: scale(1,0);
		display: block;
	}

	.dropdown-content.active {
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		transform: scale(1);
	}

	.dropdown-content button {
		@apply w-full transition duration-500 ease-in-out p-2;
		color: black;
	}

	.dropdown-content button:hover {
		@apply bg-gray-200;
	}

	.dropdown-content button:focus {
		outline: none;
	}
`