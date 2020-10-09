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

var token;




function constructor(obj, template, place) {
	var sourse = $(template).html();
	var template = Handlebars.compile(sourse);
	var context = obj;
	$(place).html(template(context));
}











							/*КНОПКИ ВХОДА*/

constructor(autorizationMenu, registrationBlock, navBlock);
constructor(registrationBlock, formBlock, mainBlock);

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



function logIn() {
	$.ajax({
		method:'POST',
		url:"http://localhost:3000/user/login",
		data:{
			email: $("#email").val(),
			password: $("#oldpassword").val(),
		},
		success: function(r){
			token = r.token;
			alert("Вы успешно вошли!")
		},
		error: function(error){console.log(error)}
	})
}




function addProduct(){
	debugger;
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
	      alert("Продукт успешно добавлен!");
	    }
	})
}




function changeProduct(id){
	var formData = new FormData();
	    formData.append("productimage", $("#productImage").prop("files")[0]);
	    formData.append("name", "Milk");
	    formData.append("price", 100);
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
    		alert("Продукт изменен!");
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



function getProduct(id){
	$.ajax({
	    method:'GET',
	    url:"http://localhost:3000/products/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    success: function(response){
	    	constructor(response.product, oneProduct, $("#modal"));
	    	$.fancybox.open({
        		src:"#modal",
      		})	
	    }
	})
}

function getProductData(elem){
	var productId = $(elem).data("id");
	getProduct(productId);
}



function deleteProduct(id){
	$.ajax({
	    method:'DELETE',
	    url:"http://localhost:3000/products/" + id,
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
	    success: function(response){
	    	alert("Продукт удален!");
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
	    data: formData,
	    success: function(response){
	    	alert("Вот список всех заказов!");
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



function deleteProduct(id){
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



function addOrder(){
	$.ajax({
	    method:'POST',
	    url:"http://localhost:3000/orders",
	    data:{
			productId:$('.input_class').val(),
			quantity:$('.'),
	    },
	    beforeSend: function(xhr){
	    	xhr.setRequestHeader("Authorization", "token " + token);
	    },
	    data: formData,
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
	logIn();
	getProducts();
	constructor(menuNav, menuBlock, navBlock);
});

$('body').on("click", ".newbtn", function(e){
	e.preventDefault();
	registration();
	$("#main").empty();
	$("#nav").empty();
	getProducts();
	constructor(menuNav, menuBlock, navBlock);
});


								/*КНОПКИ МЕНЮ*/

$("body").on("click",".add", function(){
	$("#main").empty();
	constructor(createProduct, productBlock, mainBlock);
})



$("body").on("click", ".mainpage", function(){
	$("#main").empty();
	getProducts();
})


$("body").on("click", ".productBlock .change", function(event){
	getProductData(event.target);	
})
$("body").on("click", ".productBlock .delete", function(event){
	getProductData(event.target);	
})





$("body").on("click", ".create", function(event){
	addProduct();
	getProducts();
})