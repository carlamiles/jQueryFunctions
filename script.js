$(document).ready(function() {
    console.log('ready!');

    $('#click').click(function() {
        alert('You clicked my button!');
    })

    $('#hide').click(function() {
        $('#hideP').hide();
    })

    $('#showP').hide();

    $('#show').click(function() {
        $('#showP').show();
    })

    $('#toggle').click(function() {
        $('#toggleP').toggle();
    })

    $('#slideDown').click(function() {
        $('#slideDownP').slideDown('slow', function() {
            alert('The slide down has occurred.')
        });
    })

    $('#slideUp').click(function() {
        $('#slideUpP').slideUp('slow', function() {
            alert('The slide up has occurred.')
        });
    })

    $('#slideToggle').click(function() {
        $('#slideToggleP').slideToggle('slow');
    })

    $('#fadeInP').hide();

    $('#fadeIn').click(function() {
        $('#fadeInP').fadeIn('slow');
    })

    $('#fadeOut').click(function() {
        $('#fadeOutP').fadeOut('fast');
    })

    $('#addClass').hover(function() {
        $('#addClassP').addClass('green');
    })

    $('#before').click(function() {
        $('#beforeP').before('<h3>Subtitle</h3>');
    })

    $('#after').click(function() {
        $('#afterP').after("<img src='https://cdn6.aptoide.com/imgs/2/4/a/24ac0b8816070907421beb13f900b152_icon.png?w=256'>");
    })

    $('#append').click(function() {
        $('#appendP').append("<p>I\'m the add-on paragraph. Go figure.</p>");
    })

    $('#html').click(function() {
        $('#htmlP').html("<p>I\'m the new HTML paragraph. Hey there.</p>");
    })

    $('#attr').click(function() {
        $('#attrImg').attr("alt", "Image of the Gap Band");
        alert('Inspect the picture element to see it\s alt value.');
    })

    $('#val').click(function() {
        var value = $('input').val();
        alert('The value of the input tag is ' + value);
    })

    $('#text').click(function() {
        $('#textP').text("Hey there");
    })
})