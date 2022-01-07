let app = angular.module("myapp",[]);

app.controller("myctrl", function($scope, $http) {
    
    $http.get('https://api.unsplash.com/photos/?client_id=GHweiIULDANw-KNaZs5fAb1htItlqH1I0w9TSfACXKs&per_page=15&page=8')
        .then(
        (response) => {
            $scope.images = response.data;
            console.log(response.data);
        },
        (error) => {
            console.log(error);
        }
    )
})

// baseURL+"?key" + key + "&q=yellow+flowers&image_type=photo"