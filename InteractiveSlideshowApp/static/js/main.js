$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });

  $("#speechButton").click(function(){
    $.ajax({
      type: "GET",
      url: "speech",
      success: function(result){
        // alert($("#action").text());
        //$("#action").html(result);
        // alert(typeof result);
        if (result == '"right"'){
          $("#myCarousel").carousel("next");
        }
        else if (result == '"left"'){
          $("#myCarousel").carousel("prev");
        }
        else {
          alert("Unrecognized Command");
        }
      }
    });
  });

});
