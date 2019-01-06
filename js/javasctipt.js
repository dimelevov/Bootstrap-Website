$(document).ready(function() {
    jQuery('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Морате да го внесете го вашето име'
                    }
                }
            },
            last_name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Морате да го внесете го вашето презиме'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Морате да ja внесете e-маил адреса'
                    },
                    emailAddress: {
                        message: 'Морате да внесете валидна е-маил адреса'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Морате да го внесете вашиот телефон'
                    }
                }
            },
            address: {
                validators: {
                    stringLength: {
                        min: 8
                    },
                    notEmpty: {
                        message: 'Морате да ја внесете вашата адреса'
                    }
                }
            },
            city: {
                validators: {
                    stringLength: {
                        min: 4
                    },
                    notEmpty: {
                        message: 'Морате да го внесете вашиот град'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Морате да го внесете вашиот zip код'
                    }
                }
            },
            comment: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message:'Ве молиме внесете не помалку од 10 карактери, но и не повеќе од 200'
                    },
                    notEmpty: {
                        message: 'Ве молиме внесете опис за вашиот проект'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});


/*******************************
 ACCORDION WITH TOGGLE ICONS
 *******************************/
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

/*******************************
            SLIDER
 *******************************/

$(document).ready(function(){
    var percent = 0,
        interval = 30,//it takes about 6s, interval=20 takes about 4s
        $bar = $('.transition-timer-carousel-progress-bar'),
        $crsl = $('#myCarousel');
    $('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});
    /*line above just for showing when controls are clicked the bar goes to 0.5% to make more friendly,
     if you want when clicked set bar empty, change on width:0.5 to width:0*/
    $crsl.carousel({//initialize
        interval: false,
        pause: true
    }).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
    function progressBarCarousel() {
        $bar.css({width:percent+'%'});
        percent = percent +0.5;
        if (percent>=100) {
            percent=0;
            $crsl.carousel('next');
        }
    }
    var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
    if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
        $crsl.hover(function(){
                clearInterval(barInterval);
            },
            function(){
                barInterval = setInterval(progressBarCarousel, interval);
            }
        );
    }
});


/*******************************
 Function for buy and select paket
 *******************************/
function prodolziKupi(paket) {
    var found = false;
    $('#paket option').each(function(){
       if (paket == this.value){
           found = true;
       }
    });

    if (found) {
        $('#paket').val(paket);

        $('.selectpicker').selectpicker('refresh')
        location.href="#row4";
    }
}
