$(document).ready(function(){

  $("a").eq(0).on('click', function() {
  	$("#about").addClass('gone');
  	$("#contact").addClass('gone');
	$("#home").removeClass('gone');
	$("a").eq(0).addClass('active');
	$("a").eq(1).removeClass('active');
	$("a").eq(2).removeClass('active');
  });

  $("a").eq(1).on('click', function() {
	$("#home").addClass('gone');
	$("#contact").addClass('gone');
	$("#about").removeClass('gone');
	$("#cls").hide().slideDown();
	$("a").eq(0).removeClass('active');
	$("a").eq(2).removeClass('active');
	$("a").eq(1).addClass('active');
  });

  $("a").eq(2).on('click', function() {
  	$("#home").addClass('gone');
	$("#contact").removeClass('gone');
	$("#about").addClass('gone');
	$("#contact-form").hide().slideDown();
	$("a").eq(0).removeClass('active');
	$("a").eq(1).removeClass('active');
	$("a").eq(2).addClass('active');
  });

});
