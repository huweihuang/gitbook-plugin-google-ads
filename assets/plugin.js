require(['gitbook'], function(gitbook) {
    gitbook.events.bind("start", function(e, pluginConfig) {
        config = pluginConfig['google-adsense'].ads;
        firstConfig = config[0]
        firstClient = firstConfig.client

        // init script
        var adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.setAttribute('async', true);
        adScript.setAttribute('data-ad-client', firstClient);
        console.log("adScript=%o", adScript);
        document.head.appendChild(adScript);
    });
});
