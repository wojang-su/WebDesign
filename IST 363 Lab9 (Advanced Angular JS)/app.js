let app = angular.module('socialApp', []);

app.controller('mainCtrl', function($scope){
    $scope.data = window.data;

    $scope.facebook_data = $scope.data.filter(function(item){
        return item.type === 'facebook';
    });

    $scope.twitter_data = $scope.data.filter(function(item) {
        return item.type === 'tweet';
    });

    $scope.instagram_data = $scope.data.filter(function(item){
        return item.type === 'instagram';
    });

    $scope.galleries_data = $scope.data.filter(function(item){
        return item.type === 'gallery';
    });


    console.log($scope.data);
    console.log($scope.facebook_data);
});

app.component('mainHeader', {
    template: `
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-12 py-2">
                            <a class="navbar-brand" href="index.html">
                                <abbr title="Information Science Technology">IST</abbr> SocialView
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `
});

app.component('mainFooter', {
    template: `
        <footer class="bg-primary text-white text-center py-4 mt-5 mb-0">
            &copy; 2018
        </footer>
    `
});

app.component('facebookItem', {
    bindings: {
        data: '<'
    },
    template: `
        <div class="social-item"> 
            <div class="text-primary mb-2 font-weight-bold">{{ $ctrl.data.data.page.name }}</div>
            <p>{{ $ctrl.data.data.message }}</p>
        </div>
    `
});


app.component('instagramItem', {
    bindings: {
        data: '<'
    },
    template: `
        <div class="social-item">
            <img ng-src="{{ $ctrl.data.data.images.standard_resolution.url }}"/>
        

            <div class="text-primary mb-2 font-weight-bold">{{ $ctrl.data.data.user.full_name }}</div>

            <p>{{ $ctrl.data.data.caption.text }}</p>
        </div>
    `
});


app.component('twitterItem', {
    bindings: {
        data: '<'
    },
    template: `
        <div class="social-item">
            <div class="text-primary mb-2 font-weight-bold">{{ $ctrl.data.data.user.name }}</div>
            <p>{{ $ctrl.data.data.text }}</p>
        </div>
    `
});

app.component('galleriesItem', {
    bindings: {
        data: '<'
    },
    template: `
        <div class="social-item">
            <img ng-src="{{ $ctrl.data.data.poster.small.url }}"/>
    
            <div>{{ $ctrl.data.data.title }}</div>

        </div>
    `
});