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
var menulogoBlock = $("#menulogo");

var formBlock = $("#registrationForm");
var registrationBlock = $("#registrationTemplate");
var productBlock = $("#newProduct");
var menuBlock = $("#mainMenu");
var productTemplateBlock = $("#productTemplate");
var oneProduct = $("#product");
var editProductBlock = $("#editProduct");
var ordersTemplateBlock = $("#ordersTemplate");

var token;




function constructor(obj, template, place) {
	var sourse = $(template).html();
	var template = Handlebars.compile(sourse);
	var context = obj;
	$(place).html(template(context));
}

							/*КНОПКИ ВХОДА*/

constructor(autorizationMenuData, registrationBlock, navBlock);
constructor(registrationBlockData, formBlock, mainBlock);

$(".olduser").hide();
$(".newuser").hide();


$("#logIn").on("click", function(){
	if ($(".newuser").hide()) {
		$(".olduser").toggle()
	} else {
		return;
	}
});

$("#registr").on("click", function(){
	if ($(".olduser").hide()) {
		$(".newuser").toggle()
	} else {
		return;
	}
});



							/*ЗАПРОСЫ*/




function registration() {
	$.ajax({
		method:'POST',
		url:"http://localhost:3000/user/signup",
		data:{
			email: $("#newemail").val(),
			password: $("#newpassword").val(),
		},
		success: function(r){
			alert("Вы успешно зарегистрированы!")
		},
		error: function(error){console.log(error)}
	})
}



function logIn(callback) {
	$.ajax({
		method:'POST',
		url:"http://localhost:3000/user/login",
		data:{
			email: $("#email").val(),
			password: $("#oldpassword").val(),
		},
		success: function(r){
			token = r.token;
			if(callback)
				callback();
		},
		error: function(error){alert("WTF")}
	})
}




function addProduct(callback){
	var formData = new FormData();
	    formData.append("productimage", $("#productImage").prop("files")[0]);
	    formData.append("name", $(".productName").val());
	    formData.append("price", $(".count").val());
	$.ajax({
	    method:'POST',
	    url:"http://localhost:3000/products",
	    processData: false,
	    contentType: false,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
	    success: function(r){
	      if (callback) 
	      	callback();
	    }
	})
}




function changeProduct(id, callback){
	var formData = new FormData();
	    formData.append("productimage", $("#productImage").prop("files")[0]);
	    formData.append("name", $(".editProductName").val());
	    formData.append("price", $(".editCount").val());
	$.ajax({
  		method:'PATCH',
    	url:"http://localhost:3000/products/"+ id,
    	processData: false,
	    contentType: false,
    	beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
   		success: function(response){
    		if(callback)
    			callback();
    	}
  	})
}




function getProducts(){
	$.ajax({
	    method:'GET',
	    url:"http://localhost:3000/products",
	    success: function(response){
	    	constructor(response.products, productTemplateBlock, mainBlock);
	    }
	})
}



function getProduct(id, callback){
	$.ajax({
	    method:'GET',
	    url:"http://localhost:3000/products/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(response){
	    	if (callback) 
	    		callback(response.product);
	    }
	})
}

function getProductData(elem, callback){
	var productId = $(elem).data("id");
	getProduct(productId, callback);
}



function deleteProduct(id, callback){
	$.ajax({
	    method:'DELETE',
	    url:"http://localhost:3000/products/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(response){
	    	if (callback) 
	    		callback();

	    }
	})
}



function getOrders(){
	$.ajax({
	    method:'GET',
	    url:"http://localhost:3000/orders",
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(response){
	    	debugger;
	    	alert("Вот список всех заказов!");
	    	constructor(response.orders, ordersTemplateBlock, mainBlock);
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
	    data: formData,
	    success: function(response){
	    	alert("Вот заказ!");
	    }
	})
}



function deleteOrder(id){
	$.ajax({
	    method:'DELETE',
	    url:"http://localhost:3000/orders/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
	    success: function(response){
	    	alert("Заказ удален!");
	    }
	})
}



function addOrder(element){
	$.ajax({
	    method:'POST',
	    url:"http://localhost:3000/orders",
	    data:{
			productId: element.dataset.id,
			quantity:$(element).siblings("input").val()
	    },
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(r){
	      alert("Заказ успешно добавлен!");
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



							/*КНОПКИ ВХОДА*/

$("body").on("click",'.oldbtn', function(e){
	e.preventDefault();
	logIn(function(){
		getProducts();
		constructor(menuNavData, menuBlock, navBlock);
	});
});

$('body').on("click", ".newbtn", function(e){
	e.preventDefault();
	registration();
});


								/*КНОПКИ МЕНЮ*/

$("body").on("click", ".add", function(){
	constructor(createProductBlockData, productBlock, mainBlock);
})



$("body").on("click", ".mainpage", function(){
	getProducts();
})


$("body").on("click", ".orderspage", function(){
	getOrders();
})


								/*ПРОДУКТЫ*/


$("body").on("click", ".productBlock .change", function(event){
	getProductData(event.target, function(product){
	    constructor(product, editProductBlock, $("#modal"));
	    $.fancybox.open({
        	src:"#modal",
      	})			
	});	
})


$("body").on("click", ".productBlock .delete", function(event){
	getProductData(event.target);	
})


$("body").on("click", ".create", function(event){
	addProduct(function(){
		getProducts();
	})
})



$("body").on("click", ".saveChanges", function (event){
	changeProduct(event.target.dataset.id, function(){
		getProducts();
		$.fancybox.close();
	});
})


$("body").on("click", ".delete", function(event){
	deleteProduct(event.target.dataset.id, function(){
		getProducts();
	})
})


									/*ЗАКАЗЫ*/


$("body").on("click", ".orderProduct", function(event){
	addOrder(event.target);
})