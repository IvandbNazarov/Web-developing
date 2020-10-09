/*Условия: 

Монстр - 500хр
Герой - 100хр

Виды Урона [{волшебная стрела, шанс крита - 58%, урон - 10-25}, {ледяной удар, шанс крита - 24%, урон - 20-30}, {фаер болл, шанс крита - 13%, урон - 25-45}]



Урон монстра - 1-10
Крит урон монстра - 1 - 100 (шанс крита 1%)
Каждый ход, монстр и герой делают удар друг по другу.
Урон монстра рандомно генерируется, каждый ход генерируется рандомное число для крита(если выпадает 1, то монстр бьет на 100)
Урон героя - сначала выбирается вид магии (рандомное число от 1-3), в зависимости от параметров выбранного спела вычисляется урон и крит(рандомное число от 1 до 100 - если полученное число меньше или равно проценту крита, то полученный урон удваивается)

Каждое действие документировать в консоли
Пример: 
console.log("Герой кастует "+ вид магии)
если крит то появляеться еще один консоль лог с надписью КРИТ!
console.log("Монстр нанес по герою "+ урон)
console.log("У героя осталось "+ жизней)

Игра заканчивается, когда герой или монстр умирает


1. Написать основной функционал игры:
Удар героя с выбором оружия и генерацией крита
Удар монстра 

2. Добавить монстру возможность сделать крит удар (шанс 1%)

3. Добавить шанс регенерации жизней у монстра 
(если по монстру прошел обычный удар то с шансом 5% монстр может восстановить от 1 - 200хр, 
если по монстру прошел крит, то шанс регена 10% на восстановление от 1 до 100)

4. Добавить герою бутыльки: У героя есть 3 бутылька, которые усиливают урон в 5 раз
Вероятность выпить бутылек в каждом ходе 9%. Если бутылек был задействован, то количество бутыльком уменьшается на 1.

5. Добавить бутыльки герою: У героя есть 3 бутылька для восстановления здоровья. 
Шанс выпить бутылек жизней 5% после удара монстра. Если бутылек был выпит, то общее количество бутыльков жизней уменьшается на 1.
Бутылек восстанавливает от 30 до 50 жизней героя.
Каждые недостающие 10хр героя, шанс выпить бутылек жизней увеличивается на 1% (максимальный процент выпить бутылек 14%)
*/

var hero = {
	typeOfDamage : [
	{
		name : "волшебную стрелу", 
		critChance : 58, 
		damage : {min: 10, max: 25}
	}, {
		name : "ледяной удар", 
		critChance : 24, 
		damage : {min: 20, max: 30}
	}, {
		name : "огненный шар", 
		critChance : 13, 
		damage : {min: 25, max: 45}
	}],
	heroHp : 100,
	maxHp : 100,
	bottles : 	{
		bottleDamage : { 
			count : 3,
			chanceDrink : 9,
			xDamage : 5
		},
	    bottleRegen : {
			count : 3,
			chanceDrink : 5,
			regen : {min : 30, max : 50}
		}
	}
}


var monster = {
	monsterHp : 500,
	maxHp : 500,
	typeOfDamage : {
		damage : {min : 0, max : 10},
		critChance : 1,
		critDamage : 100
	},
	isSuperRegen: false,
	superRegen: {
		chance: 10,
		min: 1,
		max: 100
	},
	regen:{
		chance: 5,
		min: 1,
		max: 200
	}
}

function getRandomInt(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


function regenBottle () {
	var object = {};
	var flag = false;
	var bottles = hero.bottles.bottleRegen.count;
	var chanceDrink = getRandomInt(0, 100);
	var regenHp = getRandomInt(hero.bottles.bottleRegen.regen.min, hero.bottles.bottleRegen.regen.max); 
	var addPercent = Math.floor(hero.maxHp - hero.heroHp)/ 10;
	if (chanceDrink < (hero.bottles.bottleRegen.chanceDrink + addPercent) && bottles) {
		flag = true;
		object.regen = regenHp;
		hero.bottles.bottleRegen.chanceDrink--;
	}
	object.flag = flag;
	return object;
}

function damageBottle () {
	var flag = false;
	var bottles = hero.bottles.bottleDamage.count;
	var chanceDrink = getRandomInt(0, 100);
	if (chanceDrink < hero.bottles.bottleDamage.chanceDrink && bottles) {
		flag = true;
		hero.bottles.bottleDamage.count --;
	}
	return flag;
}

function monsterRegen (monsterObj) {
	var regen = 0;
	var flag = monsterObj.isSuperRegen;
	var chanceRegen = getRandomInt(0, 100);
	if (flag) {
		if (chanceRegen < monster.superRegen.chance) {
			regen = getRandomInt(monster.superRegen.min, monster.superRegen.max);
		}
	} else {
		if (chanceRegen < monster.regen.chance) {
			regen = getRandomInt(monster.regen.min, monster.regen.max);
		}
	}
	return regen;
}

function heroHit(){
	var i = getRandomInt(0, 2);
	var critical = getRandomInt(0, 100);
	createConsoleElement("Герой кастует " + hero.typeOfDamage[i].name);
	var damage = getRandomInt(hero.typeOfDamage[i].damage.min, hero.typeOfDamage[i].damage.max);
		if (critical < hero.typeOfDamage[i].critChance) {
			damage = 2*damage;
			monster.isSuperRegen = true;
			createConsoleElement("Проходит КРИТИЧЕСКИЙ урон!.");
		} else {
			monster.isSuperRegen = false;
		}
	return damage;
}

function percentDamage(startHp, endHp) {
	var percent = (endHp/startHp)*100;
	return percent;
}

function heroDamage(){
	var damage = heroHit();
	var isBottleDamage = damageBottle();
	if (isBottleDamage) {
		damage *= hero.bottles.bottleDamage.xDamage;
		createConsoleElement("Герой выпивает эликсир силы.");
	}
	createConsoleElement("Герой наносит " + damage + " урона.");
	return damage;
}

function monsterHit(){
	var damage = getRandomInt(monster.typeOfDamage.damage.min, monster.typeOfDamage.damage.max);
	var critical = getRandomInt(0, 100);
		if (critical < monster.typeOfDamage.critChance) {
			damage = monster.typeOfDamage.critDamage;
			createConsoleElement("КРИТ!!!");
		}
		createConsoleElement("Монстр наносит " + damage + " урона.");
		return damage;
}

function checkDeath (whichHp) {
	if (whichHp <= 0) {
		createConsoleElement("Игра закончена");
		return true;
	}
	return false;
}

function resetGame(monster, hero){
	monster.monsterHp = 500;
	hero.heroHp = 100;
	hero.bottles.bottleRegen.count = 3;
	hero.bottles.bottleDamage.count = 3;
	document.getElementById('textIn').innerHTML = "";
	resetHp();
}

function createConsoleElement (text) {
	$("#textIn").prepend("<div class='consoleElem'><p>"+text+"</p></div>")
}

function resetHp() {
	$('#humanIn, #monsterIn').css('width','100%');
	//debugger;
	$("#humanIn, #monsterIn").addClass('resetTransition');
	setTimeout(function(){
		$("#humanIn, #monsterIn").removeClass('resetTransition');
	}, 300);
}

function startGame() {
	setTimeout(function(){
		for (i = 0; hero.heroHp > 0 && monster.monsterHp > 0 && i < 1; i++) {
			hero.heroHp = hero.heroHp - monsterHit();
			$('#humanIn').css('width', percentDamage(hero.maxHp, hero.heroHp) + "%");
			if(checkDeath(hero.heroHp)){
				createConsoleElement("Герой мертв.");
				return;
			}
			createConsoleElement("У героя осталось " + hero.heroHp + " HP.");
			var bottle = regenBottle();
			if (bottle.flag) {
				hero.heroHp += bottle.regen;
				if (hero.heroHp > 100) {hero.heroHp = 100};
				$('#humanIn').css('width', percentDamage(hero.maxHp, hero.heroHp) + "%");
				createConsoleElement("Герой выпивает эликсир жизни и восстанавливает " + bottle.regen + " HP. У героя теперь " + hero.heroHp + " HP.");
			}
			monster.monsterHp = monster.monsterHp - heroDamage();
			$('#monsterIn').css('width', percentDamage(monster.maxHp, monster.monsterHp) + "%");
			if(checkDeath(monster.monsterHp)){
				createConsoleElement("Монстр мертв.");
				return;	
			}	
			createConsoleElement("У монстра осталось " + monster.monsterHp + " HP.");
			var regen = monsterRegen(monster);
			if (regen) {
				monster.monsterHp = monster.monsterHp + regen;
				if (monster.monsterHp > 500) {monster.monsterHp = 500};
				$('#monsterIn').css('width', percentDamage(monster.maxHp, monster.monsterHp) + "%");
				createConsoleElement("Монстр восстановил " + regen + " HP. Теперь у него " + monster.monsterHp + " HP.");
			}
		}
	}, 300)	
}


function newGame() {
	resetGame(monster, hero);
}

















































// Битва монстр vs Герой
// Каждое действие выводить в консоли
// 1. Каждую итерацию проверять количество жизней монстра и героя, если у одного хр меньше 0, выводить в консоль победителя
// 2. Каждую итерацию проверять сколько маны у героя, если у героя мана = 100, то герой делает мега удар(мега удар может нанести от 20 до 100) 
// 3. Каждую итерацию герой и монстр наносят удары друг другу (мощность ударов от 0 - 10)
// 4. Каждую итерацию, кроме хода с использованием мега удара, герой регенирирует ману на 50(мана достигает 100 за 2 хода)

// (3 функции (обычный удар, мега удар, регенМаны), цикл)


/*var heroHp = 100;
var monsterHp = 500;
var heroMp = 0;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function usualHit(hit) {
		var damage = getRandomInt(0, 10);
		if (hit == 1) {
			console.log("Герой наносит " + damage + " урона");
			return damage;
		} 
		if (hit == 2) {
			console.log("Монстр наносит " + damage + " урона");
			return damage;
		}
}

function regenMp () {
	heroMp = heroMp + 50;
	console.log("У героя " + heroMp + " маны");
}

function megaHit () {
	var damage = getRandomInt(20, 100);
	console.log("Герой наносит " + damage + " урона");
	return damage;
}

function checkHp () {
	heroHp = 100;
	monsterHp = 500;
	heroMp = 0;
	while (heroHp > 0 && monsterHp > 0) {
		heroHp = heroHp - usualHit(1);
			console.log("У героя осталось " + heroHp + " жизней");
		if (heroHp <= 0) {
			console.log("Герой мертв");
			return;
		}
		if (heroMp == 100) {
			console.log(megaHit());
			monsterHp = monsterHp - megaHit();
			heroMp = 0;
			console.log("Мана героя равна " + heroMp);
		} else {
			monsterHp = monsterHp - usualHit(2);
			regenMp()
		}
			console.log("У монстра осталось " + monsterHp + " жизней");
		if (monsterHp <= 0) {
			console.log("Монстр мертв");
			return;			
		}
	}
}
*/




/*var heroHp = 100;
var monsterHp = 500;
var heroMp = 0;
var monsterName = "Монстр";
var heroName = "Герой";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function usualHit(who) {
	var whoIsBitten = "";
	var endsHp = 0;
	var damage = getRandomInt(0, 10);
	if (who == monsterName) {
		heroHp -= damage;
		whoIsBitten = "Героя";
		endsHp = heroHp;
	} else if (who == heroName) {
		monsterHp -= damage	
		whoIsBitten = "Монстра";
		endsHp = monsterHp;
	}
	console.log(who + " наносит " + damage + " урона");
	console.log("У " + whoIsBitten + " осталось " + endsHp + " жизней");
}

function regenMp () {
	heroMp = heroMp + 50;
	console.log("У героя " + heroMp + " маны");
}

function megaHit () {
	var damage = getRandomInt(20, 100);
	console.log("Герой наносит " + damage + " урона");
	return damage;
}

function checkDeath (whichHp) {
	if (whichHp <= 0) {
		console.log("Игра закончена");
		return true;
	}
	return false;
}

function startGame () {
	heroHp = 100;
	monsterHp = 500;
	heroMp = 0;
	while (heroHp > 0 && monsterHp > 0) {
		usualHit(monsterName);
		if(checkDeath(heroHp)){
			console.log('Герой мертв');
			return;
		}
		if (heroMp == 100) {
			monsterHp = monsterHp - megaHit();
			heroMp = 0;
			console.log("Мана героя равна " + heroMp);
		} else {
			usualHit(heroName);
			regenMp()
		}
		if(checkDeath(monsterHp)){
			console.log('Монстр мертв');
			return;		
		}
	}
}*/