//Module
    let app = angular.module('weather363', ['ui.router']);
//API Key
    const key = '8a5320a6d65414580ea289897cbbe3e7';

//Config
    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/states/home.html',
            controller: 'homeCtrl'
        })
        .state('currentWeather', {
            url: '/:zip/current',
            templateUrl: '/states/current.html',
            controller: 'currentWeatherCtrl'
        })

        .state('forecastWeather', {
            url: '/:zip/forecast',
            templateUrl: '/states/forecast.html',
            controller: 'forecastCtrl'
        })

        $urlRouterProvider.when('home', '/').otherwise('/');
    });

//Controllers
    app.controller('homeCtrl', function($scope, $state) {
        $scope.zip = null;

        $scope.search_weather = function() {
            if ($scope.zip && $scope.zip.length === 5 && !isNaN($scope.zip)) {
                console.log("zip")
                $state.transitionTo('currentWeather', {zip: $scope.zip});
            }

        }
    });

    app.controller('currentWeatherCtrl', function($scope, $stateParams, $http){
        $scope.zip = $stateParams.zip;

        $scope.data = {};

        $scope.search_forcast = function(){
            $state.transitionTo('forecastWeather', {zip: $scope.zip});
        };
        $http({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            params: {
                APPID: key,
                zip: $scope.zip + ',us'
            },
            method: 'GET'
        }).then(function (response){
            console.log(response.data);
            $scope.data = response.data;
        
        }, function (error){
            console.log(error);
        });
    });

    app.controller('forecastCtrl', function($scope, $stateParams, $http, $state){
        $scope.zip = $stateParams.zip;

        $scope.data = {};

        $scope.search_current = function(){
            $state.transitionTo('currentWeather', {zip: $scope.zip});
        };
        $http({
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            params: {
                APPID: key,
                zip: $scope.zip + ',us'
            },
            method: 'GET'
        }).then(function (response){
            console.log(response.data);
            $scope.data = response.data;
        
        }, function (error){
            console.log(error);
        });
    })
//Components
    app.component('mainHeader', {
        templateUrl: '/components/main-header.html'
    });

    app.component('mainFooter', {
        templateUrl: '/components/main-footer.html'
    });
    
