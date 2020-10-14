/*1. Делать красиво
2. Не плакать
3. Страница авторизации\Регистрации
4. После авторизации 3 страницы:
	- Список продуктов (редактирование продукта, добавление заказа, удаление продукта)
	- Создание продукта
	- Список заказов
5. Выход(разовторизация)

Можно использовать любой другой шаблонизатор*/



console.log("CLICK");

var mainBlock = $("#main");
var navBlock = $("#nav");
var headerBlock = $("#header");

var formBlock = $("#inputForm");
var registrationBlock = $("#registrationTemplate");
var productBlock = $("#newProduct");
var menuBlock = $("#mainMenu");
var productTemplateBlock = $("#productTemplate");
var oneProduct = $("#product");
var editProductBlock = $("#editProduct");
var ordersTemplateBlock = $("#ordersTemplate");
var titleBlock = $("#headerTemplate");

var token;



function constructor(obj, template, place) {
	var sourse = $(template).html();
	var template = Handlebars.compile(sourse);
	var context = obj;
	$(place).html(template(context));
}

							/*КНОПКИ ВХОДА*/

constructor(headerData, titleBlock, headerBlock);
constructor(autorizationMenuData, registrationBlock, navBlock);
constructor(registrationBlockData, formBlock, mainBlock);

$("#inputform").hide();

$("#logIn").on("click", function(){
	$("#inputform").show();
	if ($("#oldbtn").show()) {
		$("#newbtn").hide()
	} 
});

$("#registr").on("click", function(){
	$("#inputform").show();
	if ($("#newbtn").show()) {
		$("#oldbtn").hide()
	} 
});

							/*ЗАПРОСЫ*/

function request(props, options) {
  $.ajax({
    method: props.method,
    url:"http://localhost:3000/" + props.url,
    ...options,
    success: function(response){

      if(props.callback) 
             props.callback(response)
    }
  })
}




$('body').on("click", "#newbtn", function(e){
	e.preventDefault();
	registration();
});

function registration() {
	request({
		method:'POST',
		url:"user/signup",
		data:{
			email: $("#newemail").val(),
			password: $("#newpassword").val(),
		},
		callback:  function(response){
			alert("Вы успешно зарегистрированы!")}
	},{
		data:{
			email: $("#newemail").val(),
			password: $("#newpassword").val(),
		},
		error: function(error){console.log(error)}
	})
}





$("body").on("click",'#oldbtn', function(e){
	e.preventDefault();
	logIn();
	});

function logIn() {
	request({
		method:'POST',
		url:"user/login",
		callback: function(response){
			token = response.token;
			getProducts();
			constructor(menuNavData, menuBlock, navBlock)}
	},{
		data:{
			email: $("#email").val(),
			password: $("#password").val(),
		},
		error: function(error){alert("WTF")}
	})
}






$("body").on("click", ".create", function(event){
	addProduct();
})

function addProduct(){
	var formData = new FormData();
	    formData.append("productimage", $("#productImage").prop("files")[0]);
	    formData.append("name", $(".productName").val());
	    formData.append("price", $(".count").val());
	request({
		method: 'POST',
		url: "products",
		callback: getProducts
	},
	{
		processData: false,
	    contentType: false,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
	})
}

function getProducts(){
	request({
		method:'GET',
	    url:"products",
	    callback: function (response){
	    	constructor(response.products, productTemplateBlock, mainBlock)
	    }
	})
}






$("body").on("click", ".saveChanges", function (event){
	changeProduct(event.target.dataset.id);
		$.fancybox.close();
	});

function changeProduct (id){
	var formData = new FormData();
	    formData.append("productimage", $("#productImage").prop("files")[0]);
	    formData.append("name", $(".editProductName").val());
	    formData.append("price", $(".editCount").val());
  	request({
  		method:'PATCH',
    	url:"products/"+ id,
    	callback: getProducts
  	},{
  		processData: false,
	    contentType: false,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
  	})
}





$("body").on("click", ".productBlock .change", function(event){
	getProductData(event.target);	
})

function getProduct(id){
	request({
		method:'GET',
	    url:"products/" + id,
	    callback:  function(response){
	  	 	constructor(response.product, editProductBlock, $("#modal"));
	  	  	$.fancybox.open({
        		src:"#modal",
      	})			
	}
	},{
		beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	})
}

function getProductData(elem){
	var productId = $(elem).data("id");
	getProduct(productId);
}






$("body").on("click", ".productBlock .delete", function(event){
	getProductData(event.target);	
})

$("body").on("click", ".delete", function(event){
	deleteProduct(event.target.dataset.id)
})

function deleteProduct(id){
	request({
		method:'DELETE',
	    url:"products/" + id,
	    callback: getProducts
	},{
		beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);}
	})
}





$("body").on("click", ".orderspage", function(){
	getOrders();
})

function getOrders(){
	request({
		method:'GET',
	    url:"orders",
	    callback: function(response){
			constructor(makeSum(response.orders), ordersTemplateBlock, mainBlock);}
	},{
		beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    }
	})
}

function makeSum (response){
	let newResponse = {};
	let result = {
		price: 0,
		count: 0
	};
	response.map(function(item){
		if (!item.product) return;
		item.totalprice = item.quantity*item.product.price;
		result.price += item.totalprice;
		result.count += item.quantity;
	})
	newResponse.response = response;
	newResponse.result = result;
	return newResponse;
}






$("body").on("click", ".deleteOrder", function(event){
	deleteOrder(event.target.dataset.id)
})

function deleteOrder(id, callback){
	request({
		method:'DELETE',
	    url:"orders/" + id,
	    callback: function(){
		$(".orderspage").trigger("click");}
	},{
		 beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    }
	})
}





$("body").on("click", ".orderProduct", function(event){
	addOrder(event.target);
})

function addOrder(element){
	request({
		method:'POST',
	    url:"orders",
	    callback: function(response){
	      alert("Заказ успешно добавлен!")}
	},{
		data:{
			productId: element.dataset.id,
			quantity:$(element).siblings("input").val()
	    },
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    }
	})
}





function getOrder(id){
	$.ajax({
	    method:'GET',
	    url:"http://localhost:3000/orders/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(response){
	    	alert("Вот заказ!");
	    }
	})
}




function deleteUser(id){
	$.ajax({
	    method:'DELETE',
	    url:"http://localhost:3000/user/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
	    success: function(response){
	    	alert("Пользователь удален!");
	    }
	})
}

								/*КНОПКИ МЕНЮ*/

$("body").on("click", ".add", function(){
	constructor(createProductBlockData, productBlock, mainBlock);
})


$("body").on("click", ".mainpage", function(){
	getProducts();
})

$("body").on("click", ".exit", function(){
    location.reload();
})

