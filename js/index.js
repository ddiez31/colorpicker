$(document).ready(function() {
    var R, G, B, bgColor;

    $(function() {
        var valdef = $('.range').val();
        $('.range').next().text(valdef); // Valeur par défaut
        $('.range').on('input', function() {
            var $set = $(this).val();
            $(this).next().text($set);

        });
    });

    $('#r').change(function() {
        R = $(this).val();
        console.log("R = " + R);
    });
    $('#g').change(function() {
        G = $('#g').val();
        console.log("G = " + G);
    });
    $('#b').change(function() {
        B = $('#b').val();
        console.log("B = " + B);
    });

    $('.range').change('input', function() {
        bgColor = Number(R + B + G);
        console.log(bgColor);
    });

});