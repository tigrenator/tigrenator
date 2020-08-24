import css from 'styled-jsx/css';

export const components = css.resolve`
  .power-up-button {
    @apply outline-none flex flex-col justify-end items-center bg-gray-200 p-3 rounded-lg text-gray-700 text-center;
    min-width: 132px;
  }

  .power-up-button:hover, .power-up-button:focus {
    @apply bg-gray-300;
  }
  
  .power-up-button > img {
    margin-bottom: .6rem;
  }

  .power-up-button + .power-up-button {
    margin-left: 0.75rem;
  }

  .power-up-button.active {
    @apply bg-orange bg-opacity-75;
    color: #fff;
  }

  .power-up-button.active:hover, .power-up-button.active:focus {
    @apply bg-opacity-100;
  }

  .power-up-button.active img {
    filter: invert(1);
  }
`