import css from 'styled-jsx/css';

export const baseStyles = css`
	.footer {
		@apply bg-gray-900 relative w-full;
	}

	.f-title {
		@apply text-center text-white font-bold mb-2;
		font-family: Exo;
		font-size: 24px;
	}

	.f-contact-container {
		@apply flex items-center cursor-pointer justify-center mb-2;
	}

	.f-animation {
		@apply transition duration-500 ease-in-out transform;
	}

	.f-animation:hover {
		@apply -translate-y-1 scale-110;
	}

	.f-contact-icon {
		@apply bg-gray-800 text-gray-400;
		padding: 8px;
    border-radius: 50%;
	}

	.f-divider {
		@apply mx-auto bg-gray-800 mt-8;
		height: 1px;
		width: 95%;
	}

	.f-contact-text {
		@apply ml-4 text-brown text-base;
	}

	@screen sm {
		.f-contact-container {
			@apply justify-start mb-0;
		}

		.f-title {
			@apply mb-0;
		}
	}
`