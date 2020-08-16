import type { AppProps } from 'next/app'
import Nav from '../components/Nav';
import '../styles/main.css'
import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default App
  