$('#colorpalette1').colorPalette()
  .on('selectColor', function(e) {
    $('#selected-color1').val(e.color);
  });