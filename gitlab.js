

$('.diff-header .diff-btn-group').append('<a class="btn btn-small">toggle</a>').click(function(){
	$(this).closest('.diff-file').find('.diff-content').toggle();
});
