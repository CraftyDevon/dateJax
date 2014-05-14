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
    this.getAct();


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

       var myZip = $(".rzip").val();

       console.log(myZip);
 

  

      

      $.ajax({
     // url: "https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&sensor=false&key=AIzaSyCNJ06Z4hQ7_ORxRrtV7nTapM3FcddmrYE",
      url: "http://pubapi.atti.com/search-api/search/devapi/search?searchloc=" + myZip + "&term=food&format=json&sort=distance&radius=50&listingcount=10&key=lxs36m569x",
      type: "GET",
      dataType: "jsonp",
      error: function (jqXHR, status, error){
        alert ("GET Failed");
      },
      success: function(data){


        var randomRest = Math.floor((Math.random()*data.searchResult.searchListings.searchListing.length)+1);

        $(".restGen").html("<h4>" +data.searchResult.searchListings.searchListing[randomRest].businessName + " shall be your establishment of choice." + "</h4>");
        $(".restGen").append('<a href="' + data.searchResult.searchListings.searchListing[randomRest].businessNameURL + ' ">' +  'Visit their website' + '</a>');

     
    


      } //end success
      });

      })


  },

  getAct: function(){

       $(".actzip").click(function(e) {
      e.preventDefault();
      console.log("im working");

       var myZip2 = $(".azip").val();

       console.log(myZip2);
 

  

      

      $.ajax({
     // url: "https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&sensor=false&key=AIzaSyCNJ06Z4hQ7_ORxRrtV7nTapM3FcddmrYE",
      url: "http://pubapi.atti.com/search-api/search/devapi/search?searchloc=" + myZip2 + "&term=movies&format=json&sort=distance&radius=150&listingcount=10&key=lxs36m569x",
      type: "GET",
      dataType: "jsonp",
      error: function (jqXHR, status, error){
        alert ("GET Failed");
      },
      success: function(data){


        var randomAct = Math.floor((Math.random()*data.searchResult.searchListings.searchListing.length)+1);

        $(".restGen").html(data.searchResult.searchListings.searchListing[randomAct].businessName);

     
    


      } //end success
      });

      })

    }//end of getAct function
  

  
 


};



