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
	formClass: "form-row",
	formId : "inputform",
	headText : "",
	registrationData : [
		{
			for : "email",
			text : 	"EMAIL",
			type : "text",
			class : "form-control-lg",
			id : "email",
			placeholder : "Введите EMAIL"
		},
		{
			for : "password",
			text : "ПАРОЛЬ",
			type : "password",
			class : "form-control-lg",
			id : "password",
			placeholder : "Введите ПАРОЛЬ"	
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
	]
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
			type : "mumber",
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