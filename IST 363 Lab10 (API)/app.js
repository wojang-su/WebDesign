let app = angular.module('doggoTube', []);

const key = 'AIzaSyDnUf-Lvp0blInbQNdSW3T7qURuyk4yk3I';

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://www.youtube.com/**',
        'https://youtube.com/**'
    ]);
});

app.run(function(){
    
});

app.component('mainHeader', {
    template: `
        <header class="py-2">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="font-weight-light">DoggoTube</h1>
                    </div>
                </div>
            </div>
        </header>
    `
});


app.controller('videosCtrl', function($scope, $http){
    $scope.videos = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            key: key,
            part: 'snippet',
            maxResults: 8,
            q: 'dachshund',
            type: 'video'
        }
    }).then(function(response){
        
        console.log(response.data.items);
        $scope.videos = response.data.items;
    
    }, function(error){

        console.log(error);
    });
});

app.controller('playlistCtrl', function($scope, $http){
    $scope.videos = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            key: key,
            part: 'snippet',
            maxResults: 8,
            q: 'corgi',
            type: 'video'
        }
    }).then(function(response){
        
        console.log(response.data.items);
        $scope.videos = response.data.items;
    
    }, function(error){

        console.log(error);
    });
});

app.controller('channelCtrl', function($scope, $http){
    $scope.videos = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            key: key,
            part: 'snippet',
            maxResults: 8,
            q: 'huskey',
            type: 'video'
        }
    }).then(function(response){
        
        console.log(response.data.items);
        $scope.videos = response.data.items;
    
    }, function(error){

        console.log(error);
    });
});
 


app.component('videoItem', {
    bindings: {
        video: '<'
    },
    template:`
        <img ng-src="{{ $ctrl.video.snippet.thumbnails.medium.url }}">
        <div>
            <span class="text-secondary">Video: </span>
            {{ $ctrl.video.snippet.title }}
        </div>
    `
})

app.component('playlistItem', {
    bindings: {
        video: '<'
    },
    template:`
        <img ng-src="{{ $ctrl.video.snippet.thumbnails.medium.url }}">
        <div>
            <span class="text-secondary">Playlist: </span>
            {{ $ctrl.video.snippet.title }}
        </div>
    `
})



app.component('channelItem', {
    bindings: {
        video: '<'
    },
    template:`
        <img ng-src="{{ $ctrl.video.snippet.thumbnails.medium.url }}">
        <div>
            <span class="text-secondary">Channel: </span>
            {{ $ctrl.video.snippet.title}}
        </div>
    `
})

app.controller('searchCtrl', function($scope, $http){
    $scope.videos = [];
    $scope.query = null;

    $scope.search_youtube = function(){

        if($scope.query && $scope.query.trim()) {
            $http({
                url: 'https://www.googleapis.com/youtube/v3/search',
                method: 'GET',
                params: {
                    key: key,
                    part: 'snippet',
                    maxResults: 8,
                    q: $scope.query + 'dog',
                    type: 'video'
                }
            }).then(function(response){

                console.log(response.data.items);
                $scope.videos = response.data.items;
                $scope.query = null;
                
            }, function(error){

                console.log(error);
            });

        }
    }    
});

app.controller('mainCtrl', function($http, $rootscope){
    $scope.video_is_playing = false;
    $scope.playing_video_id = null;
    $scope.play_video = $scope.video.id;
})