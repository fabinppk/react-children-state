import Head from "next/head";
import Link from "next/link";
import "isomorphic-fetch";
import Navbar from "components/Navbar";
import Card from "components/Card";
import "assets/scss/style.scss";
import NextSeo from 'next-seo';
import { logPageView, initGA } from 'components/Analytics/index';

export default class Index extends React.Component {

  componentDidMount () {
    initGA();
    logPageView();
  }

  render () {
    return (
      <section className="page-section">
        <NextSeo
          config={{
            title: 'Produtos disponíveis',
            description: 'Lista de produtos disponíveis para venda.'
          }}
        />
        <Navbar />
        <div className="block-cards">
          <Card
            image="https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg"
            item_name="Cadeira 1"
            preco="R$ 30,00"
          />

          <Card
            image="https://bimbon-assets.s3.amazonaws.com/ckeditor/picture/data/53fcf699f36933130500257f/content_poltrona_barcelona_preta_1.jpg"
            item_name="Cadeira 2"
            preco="R$ 50,00"
          />
        </div>

      </section>
    )
  }
}
