import css from 'styled-jsx/css';

export const components = css.resolve`
  .power-up-button {
    @apply outline-none flex flex-col justify-end items-center bg-orange-lightest p-3 rounded-lg text-gray-700 text-center;
    min-width: 132px;
  }

  .power-up-button > img {
    margin-bottom: .6rem;
  }

  .power-up-button + .power-up-button {
    margin-left: 0.75rem;
  }

  .power-up-button.active {
    @apply bg-orange-lighter;
    color: #fff;
  }

`