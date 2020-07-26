$(document).ready(function(){

  $('.burger').click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass('is-opened')){
      this.addClass('is-closed').removedClass('is-opened');
    }else{
      $this.removeClass('is-closed').addClass('is-opened');
    }
  })

});
