// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
    
      // Show the first tab and hide the rest
$('#tabs-nav2 li:first-child').addClass('active');
$('.tab-content2').hide();
$('.tab-content2:first').show();

// Click function
$('#tabs-nav2 li').click(function(){
  $('#tabs-nav2 li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content2').hide();
  
  var activeTab2 = $(this).find('a').attr('href');
  $(activeTab2).fadeIn();
  return false;
});

	