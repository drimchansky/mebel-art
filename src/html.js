import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html lang="ru" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1c5796" />
        <meta name="apple-mobile-web-app-title" content="Мебель Арт" />
        <meta name="application-name" content="Мебель Арт" />
        <meta name="msapplication-TileColor" content="#1c5796" />
        <meta name="theme-color" content="#1c5796" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 300;
              src: url('fonts/roboto-v20-cyrillic-300.woff2') format('woff2'),
                url('fonts/roboto-v20-cyrillic-300.woff') format('woff');
            }
            
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 400;
              src: url('fonts/roboto-v20-cyrillic-regular.woff2') format('woff2'),
                url('fonts/roboto-v20-cyrillic-regular.woff') format('woff');
            }
            
            @font-face {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 700;
              src: url('fonts/roboto-v20-cyrillic-700.woff2') format('woff2'),
                url('fonts/roboto-v20-cyrillic-700.woff') format('woff');
            }
            
        `,
          }}
        />

        <script async src="analytics.js" />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <div><img src="https://mc.yandex.ru/watch/70153816" style="position:absolute; left:-9999px;" alt="" /></div>
        `,
          }}
        />

        <meta
          name="google-site-verification"
          content="ePV4KdCIkkLnbrhaJF-iIZYtfB0tGZqNd2LORSdj68E"
        />
        <meta name="yandex-verification" content="50f048b178fdca09" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
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
