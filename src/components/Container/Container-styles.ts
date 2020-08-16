import css from 'styled-jsx/css';

export const baseStyles = css`
  .container {
		@apply w-full px-4;
	}

	@screen md {
		.container {
			@apply mx-6;
		}
	}

	@screen xl {
    .container {
			@apply mx-auto;
			@apply px-0;
      width: 1280px;
    }
	}
`;
