$(document).ready(function() {

  dateChoose.init();

});

var dateChoose = {
  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    

  },
  initEvents: function() {

    this.getRest();


  },
  render: function($el, template, data) {
      var tmpl = _.template(template, data);

      $el.html(tmpl);

  },

  getRest: function(){

      console.log("ya");


     $(".zipsub").click(function(e) {
      e.preventDefault();
      console.log("im working");

      // var myZip = $(".rzip").val();

      // console.log(myZip);
 

  

      

      $.ajax({
      url: "https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&sensor=true&key=AIzaSyCNJ06Z4hQ7_ORxRrtV7nTapM3FcddmrYE",
      type: "GET",
      dataType: "jsonp",
      error: function (jqXHR, status, error){
        alert ("GET Failed");
      },
      success: function(data){
     
        alert ("YOU WIN THE INTERNET");


      } //end success
      });

      })


  },

  getAct: function(){

      $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/devon/" + todayid,
      type: "GET",
      error: function (data){
        //alert ("DELETE Failed");
      },
      success: function(data){
        //alert ("Delete good!");

      }
    });

    }
  

  
 


};



