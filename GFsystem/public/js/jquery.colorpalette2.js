$('#colorpalette2').colorPalette()
  .on('selectColor', function(e) {
    $('#selected-color2 i').css('color', e.color);
  });
$('#colorpalette3').colorPalette()
  .on('selectColor', function(e) {
    $('#selected-color2 i').css('background-color', e.color);
  });