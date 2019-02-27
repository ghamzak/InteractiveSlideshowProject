$(document).ready(function(){
  $("#myCarousel").carousel();
  $("#myCarousel").carousel("pause");

  // var data = {{ action | safe }}
  // alert(data);
  // Enable Carousel Indicators
  // $(".item1").click(function(){
  //   $("#myCarousel").carousel(0);
  // });
  // $(".item2").click(function(){
  //   $("#myCarousel").carousel(1);
  // });
  // $(".item3").click(function(){
  //   $("#myCarousel").carousel(2);
  // });

  // if ({{ action }} == 'right') {
  //   $("#myCarousel").carousel("next");}



  //
  // $("#myCarousel").carousel();
  //
  // // Enable Carousel Indicators
  // $(".item1").click(function(){
  //   $("#myCarousel").carousel(0);
  // });
  // $(".item2").click(function(){
  //   $("#myCarousel").carousel(1);
  // });
  // $(".item3").click(function(){
  //   $("#myCarousel").carousel(2);
  // });
  //
  // // Enable Speech Control
  // $("#speechButton").click(function(){
  //   if ({{ action }} == 'right') {
  //     $("#myCarousel").carousel("next");}
  //
  //   if ({{ action }} == 'left') {
  //     $("#myCarousel").carousel("prev");}
  //
  //   if ({{ action }} == 'Unrecognized') {
  //     $("#myCarousel").carousel(0);}
  // });
  // $("#action").change(function(){
  //   alert("The text has been changed.");
  // });
});

// document.getElementsByID("speechButton").addEventListener(function(){
//   if ($('#action').text() == 'right') {
//     console.log("Here!");
//     $("#myCarousel").carousel("next");}
//   if ($('#action').text() == 'left') {
//     $("#myCarousel").carousel("next");}
//     $("#myCarousel").carousel("prev");}
// });

/* $('#speechButton').click(function(){
  alert($('#action').text())
  if ($('#action').text() == 'right') {
    alert("Here!");
    $("#myCarousel").carousel("next");}
  if ($('#action').text() == 'left') {
    alert("Here!");
    $("#myCarousel").carousel("prev");}
}); */
