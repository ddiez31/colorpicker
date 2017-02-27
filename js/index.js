$(document).ready(function() {
    var color1R, color1G, color1B;
    var color2R, color2G, color2B;
    var bgColor1 = [];
    var bgColor2 = [];


    var valdef = $('.range').val();
    $('.range').next().text(valdef); // Valeur par défaut
    $('.range').on('input', function() {
        var $set = $(this).val();
        $(this).next().text($set);
    });

    $('#r1').change(function() {
        color1R = $(this).val();
        console.log("R1 = " + color1R);
    });

    $('#r2').change(function() {
        color2R = $(this).val();
        console.log("R2 = " + color2R);
    });

    $('#g1').change(function() {
        color1G = $(this).val();
        console.log("G1 = " + color1G);
    });

    $('#g2').change(function() {
        color2G = $(this).val();
        console.log("G2 = " + color2G);
    });

    $('#b1').change(function() {
        color1B = $(this).val();
        console.log("B1 = " + color1B);
    });

    $('#b2').change(function() {
        color2B = $(this).val();
        console.log("B2 = " + color2B);
    });

    $('.range').change(function() {
        bgColor1 = [];
        bgColor2 = [];
        bgColor1.push(color1R, color1G, color1B);
        var result1 = bgColor1.toString();
        bgColor2.push(color2R, color2G, color2B);
        var result2 = bgColor2.toString();
        console.log("RGB1= " + result1);
        console.log("RGB2= " + result2);
        $('#color1').css('background-color', 'rgb(' + result1 + ')');
        $('#color2').css('background-color', 'rgb(' + result2 + ')');
        $('body').css('background-color', 'rgb(' + result1 + ')');
    });



});