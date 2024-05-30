(function () {
    if (1) {
        var clipboard = new ClipboardJS('.btn_inn--donat-ua_clipboard-data>div', {
            target: function (trigger) {

                /*console.log('Trigger:', { 'btn-content': trigger.querySelector('span [btn-content]') })*/
                return trigger.querySelector('span [btn-content]')
            }
        })
        clipboard.on('success', function (e) {
                /*console.info('Action:', e.action)
                console.info('Text:', e.text)
                console.info('Trigger:', e.trigger)*/
                const el = e.trigger.closest(' .btn_inn--donat-ua_clipboard-data')
            const message = el.dataset.message
            /*console.info({ message })*/
            const instance = basicLightbox.create(`

        <div style="
                display: inline-flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            ">
            <h1 style="text-shadow: 0 0 .1px #ef8e19, 0 0 .2px #ef8e19, 0 0 .3px #ef8e19, 0 0 .4px #ef8e19, 0 0 .5px #ef8e19, 0 0 .6px #fff, 0 0 .7px #fff, 0 0 .8px #fff, 0 0 .9px #ef8e19, 0 0 1.0px #fff, 0 0 1.1px #fff, 0 0 1.2px #fff, 0 0 1.3px #fff, 0 0 1.4px #fff;color: #ef8e19;">
                ${message}
            </h1>
            <div>
                    <h3 style="color: #ef8e19;">${e.text}</h3>
            </div>
        </div>
`)


            instance.show(() => {
                el.style.setProperty('display', 'none')
                e.trigger.parentElement.parentElement.querySelector('.btn_inn--donat-ua').style.setProperty('display', null)
            })

            e.clearSelection()
        })

        clipboard.on('error', function (e) {
            /*console.error('Action:', e.action)
            console.error('Trigger:', e.trigger)*/
        })
    }

    Array.prototype.slice.call(document.querySelectorAll('.btn_inn--donat-ua')).forEach(_el => {

        _el.addEventListener('click', function (evt) {
            evt.preventDefault()
            evt.target.style.setProperty('display', 'none')

            evt.target.closest('div').parentElement.querySelector('.btn_inn--donat-ua_clipboard-data').style.setProperty('display', null)

        }, false)

        if (!["home", "pray"].includes(_el.getAttribute('title'))) {
            // _el.setAttribute('target', '_blank')
        }

    })
})()
