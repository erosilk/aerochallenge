import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return {...page, styleTags}
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="dns-prefetch" href=" "/>
                <link rel="preconnect" href=" "/>

                <title>Aerolab Coding Challenge</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {this.props.styleTags}

                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />

                <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/static/images/favicon/manifest.json"/>
                <link rel="mask-icon" href="/static/images/favicon/safari-pinned-tab.svg" color="#ff6b00"/>
                <link rel="shortcut icon" href="/static/images/favicon/favicon.ico"/>
                <meta name="msapplication-config" content="/static/images/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>

                <meta name="format-detection" content="telephone=no"/>
                <meta httpEquiv="x-rim-auto-match" content="none"/>

                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="theme-color" content="#81489c"/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="apple-mobile-web-app-title" content="Aerolab Coding Challenge"/>
                <meta name="msapplication-TileImage" content="Aerolab Coding Challenge"/>
                <meta name="msapplication-TileColor" content="#000000"/>
                <meta name="description" content="Canjeá tus puntos por productos copados!"/>
                <meta name="keywords" content="aerolab, challenge"/>
                <meta name="author" content="http://micaelrobles.com"/>
                <meta property="fb:app_id" content=""/>
                <meta property="og:title" content="Aerolab Coding Challenge"/>
                <meta property="og:site_name" content="Aerolab Coding Challenge"/>
                <meta property="og:url" content=""/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Canjeá tus puntos por productos copados!"/>
                <meta property="og:locale " content="es_LA"/>
                <meta property="og:image" content=" "/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content=" "/>
                <meta name="twitter:creator" content="http://micaelrobles.com"/>
                <meta name="msapplication-config" content="/static/images/icons/browserconfig.xml"/>
                <meta name="theme-color" content="#81489c"/>
            </Head>

            <body>
            <Main/>
            <NextScript/>
            </body>

            </html>
    )
    }
    }