var autorizationMenuData = {
	buttons : [
		{
			type : "button",
			class : "btn-primary",
			id: "logIn",
			text: "ВХОД"
		},
		{	
			type : "button",
			class : "btn-primary",
			id: "registr",
			text: "РЕГИСТРАЦИЯ"
		}
	]
}


var registrationBlockData = {
	idAlert : "registrationAlert",
	textAlert : "Такой пользователь уже существует",
	formClass: "form-row was-validated",
	formId : "inputform",
	headText : "",
	registrationData : [
		{
			for : "email",
			text : 	"EMAIL",
			type : "text",
			class : "form-control-lg form-control",
			id : "email",
			placeholder : "Введите EMAIL",
			errorMessage : "Введите правильный EMAIL",
			modalAlert : "emailAlert" 
		},
		{
			for : "password",
			text : "ПАРОЛЬ",
			type : "password",
			class : "form-control-lg form-control",
			id : "password",
			placeholder : "Введите ПАРОЛЬ",	
			errorMessage :  "Введите правильный ПАРОЛЬ",
			modalAlert : "passwordAlert"
		}	
	],
		buttons : [ 
		{
			type : "button",
			class : "btn-primary btn-lg",
			id : "oldbtn",
			text : "ВОЙТИ В АККАУНТ"
		},
		{
			type : "button",
			class : "btn-primary btn-lg",
			id : "newbtn",
			text : "СОЗДАТЬ АККАУНТ"
		}
	],
		alert : [
		{
			id : "registrationAlert",
			text : "Такой пользователь уже существует",
		},
		{
			id : "autorizationAlert",
			text : "Неверный Email или Пароль",
		}]
}


var createProductBlockData = {
	formClass: "form-row",
	formId : "createProduct",
	headText : "СОЗДАНИЕ НОВОГО ПРОДУКТА",
	newProductData : [
		{
			for : "createname",
			text : 	"Наименование",
			type : "text",
			class : "form-control-lg",
			id : "createname",
			placeholder : "Введите название"
		},
		{
			for : "createprice",
			text : 	"Цена",
			type : "mumber",
			class : "form-control-lg",
			id : "createprice",
			placeholder : "Укажите цену"
		},
		{
			for : "createImg",
			text : 	"Изображение",
			type : "file",
			class : "form-control-lg",
			id : "createImg",
			placeholder : "Загрузите фотографию"
		}
	],
	buttons : [ 
		{
			type : "button",
			class : "btn-success btn-lg",
			id : "create",
			text : "ДОБАВИТЬ"
		}
	]
}


var menuNavData = {
	classSpan : "ulspan",
	nameUl : "", 
	liItems: [
		{
			name: "Главная",
			className: 'mainpage'
		},
		{
			name: "Список заказов",
			className: 'orderspage'
		},
		{
			name: "Добавление продукта",
			className: 'add'
		},
		{
			name: "Выход",
			className: 'exit'
		},

	]
}


var headerData = {
	text : "ЛАВКА ДЕДА ИВАНА"
}
