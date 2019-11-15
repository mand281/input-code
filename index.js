<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

/*
$(document).on("pagecreate", "#pageone", function(){

  
  	$("#taptext").on("click",function random() {
	
    
    
    return !Math.round(Math.random());
   
    $("#myText").text(random());

})})*/




function rand1(){
    
     return !Math.round(Math.random());
    
    
}

$(document).on("pagecreate", "#pageone", function(){

//$("taptext").on('tap'){}
    
    
var button1 = document.getElementById('taptext');
var button2 = document.getElementById('myText');	
    
   
    
   //button2.innerHTML = rand1();
    button1.addEventListener('click',function(){
        button2.innerHTML = rand1();
        
        
        /*var buttontxt = button2.innerHTML
        
        if (buttontxt = "true"){
            
            }
        {
            
        }*/
        
    });
    
    
})
    


