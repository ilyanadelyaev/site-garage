$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "/mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .append("<strong>Ваша заявка принята. Спасибо!</strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    // clear
                    $('#contactForm').trigger("reset");
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    //$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //    .append("</button>");
                    $('#success > .alert-danger').append("<strong>Простите, " + firstName + ", похоже, что у нас проблемы с сайтом.<br>Чтобы записаться, пожалуйста, позвоните по телефону: 8 (812) 600-40-33.<br>Спасибо!");
                    $('#success > .alert-danger').append('</div>');
                    // hide
                    $('#send-button').hide();
                    $('#send-star-label').hide();
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
