var DishSelectView = function (container,model) {
	// View för sidan där vi ser alla maträtter av en viss typ

	this.container=container;
	container.hide();
	model.addObserver(this);
	

	var main = container.find('#dishhead');
	var allDishes = container.find("#allDishes");

	this.selectFunction = function(){


	var hehe = '';

	//Hämtar vilken sorts dish vi vill se för närvarande
	var selectedType = model.showDishes;

	//Hämtar eventuellt filter
	var filter= model.searchWord;

	//Hämtar alla dishes av vald sort och som passar filtret
	var haha = model.getAllDishes(selectedType,filter);
	this.clickImage = container.find('.food');


	//Funktion som skapar HTML-kod för alla dishes och hämtar ut valda saker ur model
	}
	this.selectFunction();
	//Funktion som körs vid update
	this.update = function(){

		this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-2'><br /><h4>"
			hehe += "<center><img class='food' id='1' src='"+dish.ImageURL+"' width=100%><br /><br/>";
			hehe += dish.Title;
			hehe += "</h4></center></div>"
			

		}
		hehe += '</div>'
	return hehe
	};

	allDishes.html(this.getDishes());

	

	this.selectFunction();

	// Gör bilderna klickbara, händer saker i controllern
	


		

		this.clickImage = container.find('.food');

		dishSelectController.refreshDishSelect()
	}

}