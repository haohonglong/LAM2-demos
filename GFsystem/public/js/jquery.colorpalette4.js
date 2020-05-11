var options = {
  colors:[['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#EFF7F7', '#FFFFFF']]
}
$('#colorpalette4').colorPalette(options)
  .on('selectColor', function(e) {
    $('#selected-color3').val(e.color);
  });