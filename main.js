$(document).ready(function() {

  $('#bioSection').hide();
  $('#emailSection').hide();
  $('#insp').hide();
  $('#mus').hide();
  $('#poet').hide();
  $('#inspir').hide();
  $('#music').hide();
  $('#poetry').hide();


  $('#bio').click(function() {
    $('#emailSection').hide();
    $('#insp').hide();
    $('#mus').hide();
    $('#poet').hide();
    $('#inspir').hide();
    $('#music').hide();
    $('#poetry').hide();
    $('#bioSection').toggle();
    if ($('#bioSection').is(':visible')) {
      $('#home').hide();
    }
    else {
      $('#home').show();
    }
  });

  $('#contact').click(function() {
    $('#bioSection').hide();
    $('#insp').hide();
    $('#mus').hide();
    $('#poet').hide();
    $('#inspir').hide();
    $('#music').hide();
    $('#poetry').hide();
    $('#emailSection').toggle();
    if ($('#emailSection').is(':visible')) {
      $('#home').hide();
    }
    else {
      $('#home').show();
    }
  });

  $('#pic1').hover(
    function() {
      $('#insp').show();
    }, function() {
      $('#insp').hide();
    }
  );


  $('#pic2').hover(
    function() {
      $('#mus').show();
    }, function() {
      $('#mus').hide();
    }
  );

  $('#pic3').hover(
    function() {
      $('#poet').show();
    }, function() {
      $('#poet').hide();
    }
  );

  $('#pic1').click(function() {
    $('#home').hide();
    $('#inspir').show();
  });

  $('#pic2').click(function() {
    $('#home').hide();
    $('#music').show();
  });

  $('#pic3').click(function() {
    $('#home').hide();
    $('#poetry').show();
  });

  $('h1').click(function() {
    $('#bioSection').hide();
    $('#emailSection').hide();
    $('#insp').hide();
    $('#mus').hide();
    $('#poet').hide();
    $('#inspir').hide();
    $('#music').hide();
    $('#poetry').hide();
    $('#home').show();
  });

});
