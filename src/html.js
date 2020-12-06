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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LM2WV44H9X" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-LM2WV44H9X');
        `,
          }}
        />
        {/* Yandex Metrica*/}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <script type="text/javascript" >
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(70153816, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
         </script>
         <noscript><div><img src="https://mc.yandex.ru/watch/70153816" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        `,
          }}
        />
        {/* Yandex Metrica  */}

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
