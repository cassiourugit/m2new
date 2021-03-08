$(window).on("load", function() {
    //Quitar el tamaño a todas las imágenes para hacerlas fluidas...
    $('#content img').each(function(){
        $(this).removeAttr('width');
        $(this).removeAttr('height');
    }).not('.noZoom') //...y se quitan las que se hayan marcado explícitamente como que no deben llevar zoom con esta clase
    .pan()  //Añadir el zoom & pan a cada imagen...
    .each(function() {  //...y cambiar su tooltip a las que se le añada el zoom
        $this = $(this);
        var title = $this.attr('title') || $this.attr('alt') || '';
        if (title == '')
        title = 'PULSA para aumentar';
        else
        title += ' - PULSA para aumentar';

        $this.attr('title', title);
    });

    //Añadir tooltips para imágenes
    $('#content img').addTooltip();
});