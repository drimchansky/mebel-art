setTimeout(() => {
  (function () {
    var head_ID = document.getElementsByTagName('head')[0]
    var script_element = document.createElement('script')
    script_element.type = 'text/javascript'
    script_element.setAttribute('async', '')
    script_element.src = 'https://www.googletagmanager.com/gtag/js?id=G-LM2WV44H9X'
    head_ID.appendChild(script_element)
  })();

  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(70153816, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true
  });

  (function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-LM2WV44H9X');
  })();
}, 3000)
