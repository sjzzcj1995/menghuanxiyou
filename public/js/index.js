var app = angular.module('myapp',['ngRoute']);
        app.config(['$routeProvider',function ($routeProvider) {
            $routeProvider
            .when('/home',{templateUrl:'html/home.html',controller:'homeControl'})
<<<<<<< HEAD
            .when('/hm1',{templateUrl:'html/money.html',controller:'hm1Control'})
            .when('/hm3',{templateUrl:'html/baby.html',controller:'hm3Control'})
=======
            .when('/hm2',{templateUrl:'html/role.html',controller:'hm2Control'})
            .when('/hm4',{templateUrl:'html/prop.html',controller:'hm4Control'})
>>>>>>> 4e6accc195842d9514a2e63c65c73ee0921eddae
            .when('/search',{templateUrl:'html/search.html',controller:'searchControl'})
            .when('/car',{templateUrl:'html/car.html'})
            .when('/mine',{templateUrl:'html/mine.html'})
            .otherwise({redirectTo:'html/home'})
        }])
        app.controller('tab',function ($scope) {
            // console.log(shopArr.length);
            // $scope.count = shopArr;
            $scope.arr = [
                {
                    cla:'tabbar-img1-1',
                    word:'首页',
                    index:'0',
                    href:'#/home'
                },
                {
                    cla:'tabbar-img2',
                    word:'搜索',
                    index:'1',
                    href:'#/search'
                },
                
                {
                    cla:'tabbar-img3',
                    word:'购物车',
                    index:'2',
                    href:'#/car'
                },
                {
                    cla:'tabbar-img4',
                    word:'我的',
                    index:'3',
                    href:'#/mine'
                }
            ];

            $scope.cl = function (index) {
                    for(var i = 0; i < $scope.arr.length; i++) {
                        $scope.arr[i].cla = 'tabbar-img'+(i+1)
                    }
                    $scope.arr[index].cla = $scope.arr[index].cla + '-1'
            }
        })