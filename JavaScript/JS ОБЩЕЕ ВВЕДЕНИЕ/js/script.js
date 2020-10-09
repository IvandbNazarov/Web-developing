/* Условные выражения */

/*if(true) {
	console.log()
} else if() {

} else {

}
*/


/*var money = true;
var shopIsOpen = false;
var bread = true;
var milk = false;
var text;
var count = 26;

if(bread && milk) {
	console.log("Хлеб и молоко есть");
} else if(!bread || !milk) {
	if (!bread) {
		text = "Хлеба";
	}
		if(!milk) {
			if(text) {
				text = text + " и молока";
			}
			else {
				text = "Молока";
			}
	} 
	console.log(text + " нет");
	if (money) {
		console.log("Деньги есть");
		if (count > 25) {
			console.log("Денег достотчно");
			if (shopIsOpen) {
				console.log("Иду в магазин");
			} else {
					console.log("Рыдаю");
			}
		} else {
			console.log("Денег недостаточно")
		}

	} else {
		console.log("Денег нет");
	}
} 
*/


/*ЦИКЛЫ*/

/*var i = 0;
while(i < 10) {
	console.log(i);
	i++;
}
*/

/*var str = "";
var i = 0;
while (i < 10) {
	str = str + "*";
	console.log(str);
	i++;
}
*/

/*i = 1;
while (i <= 100) {
	if(i % 4 == 0) {
		console.log(i)
	}
	i++;
}*/


/*var num = 2;
switch(num) {
	case 1: console.log('num is 1');
	case 2: console.log('num is 2');
	case 3: console.log('num is 3');
	case 4: console.log('num is 4');
}


var i = 0;
while(i <= 4) {
	switch(i) {
			case 1: console.log('num is 1');break;
			case 2: console.log('num is 2');break;
			case 3: console.log('num is 3');break;
			case 4: console.log('num is 4');break;
	}
	i++;
}*/



/*1. Есть возраст человека
	Проверить возраст человека и в зависимости от возраста 
	вывести в консоль:
	< 0 - не родился
	от 0 - 6 - ходит в сад
	от 7 - 17 - ходит в школу
	от 18 - 22 - ходит в универ
	от 23 - 55 - в рабстве
	от 56 - 70 - на пенсии
	от 71 - 100 - еще ходит*/
/*

var i=75;
if (i<0) {
	console.log("Не родился");
} else if (i>=0 && i<=6) {
	console.log("Ходит в сад");
} else if (i>=7 && i<=17) {
	console.log("Ходит в школу");
} else if (i>=18 && i<=22) {
	console.log("Ходит в универ");
} else if (i>=23 && i<=55) {
	console.log("В рабстве");
} else if (i>=56 && i<=70) {
	console.log("На пенсии");
} else {
	console.log("Еще ходит");
}*/

/*var result = "не родился",
	i = 75;

if (i >= 0 && i <= 6) {
	result = "Ходит в сад";
} else if (i >= 7 && i <= 17) {
	result = "Ходит в школу";
} else if (i >= 18 && i <= 22) {
	result = "Ходит в универ";
} else if (i >= 23 && i <= 55) {
	result = "В рабстве";
} else if (i >= 56 && i <= 70) {
	result = "На пенсии";
} else if (i >= 71) {
	result = "Еще ходит";
}
console.log(result)*/



/*2. Возведение числа в степень (while)
	переменные: 
		результат
		степень
		число	
*/

/*y - результат;
x - число;
z - степень;

var z = 0;
var x = 3;
var y = 1;
while(z<=10) {
	y=y*x;
	console.log(y);
	z++;
}*/

/*var num = 3;
var extent = 0;
var result = 1;

while(0 < extent) {
	result = result * num;
	extent--;
}
console.log(result);
*/
/*var num = 3;
var result = 1;
var extent = 3;

for (var i = 0 ; i < extent; extent--) {
	result = result * num;
}
console.log(result);*/


/*
3. считалка ворон
	посчитать ворон от 1 до 100
	'На ветке сидело 76 ворон!'
	'На ветке сидело 34 вороны!'
	'На ветке сидела 1 ворона!'
*/

/*var i = 1;
while (i <= 100) {
	if (i % 10 == 0 || i % 10 >= 5) {
		console.log("На ветке сидело " + i + " ворон!");
	} else if (i <= 19 && i >= 11) {
		console.log("На ветке сидело " + i + " ворон!");
	} else if (i % 10 == 1) {
		console.log("На ветке сидела " + i + " ворона!");
	} else {
		console.log("На ветке сидели " + i + " вороны!");
	}
	i++;
}*/
/*
var i = 1;
var endSign;
var endVerb;

if (typeof(i) === "number") {
	while (i <= 100) {
		endSign = "ы";
		endVerb = "и ";

		if ((i % 10 >= 5 || i % 10 == 0) || (i >= 11 && i <= 19)) {
			endSign = "";
			endVerb = "о ";
		} else if (i % 10 == 1) {
			endSign = "а";
			endVerb ="а ";
		} 
		console.log("На ветке сидел" + endVerb + i + " ворон" + endSign);
		i++;
	};
} else {
	result = "ошибка";
}	*/


/*ФУНКЦИИ*/

/*function power(count, extent) {
	var result = 1;
	for (var i = 0 ; i < extent; extent--) {
	result = result * count;
}
	return result; 	
}

Если значение = этому - верни это
Если не = этому - верни после двоеточия
*/

/*function boobool(count) {
	if (count) {
		return "значение верно";
	}
	return "значение неверно";
	return (count) ? "значение верно" : "значение неверно";
}*/

/*var hero = 100, 
	monsterHP = 500,
	heroMP = 0;
*/



/*function boo (greet) {
	return function coo (say) {
		console.log(greet + " " + say);
	}
}

var greet = "Hello";
var x = boo(greet);

x("Mike");*/


/*function bool (num1) {
	return function cool (num2) {
		if  (num1 > num2) {
			console.log(num1 + " больше чем " + num2);
		} else if (num1 < num2) {
			console.log(num1 + " меньше чем " + num2);
		} else if (num1 == num2) {
			console.log(num1 + " равно " + num2);
		}
	} 
}

var num1 = "5";
var x = bool (num1);

x("2")*/


/*function bool (a, b) {
	if (b == 0) {
		return 1;
	} else {
		return a*bool(a ,b-1);
	}
}*/


/*(function() {
	console.log("Hello world")
}) ()  - чтобы моментально что то вызвать*/



/*Сделать функцию, которая сравнивает два числа с использованием замыкания*/
/*Возведение чиса в степень*/
/*Записать конспект с первого урока*/


/*МАССИВЫ*/

/*var arr = [1,2,3,4];

arr.length - свойство массива, узнать длину.

arr.length = 10; поменять длину массива.

arr = [2] - получить элемент массива с индексом 2.

for(var i = 0; i < arr.length; i++) {
	console.log
	(arr[i])
}  - перебрать все элементы массива.

Метод для удаления элемента из массива:

[] and .   -  операторы доступа.

arr.splice(2,1) - метод для удаления элемента из массива.

arr.splice(2, 0, 5) - вставка элементов без удаления.

arr.slice(2, 3) - копирует часть массива, возвращает новый массив.

var arr2 = arr.slice(0, arr.length); 

var arr2 = arr.slice();

Метод для извлечения последнего элемента из массива:

var p = arr.pop();

вызываем р и он возрващает его в переменной и удаляет из массива!

arr.push("!") - добавляет элемент в конец массива.

arr.shift - извлечение и возвращение первого эелемента.

arr.unshift - добавление элемента в начало.

Методы для перебора массива: 

arr.forEach(function( i, element, fullArr)) {
	console.log(element);
	console.log(i);
	console.log(fullArr);
})

Метод перебирает и создает новый массив:

m.map(function(element, i, fullArr)) {
	console.log(element);
	console.log(i);
	console.log(fullArr);	
})
*/



/*ОБЪЕКТЫ*/

/*var user = {
	0: "a",
	1: "b",
	2: "c"
};
for(var i=0; i in user; i++)
console.log( i + ": " + user[i]);

var user = {
	"x": "a",
	"y": "b",
	"z": "c"
};
for(var i in user)
	console.log(i + ": " + user[i]);*/

/*var book1 = {};
book1.gl1 = "dick";
book1.gl2 = "boobs";
book1.gl3 = "ass";
for(var i in book1)
	console.log(i + ": " + book1[i]);

var book2 = {
	gl1 : 14,
	gl2 : 88,
	gl3 : 1488
};
for(var i in book2)
	console.log(i + ": " + book2[i]);*/

/*function some(){
	console.log(this.age);
}
var user = {
	"name": "John",
	"age": 25,
	"admin": true,
	say: function(word){
		console.log(word + " from " + this.name);
		this.foo();
	},
	foo: some;
};
var user1 = {
	age: 33,
	foo: some;
}
user.say("Hello");*/





/*var o = {
	param: 10,
	method: function(){
		var self = this;
		function test(){
			console.log(self.param);
		}
		test();
	}
};
var param = 100;
o.method();*/






/*
function some(a, b){
	//console.log(this.name);
	//console.log(some.length);
	console.log(arguments.length);
	console.log(arguments[2]);
}
//var age = 10;
//some();

var john = {
	"name": "john",
	say: function(word){
		console.log(word + " from " + this.name);
	}
};

var mike = {
	name : "Mike"
};
//console.log(some.length);
some.call(mike, 10, 20, 30, 40, 50);
*/




//mike.x = john.say;
//mike.x("Hello");	



/*for(var i in x)
	console.log(i + ": " + x[i]);*/


/*
var user = {};

Есть свойства и методы

user.name = "Mike";

user.age = 25;

user = {
	name: "john",
	age: 30
}


user.voice = function() {console.log("Hello, I'm " + this.name)}
user.voice()


var arr = [];
for(var key in user) {}
	arr.push(user[key]); - перебор свойств объекта через массив


var obj = {
	param: "Hello",
	foo : function() {
		var self = this;
		function bar() {
		console.log(this);
		}
		bar()
	}
}


var obj = {
	2: 3,
	"hello": 4
}
obj[2];



delete obj["hello"];  - удаление свойств объекта
delete obj.hello


for(var key in obj) {
	console.log("this " + key + " has property " + obj[key]) - перебор свойств объеката и массива 
}


Объекты передаются по ссылке:

var obj2 = obj;

obj.hello = 10; - меняются оба

var obj2 = Object.assign({}, obj);




var obj = {}

function foo () {
	console.log ("Hello World")
}

obj.foo = foo

obj.foo()


*/



/*СПЕЦИАЛИСТ*/

/*var user = ["a", "b", "c"];


user.sort(function (a, b) {});


user[5] = "x";

for(var i in user)
	console.log(i + ": " + user[i]);*/
//for(var i = 0; i < user.length; i++)
//	console.log(i + ": " + user[i]);

/*var a = [5, 12];
var b = [];
a[99] = 7;
for( var i in a) {
	b.push(Math.pow(a[i], 2));
}*/



//func.call(obj, p1, p2, ... pn);
//func.apply(obj, [p1, p2, ... pn]);

/*var a = [5, 45 ,3, 89, 100];

Math.min.apply(Math, a);*/

/*var a = [5, 12];
var b = [];
a[99] = 7;
for( var i = 0; i < a.length; i++)
	console.log(i + ": " + Math.pow(a[i], 2));
var a = b;
*/


/*var s = user.toString();//1,5,7

var s = user.join();//1,5,7
var s = user.join('---');//1---5---7


var a = [1, 5];
var b = [11, 8];

var arr = a.concat(3, b); // [1, 5, 3, 11, 8]

var s = [1, 5] + [11, 8]; // 1,511,8*/


/*function foo(){
	var a = [];

	for(var i = 0; i < 3; i++)
		(function(j){
		a.push( function(){console.log(j)} );
		})(i);
	return a;
}

var x = foo();
x[0]();
x[1]();
x[2]();*/


/*var a = [];
a.length;

Math.PI
Math.pow()*/






/*var s = "Мы знаем, что монохромный цвет - это градации серого";
var txt = "хром";
var word;

var pos = s.indexOf(txt);
var start = s.lastIndexOf(" ", pos) + 1;
var end = s.indexOf(" ", pos);
word = s.slice(start, end);*/



var aIdx = 97;
var alphabet = "";
for(var i = 0; i < 26; i++)
	alphabet += String.fromCharCode(aIdx + i);
console.log(alphabet);

var digits = "";
for(var i = 0; i < 10; i++)
	digits += i;
console.log(digits);

function buildString(n, callback){
	var result;
	for(var i = 0; i < n; i++)	
		result += callback(i);
	return result;
}

alphabet = buildString(26, function(i){
	var aIdx = 97;
	return String.fromCharCode(aIdx + i);
});

digits = buildString(10, function(i){
	return i;
});