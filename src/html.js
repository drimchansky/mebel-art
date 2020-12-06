import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html lang="ru" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;800&display=swap"
          rel="stylesheet"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1c5796" />
        <meta name="apple-mobile-web-app-title" content="Мебель Арт" />
        <meta name="application-name" content="Мебель Арт" />
        <meta name="msapplication-TileColor" content="#1c5796" />
        <meta name="theme-color" content="#1c5796" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KGPGF2V');
        `,
          }}
        />
        {/* End Google Tag Manager  */}

        <meta
          name="google-site-verification"
          content="G4uA9d9gfAG6-nqFgZLBj_VXSZb-M7ur2BFS9rKymQc"
        />
        <meta name="yandex-verification" content="7bc37e493d31c119" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGPGF2V"
            height="0"
            width="0"
            style="display:none;visibility:hidden"></iframe>
        </noscript>

        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
