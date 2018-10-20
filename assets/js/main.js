(function ($) {
    'use strict';
    $(function () {
        /*====================================
        //     Inpage Smooth Scroll
        ======================================*/
        function ips(hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600);
        }
        $(document).on('click', '.ips', function (event) {
            event.preventDefault();
            ips(this.hash);
        });
        var hash = window.location.hash;
        if (hash) {
            ips(hash);
        }
        /*====================================
        //     Intercom Message
        ======================================*/
        $('.intercom-message').on('click', function () {
            event.preventDefault();
            $crisp.push(['do', 'chat:open']);
        });
    });

}(jQuery))