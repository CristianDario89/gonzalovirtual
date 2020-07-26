var datosDulces = [ {
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: 40,
    img: "images/galle/g2.jpg"
},
{
    marca: "<strong>1 Docena</strong>",
    descripcion: "",
     precio: 130,
   img: "images/galle/gad11.jpg"
    
}, 
{
    marca: "<strong>1 Docena y media</strong>",
    precio: 170,
    img: "images/galle/mante.jpg"
},
{
    marca: "<strong>2 Docenas</strong>",
     precio: 210,
    img: "images/galle/pepi.jpg" 
},
{
    marca: "<strong>celosas</strong> bananas con chocolate 230g",
    precio: 55,
    img: "images/galle/gg1.webp"
},
{
    marca: "<strong>coronitas</strong>",
     precio: 40,
    img: "images/galle/gad4.jpg" 
},
{
    marca: "pepas <strong>trio</strong>",
    precio: 45,
    img: "images/galle/gad6.jpg" 
},
{
     marca: "pepas <strong>pepin</strong>",
    descripcion: "membrillo-batata",
    precio: 40,
    img: "images/galle/gad5.jpg"
},
{
    marca: "<strong>1/2 Docena</strong>",
    precio: 70,
    img: "images/galle/gd1.webp" 
}
];
/*-----------------------------*/
var datosSaladas = [ {
    marca: "<strong>Don Satur</strong>",
    precio: 40,
    img: "images/galle/g3.jpg" 
},
{
    marca: "<strong>media tarde</strong>  x 3",
    descripcion: "$28 c/u",
    precio: 73,
    img:"images/galle/g4.webp"
}, 
{
    marca: "<strong>Jorgito</strong> Bizcochitos",
     precio: 50,
    img:"images/galle/gd2.png"
},
{
     marca: "<strong>criollitas</strong> x 3",
    descripcion: "$35 c/u",
     precio: 90,
    img:"images/galle/g5.webp" 
},                    
{
    marca: "<strong>Jorgito</strong>Bizcochitos ",
    precio: 40,
    img: "images/galle/gad6.jpg" 
}
]   
/*---------------------------------------*//*---------------------------------------*/
var over1 = function(atrr,on,tw, thre) {
	    var contenido2 = document.querySelector(atrr)
	        contenido2.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${thre}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${on}</h3>
											
										</div>
									</div>
									<div class="fh5co-food-pricing">
										$ ${tw}
									</div> 

<p href="" data-name="${on}" data-price="${tw}" class="add-to-cart btn btn-primary redondo">+</p> 
   `
    }  

/*----------------------GALLE---------------------*//*-------------GALLE------------------------------*/
over1("#p8", datosDulces[0].marca,datosDulces[0].precio,datosDulces[0].img);
over1("#p3", datosDulces[2].marca,datosDulces[2].precio,datosDulces[2].img);
over1("#p4", datosDulces[3].marca,datosDulces[3].precio,datosDulces[3].img); 
over1("#p5", datosDulces[4].marca,datosDulces[4].precio,datosDulces[4].img);

over1("#p6", datosDulces[5].marca,datosDulces[5].precio,datosDulces[5].img);
over1("#p7", datosDulces[6].marca,datosDulces[6].precio,datosDulces[6].img);
over1("#p1", datosDulces[8].marca,datosDulces[8].precio,datosDulces[8].img);

over1("#ps1", datosSaladas[0].marca,datosSaladas[0].precio,datosSaladas[0].img);
over1("#ps2", datosSaladas[1].marca,datosSaladas[1].precio,datosSaladas[1].img);
over1("#ps3", datosSaladas[2].marca,datosSaladas[2].precio,datosSaladas[2].img);
over1("#ps4", datosSaladas[3].marca,datosSaladas[3].precio,datosSaladas[3].img);
  
/*-------------------*/

 var over2 = function(atrr,on,tw, thre,four) {
	    var contenido2 = document.querySelector(atrr)
	        contenido2.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${thre}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${on}</h3>
											<p>${four}</p>
										</div>
									</div>
									<div class="fh5co-food-pricing">
										$ ${tw}
									</div> 

<p href="" data-name="${on}" data-price="${tw}" class="add-to-cart btn btn-primary redondo">+</p> 
   `
    }  
 
over2("#ps2", datosSaladas[1].marca,datosSaladas[1].precio,datosSaladas[1].img, "media tarde Sandwich <strong> $ 83</strong>");
over2("#p2", datosDulces[1].marca,datosDulces[1].precio,datosDulces[1].img,"");
 
/*------------Galletitas--------------------*//*------------Galletitas--------------------*/
  
  
// ************************************************
// Shopping Cart API
var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  cart = []; 
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  // =============================
  // Public methods and propeties
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
         
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count ;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }
  
  

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
  
console.log(obj.listCart); 
})();

// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});
// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += 
        `
<tr>
      <td>  ${cartArray[i].name}</td> 
      <td> ${cartArray[i].price} </td>
      <td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary redondo' data-name='${cartArray[i].name}' >-</button>
      <input type='number' class='item-count form-control' data-name='${cartArray[i].name}' value='${cartArray[i].count}' >
      <button class='plus-item btn btn-primary redondo input-group-addon' data-name='${cartArray[i].name}' >+</button></div></td>
      <td><button class='delete-item btn btn-danger' data-name='${cartArray[i].name}' >X</button></td>
       =  
      <td > ${cartArray[i].total}  </td> 
      </tr>
` ;
      
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}
// Delete item button
$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})
// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})
// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});
displayCart();
 
/*-----------
let busqueda = "tang";
console.log("Tenemos el arreglo: ", jugos);
console.log("Buscando en donde el nombre sea igual a: ", busqueda);
let indice = jugos.findIndex(jugo => jugo.marca === busqueda);
console.log("El elemento buscado está en el índice ", indice);*/
 