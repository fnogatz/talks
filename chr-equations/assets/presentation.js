(function($){
  $.fn.extend({ 
    onShow: function(callback, unbind){
      return this.each(function(){
        var obj = this;
        var bindopt = (unbind==undefined)?true:unbind; 
        if($.isFunction(callback)){
          if($(this).is('.to-build')){
            var checkVis = function(){
              if($(obj).is(':not(.to-build)')){
                callback.call();
                if(bindopt){
                  $('body').unbind('click keyup keydown', checkVis);
                }
              }                         
            }
            $('body').bind('click keyup keydown', checkVis);
          }
          else{
            callback.call();
          }
        }
      });
    }
  });
})(jQuery);


$(document).ready(function() {
	$('#equation_examples1').onShow(function() {
		$('#equation_examples1').parent().parent().find('q').addClass('inbg');
	});

	$('#equation_representations').onShow(function() {
		$('#equation_examples2').addClass('inbg');
	});
});
