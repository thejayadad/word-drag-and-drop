


$('.draggable span').draggable({ revert: true });

$('.drop').droppable({
  tolerance: "touch",
  drop: function(event, ui){
    if (($(ui.draggable[0]).hasClass($(this).data('target')))) {
      $(this).html(ui.draggable.html()).css({'border':'none', 'width':'auto', 'padding-top': '0'});
      ui.draggable.parent().remove();
      
      if (($('.draggable span').length) === 0) {
        var welldone = '<p>Well done!</p>'
        $(welldone).hide().appendTo('.contain').fadeIn();
      }
    }
  }
});