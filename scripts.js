
function Login()
{
	 

var username = document.getElementById("loginEmail").value;
var password = document.getElementById("loginPassword").value;
var loginAttempts = Number(document.getElementById("loginAttempts").value);

if(username.toLowerCase() == "test@test.com" || password == "Password" ){
    alert("User logged in");
    window.location.href = "service.html"
}
else{

    if(loginAttempts === 3){

        window.location.href = "error.html";
    
    }

    document.getElementById("loginAttempts").value = loginAttempts + 1;

    alert("login Failed " + (3 - loginAttempts) + " Attempts Left");

    
}



}

function addToCart(e) {



    var ul = document.getElementById("cart");

    var total = document.getElementById("Total");

    var totalValue = Number(total.value);

    var value = 0;

    var child = e.childNodes[2];

    var data = child.innerHTML.split('$')[1];
    
    
   try{

    value = Number(data);
    totalValue += value;

   }catch(e){

    totalValue += value;

   }


    var time = new Date().getTime();

    if(ul.innerHTML.trim().length === 0){

        showCart();
    }


    var li = document.createElement("li");
    li.appendChild(document.createTextNode(e.id + " - $" + value));
    var button = document.createElement("button");
    button.addEventListener("click", function(){
        RemoveFromCart(document.getElementById(time.toString()+"item"));
   }, false);
    button.innerHTML = "Remove";
    li.setAttribute("id", time + "button" );
    li.appendChild(button);
    li.setAttribute("id", time + "item" );
   // li.appendChild(document.createElement("<br/><button id="+ time + "button" + ">Remove</button>",false));
    ul.appendChild(li);



   // ul.innerHTML += "<li id="+ time + "item" + " > "+ element.id + " - $" + value + "<br/><button id="+ time + "button" + ">Remove</button>" +  " </li>";

   /* document.getElementById(time.toString()+"button").addEventListener("click", function(){
         RemoveFromCart(document.getElementById(time.toString()+"item"));
    }, false); */
    

    document.getElementById("cartTotal").innerHTML = "$" + totalValue;

    document.getElementById("Total").value = totalValue;

    ul.scrollIntoView();

  }

  function SubmitCart() {
    var ul = document.getElementById("cart");
    totalValue = document.getElementById("Total").value;

    localStorage.setItem("cart", ul.innerHTML);

    localStorage.setItem("cartTotal",totalValue )

    window.location.href = "invoice.html";

  }

  function LoadInvoiceData(){

    var uiData = localStorage.getItem("cart");

    var cartTotal = localStorage.getItem("cartTotal");

    if(uiData != null && cartTotal != null){

        document.getElementById("cart").innerHTML = uiData;

        document.getElementById("cartTotal").innerHTML = "$" +  cartTotal;


        var ul = document.getElementById("cart");
        var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {

    document.getElementById(items[i].id).innerHTML = items[i].innerHTML.substring(0,items[i].innerHTML.indexOf("<"));





        
}

        showCart();
    }

  }

  function RemoveFromCart(e) {


    totalValue = document.getElementById("Total").value;

    var data = e.innerHTML.substring(
        e.innerHTML.indexOf("$") + 1, 
        e.innerHTML.indexOf("<")
    );
    
   try{

    totalValue -= Number(data);

   }catch(e){


   }

    
    





    e.parentNode.removeChild(e);

    document.getElementById("cartTotal").innerHTML = "$" + totalValue;

    document.getElementById("Total").value = totalValue;

    var ul = document.getElementById("cart");

    if(ul.innerHTML.trim().length === 0){
      
        hideCart();
    }

  }


  function showCart() {
    var x = document.getElementById("CartContainer");
    
    x.removeAttribute("hidden")
  }

  function hideCart() {
    var x = document.getElementById("CartContainer");
    
    x.setAttribute("hidden",true);
  }
  
