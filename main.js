
// in this the foodieapp variable is defined
var foodieApp = angular.module('foodieApp',['ngRoute']);
// using controller files are linked
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	// main.html is linked
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	// restaurant.html is linked
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/variant', {
		templateUrl: 'pages/variant.html',
		controller: 'variantController'
	})
})
// main controller works in this section
foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	id: '1',
	name: 'Ali baba',
	address: '9A-10B-10C, Forecourt Area, Opposite Realtech Park, Vashi, Navi Mumbaii',
	location: 'Yamuna nagar',
	category: 'Casual Dining, Traditional',
	vote: '4.2',
	cuisines: 'Briyani,North indian,Chinese',
	cost: '800',
	hours: 'daily  11 AM to 2:30 AM',
	bestDish: {
	name: 'Vegetable Briyani',
	image: 'https://images.pexels.com/photos/161675/abstract-barbeque-bbq-beauty-161675.jpeg?h=350&auto=compress&cs=tinysrg'
	},
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXT78jrutywarm2Hfmvm9Zx-SS0bfhhD_Jy8auQ3I8kZHtEiYFBA'
},

// infromation about second
$scope.restaurants= {
		id: '2',
	name: 'Farzi Cafe',
	address: '38/50, Level 8, Block E , Inner Circle, Indore',
	location: 'Indore',
	category: 'Casual Dining',
	vote: '4',
	cuisines: 'Modern Indian,italian',
	cost: '2500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
// information about second
$scope.restaurants = {
		id: '3',
	name: 'Shang Palace',
	address: '19 Ranjit Palace Shang Palace Ashoka Road',
	location: 'Delhi',
	category: 'Casual Dining',
	vote: '3.2',
	cuisines: ' Chinese, Asian, Soups',
	cost: '4000',
	hours: '16hrs.',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	},
	image: 'https://media-cdn.tripadvisor.com/media/photo-f/0b/0e/3f/20/shang-palace-seating.jpg'
},

// third restaurant
$scope.restaurants = {
		id: '4',
	name: 'Cafe Lota',
	address: '#11 of 11,925 Restaurants in New Delhi',
	location: 'Chandigarh',
	category: 'Casual Dining,cafe',
	vote: '4.5',
	cuisines: 'Indian cafe,Vegetable Options',
	cost: '2200',
	hours: '7am-12pm(sunday close)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/13/07/59/cafe-lota.jpg'
},

// fourth restaurant
$scope.restaurants = {
		id: '5',
	name: 'Moti Mahal',
	address: '3703 Daryaganj,patiala',
	location: ' Patiala',
	category: 'Punjabi food',
	vote: '3.4',
	cuisines: 'Butter Chicken,Kadai paneer',
	cost: '2000',
	hours: '10am-10pm',
	bestDish: {
	name: 'RASEELA PANEER',
	image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
		image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},







// sixth restaurant


$scope.restaurants = {
		id: '6',
	name: 'Lodi The Garden Restaurant',
	address: '#30 of 11,925 Restaurants ',
	location: 'Panchkula',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Indian,Italian,Asian,European',
	cost: '2000',
	hours: '12 Noon to 8 PM (Mon-Sun)',

image: 'https://media-cdn.tripadvisor.com/media/photo-f/02/49/c4/32/lodhi-the-garden-restaurant.jpg'
},
]

})
// location is added to go for another page
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
// different parameters are added

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	// $scope.ingredients = [];
	var restaurants = [{
		id:'1',
	name: 'Ali baba',
	address: '9A-10B-10C, Forecourt Area, Opposite Realtech Park, Vashi, Navi Mumbaii',
	location: 'Yamuna nagar',
	category: 'Casual Dining,Traditional',
	vote: '4.2',
	cuisines: 'Briyani,North indian,Chinese',
	cost: '800',
	hours: 'daily  11 AM to 2:30 AM',
	bestDish: {
	name: 'Vegetable Briyani',
	image: 'https://images.pexels.com/photos/161675/abstract-barbeque-bbq-beauty-161675.jpeg?h=350&auto=compress&cs=tinysrg'
	},
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LuZLVKrBJwBzA9BIum05gxvrnYfuezNkRpCYXzfxvGfYvB-x'
},

// second
$scope.restaurants= {
  id:'2',
	name: 'Farzi Cafe',
	address: '38/50, Level 8, Block E , Inner Circle, Indore',
	location: 'Indore',
	category: 'Casual Dining',
	vote: '4',
	cuisines: 'Modern Indian,italian',
	cost: '2500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
// third
$scope.restaurants = {
		id: '3',
	name: 'Shang Palace',
	address: '19 Ranjit Palace Shang Palace Ashoka Road',
	location: 'Delhi',
	category: 'Casual Dining',
	vote: '3.2',
	cuisines: ' Chinese, Asian, Soups',
	cost: '4000',
	hours: '16hrs.',
	bestDish: {
	name: 'Corn Pizza',

image:'https://media-cdn.tripadvisor.com/media/photo-f/0b/0e/3f/20/shang-palace-seating.jpg'
	},
	image: 'https://media-cdn.tripadvisor.com/media/photo-f/0b/0e/3f/20/shang-palace-seating.jpg'
},
// fourth
$scope.restaurants = {
		id: '4',
	name: 'Cafe Lota',
	address: '#11 of 11,925 Restaurants in New Delhi',
	location: 'Chandigarh',
	category: 'Casual Dining,cafe',
	vote: '4.5',
	cuisines: 'Indian cafe,Vegetable Options',
	cost: '2200',
	hours: '7am-12pm(sunday close)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/13/07/59/cafe-lota.jpg'
},
// fifth
$scope.restaurants = {
		id: '5',
	name: 'Moti Mahal',
	address: '3703 Daryaganj,patiala',
	location: ' Patiala',
	category: 'Punjabi food',
	vote: '3.4',
	cuisines: 'Butter Chicken,Kadai paneer',
	cost: '2000',
	hours: '10am-10pm',
	bestDish: {
	name: 'RASEELA PANEER',
	image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
	image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
	// sixth
$scope.restaurants = {
		id: '6',
	name: 'Lodi The Garden Restaurant',
	address: '#30 of 11,925 Restaurants ',
	location: 'Panchkula',
	category: 'Casual Dining',
	vote: '4.3',
	cuisines: 'Indian,Italian,Asian,European',
	cost: '2000',
	hours: '12 Noon to 8 PM (Mon-Sun)',

image: 'https://media-cdn.tripadvisor.com/media/photo-f/02/49/c4/32/lodhi-the-garden-restaurant.jpg'
},
]
// https is given in this section
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key de4d6d6438724e91b34459b290720422',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
						var ingredients = response.data.outputs[0].data.concepts;
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						}
	    		// $('.ingredients').html(list);
	    		console.log(list);
	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}
})
// variant is added fot the veg or non-veg
foodieApp.controller('variantController',function($scope) {

})
