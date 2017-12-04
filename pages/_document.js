import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="dns-prefetch" href=" " />
          <link rel="preconnect" href=" " />

          <title>Aerolab Coding Challenge</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style dangerouslySetInnerHTML={{__html:`* {font-family:'Source Sans Pro',serif;margin:0;padding:0;-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}span,h2,h3{color:${COLOR.darkGreyText}} div{box-sizing:border-box}
            @font-face {
                font-family: 'Source Sans Pro';
                src: url('../../static/fonts/SourceSansPro-Bold.eot');
                src: url('../../static/fonts/SourceSansPro-Bold.eot?#iefix') format('embedded-opentype'),
                    url('../../static/fonts/SourceSansPro-Bold.woff2') format('woff2'),
                    url('../../static/fonts/SourceSansPro-Bold.woff') format('woff'),
                    url('../../static/fonts/SourceSansPro-Bold.ttf') format('truetype');
                font-weight: bold;
                font-style: normal;
            }

            @font-face {
                font-family: 'Source Sans Pro';
                src: url('../../static/fonts/SourceSansPro-Regular.eot');
                src: url('../../static/fonts/SourceSansPro-Regular.eot?#iefix') format('embedded-opentype'),
                    url('../../static/fonts/SourceSansPro-Regular.woff2') format('woff2'),
                    url('../../static/fonts/SourceSansPro-Regular.woff') format('woff'),
                    url('../../static/fonts/SourceSansPro-Regular.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }`}}/>
          {this.props.styleTags}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/images/favicon/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/images/favicon/safari-pinned-tab.svg"
            color="#ff6b00"
          />
          <link rel="shortcut icon" href="/static/images/favicon/favicon.ico" />
          <meta
            name="msapplication-config"
            content="/static/images/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-rim-auto-match" content="none" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#81489c" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta
            name="apple-mobile-web-app-title"
            content="Aerolab Coding Challenge"
          />
          <meta
            name="msapplication-TileImage"
            content="Aerolab Coding Challenge"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="description"
            content="Canjeá tus puntos por productos copados!"
          />
          <meta name="keywords" content="aerolab, challenge" />
          <meta name="author" content="http://micaelrobles.com" />
          <meta property="fb:app_id" content="" />
          <meta property="og:title" content="Aerolab Coding Challenge" />
          <meta property="og:site_name" content="Aerolab Coding Challenge" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Canjeá tus puntos por productos copados!"
          />
          <meta property="og:locale " content="es_LA" />
          <meta property="og:image" content=" " />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content=" " />
          <meta name="twitter:creator" content="http://micaelrobles.com" />
          <meta
            name="msapplication-config"
            content="/static/images/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#81489c" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
