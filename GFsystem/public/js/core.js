// Author: Vijay Kumar
// Template: Cascade - Flat & Responsive Bootstrap Admin Template
// Version: 1.0
// Bootstrap version: 3.0.0
// Copyright 2013 bootstrapguru
// www: http://bootstrapguru.com
// mail: support@bootstrapguru.com
// You can find our other themes on: https://bootstrapguru.com/themes/



// jQuery $('document').ready(); function 
$('document').ready(function(){

	$(document).skylo('start');

	//$('.nav-input-search').focus();

  	// Sidebar dropdown 转移到side.html
	//$('ul.nav-list').accordion();
 	
	//$('.settings-toggle').on('click',function(e){
	//	e.preventDefault();
	//	$('.right-sidebar').toggleClass('right-sidebar-hidden');
	//});
    //
	//$('.left-sidebar .nav > li > ul > li.active').parent().css('display','block');
	//
	//$('.left-sidebar .nav > li a span').hover(function(){
	//	var icon=$(this).parent().find('i');
	//	icon.removeClass('animated shake').addClass('animated shake');
	//	var wait = window.setTimeout( function(){
	//		icon.removeClass('animated shake');
	//
	//	},
	//		1300
	//	);
	//});

	//$(".scroll").css({'overflow':'hidden'}).niceScroll({cursorcolor:"#54728c"});  // The document page (html)

	//转移到headre.html
	//$('.btn-nav-toggle-responsive').on('click',function(){
	//	$('.left-sidebar').toggleClass('show-fullsidebar');
	//});

	//转移到side.html
	//$('li.nav-toggle > button').on('click',function(e){
	//	e.preventDefault();
	//	$('.hidden-minibar').toggleClass("hide");
	//	$('.site-holder').toggleClass("mini-sidebar");
	//	if($('.toggle-left').hasClass('fa-angle-double-left')){ $('.toggle-left').removeClass('fa-angle-double-left').addClass('fa-angle-double-right'); }
	//	else { $('.toggle-left').removeClass('fa-angle-double-right').addClass('fa-angle-double-left'); }
	//
    //
	//	if($('.site-holder').hasClass('mini-sidebar'))
	//	{
	//		$('.sidebar-holder').tooltip({
	//	      selector: "a",
	//	      container: "body",
	//	      placement: "right"
	//	    });
	//	    $('li.submenu ul').tooltip('destroy');
	//	 }
	//	 else
	//	 {
	//		$('.sidebar-holder').tooltip('destroy');
	//	 }
	//
    //
	//});

	//	if($('.site-holder').hasClass('mini-sidebar'))
	//	{
	//		$('.sidebar-holder').tooltip({
	//	      selector: "a",
	//	      container: "body",
	//	      placement: "right"
	//	    });
	//	    $('li.submenu').tooltip('destroy');
	//	 }
	//	 else
	//	 {
	//		$('.sidebar-holder').tooltip('destroy');
	//	 }
    //
	//$('.show-info').on('click',function(){
	//	$('.page-information').toggleClass('hidden');
	//});


	// PANELS

	// panel close
	//$('.panel-close').on('click',function(e){
	//	e.preventDefault();
	//	$(this).parent().parent().parent().parent().fadeOut();
	//});
    //
	//$('.panel-minimize').on('click',function(e){
	//	e.preventDefault();
	//	var $target = $(this).parent().parent().parent().next('.panel-body');
	//	if($target.is(':visible')) { $('i',$(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down'); }
	//	else { $('i',$(this)).removeClass('fa-chevron-down').addClass('fa-chevron-up'); }
	//	$target.slideToggle();
	//});
	//$('.panel-settings').on('click',function(e){
	//	e.preventDefault();
	//	$('#myModal').modal('show');
	//});
    //
	//$('.fa-hover').on('click',function(e){
	//	e.preventDefault();
	//	var valued= $(this).find('i').attr('class');
	//	$('.modal-title').html(valued);
	//	$('.icon-show').html('<i class="' + valued + ' fa-5x "></i>&nbsp;&nbsp;<i class="' + valued + ' fa-4x "></i>&nbsp;&nbsp;<i class="' + valued + ' fa-3x "></i>&nbsp;&nbsp;<i class="' + valued + ' fa-2x "></i>&nbsp;&nbsp;<i class="' + valued + ' "></i>&nbsp;&nbsp;');
	//	$('.modal-footer span.icon-code').html('"' + valued + '"');
	//	$('#myModal').modal('show');
	//});


	//Todo List
	//$('.finish').on('click',function(){
	//	$(this).parent().toggleClass('finished');
	//	$(this).toggleClass('fa-square-o');
	//});
    //
	////Button Print
	//$('.btn-print').on('click',function(){
	// 	window.print();
	//});
	//
	////Faq Toggle
	//$('.faq-list li').on('click',function(){
	//	$(this).find('i.fa-plus-square').toggleClass('fa-minus-square');
	//});


	
	$(document).skylo('end');

});


//Todo Table
//	$('.todo-table i.finish-task').on('on',function(){
//		$(this).toggleClass('fa-square-o');
//		$(this).parent().parent().toggleClass('finish');
//	});
//
//	$('.todo-table .header-row i.finish-task').on('click',function(){
//		$(this).parent().parent().parent().find('tr').toggleClass('finish');
//		$(this).parent().parent().parent().find('tr td i.finish-task').toggleClass('fa-square-o');
//	});
//
//	$('.todo-table .btn-delete').on('click',function(){
//		confirm('Are you sure to delete this item?');
//		$(this).parent().parent().fadeOut();
//	});
  
//List Group 
//    $(function() {
//			$('.sortable').sortable();
//	});
//
//	$('.demo-list-group a').on('click',function(){
//		$('.demo-list-group a').removeClass('active');
//		$(this).addClass('active');
//
//	});


	//Calendar on right sidebar @bic calendar
	//mesos = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //
	//dias = [ "M", "T", "W", "Th", "F","S","Su"];
    //
    //$('#bic_calendar_right').bic_calendar({
     //   nombresMes: mesos,
     //   dias: dias,
     //   req_ajax: {
     //   	type: 'get',
     //   	url: 'index.html'
     //   }
    //});

		

//left side bar search box
//function displayResult(item, val, text) {
//    //alert(val);
//    //$('.alert').show().html('You selected <strong>' + val + '</strong>: <strong>' + text + '</strong>');
//    window.location.replace(val);
//}

/*
$('.nav-input-search').typeahead({
  	 source: [
		    { id: 'index.html', name: 'Dashboard' },
		    { id: 'widgets.html', name: 'Widgets' },
		    { id: 'chat.html', name: 'Chat' },
		    { id: 'gallery.html', name: 'Gallery' },
		    { id: 'calendar.html', name: 'Calendar' },
		    { id: 'grids.html', name: 'Grids' },
		    { id: 'coming-soon.html', name: 'Coming Soon' },
		    { id: 'login.html#register', name: 'Signin' },
		    { id: 'login.html', name: 'Login' },
		    { id: 'faq.html', name: 'Faq' },
		    { id: 'template.html', name: 'Template Page' },
		    { id: 'template.html', name: 'Basic Template' },
		    { id: '404.html', name: '404' },
		    { id: '402.html', name: '402' },
		    { id: '505.html', name: '505' },
		    { id: 'helpers.html', name: 'Helpers' },
		    { id: 'top-navbar.html', name: 'Top Navbar' },
		    { id: 'profile.html', name: 'Profile Activity' },
		    { id: 'profile-two.html', name: 'Profile Posts' },
		    { id: 'top-navbar.html', name: 'Top Menu' },
		    { id: 'images.html', name: 'Images' },
		    { id: 'inbox.html', name: 'Inbox' },
		    { id: 'invoice.html', name: 'Invoice' },
		    { id: 'pricing-table.html', name: 'Pricing Table' },
		    { id: 'typography.html', name: 'Typography' },
		    { id: 'support.html', name: 'Support' },
		    { id: 'alerts.html', name: 'Alerts' },
		    { id: 'animations.html', name: 'Animations' },
		    { id: 'breadcrumbs-jumbotron.html', name: 'Breadcrumbs Jumbotron' },
		    { id: 'breadcrumbs-jumbotron.html', name: 'Breadcrumbs' },
		    { id: 'breadcrumbs-jumbotron.html', name: 'Jumbotron' },
		    { id: 'buttons.html', name: 'Buttons' },
		    { id: 'carousel.html', name: 'Carousel' },
		    { id: 'notifications.html', name: 'Notifications' },
		    { id: 'knobs.html', name: 'Knobs' },
		    { id: 'labels-badges.html', name: 'Labels Badges' },
		    { id: 'labels-badges.html', name: 'Labels' },
		    { id: 'labels-badges.html', name: 'Badges' },
		    { id: 'list-groups.html', name: 'List Groups' },
		    { id: 'pagination.html', name: 'Pagination' },
		    { id: 'panels.html', name: 'Panels' },
		    { id: 'progress-bars.html', name: 'Progress Bars' },
		    { id: 'scrollspy.html', name: 'Scrollspy' },
		    { id: 'sliders.html', name: 'Sliders' },
		    { id: 'tabs-accordians.html', name: 'Tabs-accordians' },
		    { id: 'tabs-accordians.html', name: 'Tabs' },
		    { id: 'tabs-accordians.html', name: 'Accordians' },
		    { id: 'info-boxes.html', name: 'Info boxes' },
		    { id: 'tooltips-popovers.html', name: 'Tooltips-popovers' },
		    { id: 'tooltips-popovers.html', name: 'Tooltips' },
		    { id: 'tooltips-popovers.html', name: 'Popovers' },
		    { id: 'wells.html', name: 'Wells' },
		    { id: 'basic-tables.html', name: 'Basic tables' },
		    { id: 'editable-tables.html', name: 'Editable tables' },
		    { id: 'dynamic-tables.html', name: 'Dynamic tables' },
		    { id: 'dropzone-file-upload.html', name: 'Dropzone file upload' },
		    { id: 'multiple-file-upload.html', name: 'Multiple file upload' },
		    { id: 'form-input-masks.html', name: 'Form input masks' },
		    { id: 'form-input-masks.html', name: 'Input-masks' },
		    { id: 'form-validation.html', name: 'Form validation' },
		    { id: 'form-validation.html', name: 'Validation' },
		    { id: 'form-wizard.html', name: 'Form wizard' },
		    { id: 'input-groups.html', name: 'Input groups' },
		    { id: 'pickers.html', name: 'Pickers' },
		    { id: 'inbox.html', name: 'Mail' },
		    { id: 'pickers.html', name: 'Color picker' },
		    { id: 'pickers.html', name: 'Date picker' },
		    { id: 'layouts-elements.html', name: 'Layouts elements' },
		    { id: 'layouts-elements.html', name: 'Form elements' },
		    { id: 'layouts-elements.html', name: 'Form layouts' },
		    { id: 'wysiwyg-markdown.html', name: 'Wysiwyg-markdown' },
		    { id: 'wysiwyg-markdown.html', name: 'Markdown Editor' },
		    { id: 'wysiwyg-markdown.html', name: 'Wysiwyg Editor' },
		    { id: 'wysiwyg-markdown.html', name: 'Form editor' },
		    { id: 'basic-charts.html', name: 'Basic charts' },
		    { id: 'live-charts.html', name: 'Live charts' },
		    { id: 'morris.html', name: 'Morris charts' },
		    { id: 'pie-charts.html', name: 'Pie-charts' },
		    { id: 'sparklines.html', name: 'Sparklines' },
		    { id: 'nvd3.html', name: 'Nvd3' },
		    { id: 'google-maps.html', name: 'Google maps' },
		    { id: 'google-maps.html', name: 'Maps' },
		    { id: 'vector-maps.html', name: 'Vector maps' },
		    { id: 'icons.html', name: 'Icons' },

	    ],
        itemSelected: displayResult
});

*/