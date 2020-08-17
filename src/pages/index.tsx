import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Coin, Area } from '../types/Calculator';
import Nav from '../components/Nav';
import { baseStyles } from '../components/Home/Home-styles';
import Container from '../components/Container';
import EnhancersBox from '../components/EnhancersBox';
import Footer from '../components/Footer';

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { coins, areas, error } = props;
  return (
    <div className="home-page">
      <Nav />
      <img src="/background.svg" className="background" />
      <Head>
        <title>Tigrenator Beta</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="application-name" content="Tigrenator Beta" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="Tigrenator es una calculadora de tarifas de Diseño y servicios creativos freelance, que permite en menos de un minuto a los creativos obtener un precio referencial al momento de realizar una cotización. El objetivo principal de esta aplicación es ofrecer a los creativos independientes una herramienta gratuita que les permita mantenerse informados sobre el precio en el mercado de su trabajo. Si bien no existe obligación alguna de utilizar estas tarifas, consultarlas puede ayudar a tener un punto de partida; sobre todo para los que recién están comenzando."
        />
        <meta
          name="keywords"
          content="freelance,tigrenator,calculadora,tarifas,tarifario,america,cobros,remoto"
        />
        <meta property="og:title" content="Tigrenator Beta" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/13606896_601162980057042_3393722265584434742_n.png?_nc_cat=0&oh=bd020bf857c99f8d5f8c6a7b4a0cfabb&oe=5BB0055D"
        />
        <meta property="og:url" content="https://tigrenator.com" />
        <meta
          property="og:description"
          content="Tigrenator es una calculadora de tarifas de Diseño y servicios creativos freelance, que permite en menos de un minuto a los creativos obtener un precio referencial al momento de realizar una cotización. El objetivo principal de esta aplicación es ofrecer a los creativos independientes una herramienta gratuita que les permita mantenerse informados sobre el precio en el mercado de su trabajo. Si bien no existe obligación alguna de utilizar estas tarifas, consultarlas puede ayudar a tener un punto de partida; sobre todo para los que recién están comenzando."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Tigrenator | Calculadora" />
        <meta
          name="twitter:description"
          content="Tigrenator es una calculadora de tarifas de Diseño y servicios creativos freelance, que permite en menos de un minuto a los creativos obtener un precio referencial al momento de realizar una cotización. El objetivo principal de esta aplicación es ofrecer a los creativos independientes una herramienta gratuita que les permita mantenerse informados sobre el precio en el mercado de su trabajo. Si bien no existe obligación alguna de utilizar estas tarifas, consultarlas puede ayudar a tener un punto de partida; sobre todo para los que recién están comenzando."
        />
        <meta
          name="twitter:image"
          content="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/13606896_601162980057042_3393722265584434742_n.png?_nc_cat=0&oh=bd020bf857c99f8d5f8c6a7b4a0cfabb&oe=5BB0055D"
        />
      </Head>

      <main className="main-container"> 
        <Container>
          <EnhancersBox />
        </Container>
      </main>
      <Footer />
      <style jsx>{baseStyles}</style>
    </div>
  )
}


export async function getStaticProps() {
  try {
    const areasRequest = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/area`);
    const areas: Area[] = await areasRequest.json();

    const coinsRequest = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/coin`);
    const coins: Coin[] = await coinsRequest.json()

    console.log(coins)
    return {
      props: { areas, coins },
      revalidate: 21600,
    }
  } catch(error) {
    console.log(error)
    // Render error page.
    return {
      props: { areas: [], coins: [], error, },
      revalidate: 60,
    }
  }
}

export default Home;
