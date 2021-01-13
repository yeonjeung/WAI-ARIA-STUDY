$(document).ready(function() {
  $('[role="tab"]').keyup(function(e) {
    var keyCode = e.keyCode || e.which;
    if(keyCode == 39 || keyCode == 40) {
      e.preventDefault();
      $(this).next().attr('aria-selected', true).siblings().attr('aria-selected', false);
      var selectedID = "#"+$(this).next().attr('aria-controls');
      $(selectedID).removeClass('unvisual').siblings().addClass('unvisual');
      $(this).next().focus();

      if($(this).next().prevObject.attr('aria-controls') == 'section3') {
        $('#tab1').attr('aria-selected', true).siblings().attr('aria-selected', false);
        $('#section1').removeClass('unvisual').siblings().addClass('unvisual');
        $('#tab1').focus();
      }
    }
    
    if(keyCode == 37 || keyCode == 38) {
      e.preventDefault();
      $(this).prev().attr('aria-selected, ture').siblings().attr('aria-selected', false);
      var selectedID = "#"+$(this).prev().attr('aria-controls');
      $(selectiedID).removeClass('unvisual').siblings().addClass('unvisual');
      $(this).prev().focus();
      
      if($(this).prev().prevObject.attr('aria-controls') == 'section1') {
        $('#tab3').attr('aria-selected', true).siblings().attr('aria-selected', false);
        $('#section3').removeClass('unvisual').siblings().addClass('unvisual');
        $('#tab3').focus();
      }
    }
  });

    $('[role="tab"]').on('click', function(e) {
      e.preventDefault();
      $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
      var selectedID = "#"+$(this).attr('aria-controls');
      $(selectedID).removeClass('unvisual').siblings().addClass('unvisual');
  });
});