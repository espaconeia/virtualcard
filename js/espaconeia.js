$(function() {
  $('.container').each(function() {
    var scaleY = $(this).height() / $('.conteudo', this).height(),
      translateY = (($('.conteudo', this).height() - $(this).height()) / 2) * -1;
    $('.conteudo', this).css({
      '-webkit-transform': 'matrix(1,0,0,' + scaleY + ',0,' + translateY + ')',
      '-moz-transform': 'scaleY(1,0,0,' + scaleY + ',0,' + translateY + ')',
      '-ms-transform': 'scaleY(1,0,0,' + scaleY + ',0,' + translateY + ')',
      '-o-transform': 'scaleY(1,0,0,' + scaleY + ',0,' + translateY + ')',
      'transform': 'scaleY(1,0,0,' + scaleY + ',0,' + translateY + ')'
    });
  });
});