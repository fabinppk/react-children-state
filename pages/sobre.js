import Navbar from "components/Navbar";
import NextSeo from 'next-seo';
import { logPageView, initGA } from 'components/Analytics/index';

export default class Sobre extends React.Component {

  componentDidMount () {
    initGA();
    logPageView();
  }

  render() {
    return (
      <section className="page-section">
        <NextSeo
          config={{
            title: 'Sobre a aplicação',
            description: 'Descrição da aplicação da listagem de desenvolvedores Bonitour'
          }}
        />
        <Navbar />
        <div className="block-page">
          <h1>Sobre a aplicação</h1>
          <p>
            Aplicação com intuito de criar components com children e usar state para modificar o React DOM.
          </p>
          <p>React + Next js + SCSS + React Ga</p>
        </div>
      </section>
    )
  }
}
