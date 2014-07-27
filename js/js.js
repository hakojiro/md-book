$(function(){
	function addIndex(h,s){
		$('.page-index>ol').append('<li class="page-index-h'+h+'"><a>'+$(s).text()+'</a></li>');
		delete h,s;
	}
	var h1 = h2 = h3 = h4 = h5 = h6 = 0;
	var h = $('h1,h2,h3,h4,h5,h6,H1,H2,H3,H4,H5,H6');
	$('.page-index').append('<ol class="nav nav-sidebar"></ol>');
	h.each(function(n){
		var t = this.tagName;
		switch(t){
			case 'H1':
			h1++;
			addIndex(1,this);
			h2=h3=h4=h5=h6=0;
			break;
			case 'H2':
			h2++;
			addIndex(2,this);
			h3=h4=h5=h6=0;
			break;
			case 'H3':
			h3++;
			addIndex(3,this);
			h4=h5=h6=0;
			break;
			case 'H4':
			h4++;
			addIndex(4,this);
			h5=h6=0;
			break;
			case 'H5':
			h5++;
			addIndex(5,this);
			h6=0;
			break;
			case 'H6':
			h6++;
			addIndex(6,this);
			break;
		}
		delete t,n;
	});
	delete h,h1,h2,h3,h4,h5,h6;
	$('.page-index li').click(function(){
		var i = $(this).index();
		var t = $('h1,h2,h3,h4,h5,h6,H1,H2,H3,H4,H5,H6').eq(i).offset().top;
		$('body').animate({
			scrollTop:t
		},150);
		delete t,i;
	});
});

$(function(){


	function footerFit(){

		var h = $(window).height();
		h = h-48-32;
		$('#contents').css('min-height',h);

	}

	function articleFit(){

		var w = $(window).width();
		w = w-301-32-32;
		$('#article').css('width',w);

	}

	$(window).resize(function(){
		footerFit();
		articleFit();
	});
	footerFit();
	articleFit();

});
