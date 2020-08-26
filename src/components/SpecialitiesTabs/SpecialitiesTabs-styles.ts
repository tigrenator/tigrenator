import css from 'styled-jsx/css';

export const baseStyles = css`
	.tabs-list {
		@apply flex;
		border-bottom: 3px solid #DFDFDF;
	}

	.sp-item{
		@apply flex-1 text-center m-0;
	}

	.sp-tab {
		@apply relative font-bold block bg-white;
		color: #2C2C2C;
		padding: 18px 6px;
		transition: background-color 600ms cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
		white-space: nowrap;
	}

	.sp-tab:hover {
		@apply cursor-pointer;
	}

	.sp-tab:after {
		@apply absolute w-full;
		content: '';
		top: 100%;
		left: 0;
		height: 3px;
	}

	.sp-tab.active:after {
		@apply bg-orange-lighter;
	}

	.sp-tab.active.animating:after {
		background-color: transparent;
	}

	.tab-content {
		padding: 30px;
		background: #EFEFEF;
	}
`
