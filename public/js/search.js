app.controller('searchControl',function ($scope,$http) {
    $scope.num = 1;
    function dj () {
        $scope.arr = [];
        //搜索界面的标志量，true隐藏
        $scope.tag = true;
       
        //筛选界面的标志量，true隐藏
        $scope.selecttag = true;
        //搜索建议div块的隐藏和显示
        // $scope.suggestdiv = false;
       
        //输入框输入检测
        $scope.search = function(t) {
            if(t) {
                $scope.tag = false;
                // $(document).one('keydown', function() {
                //     $scope.suggestdiv = true;
                // });
            } else {
                $scope.tag = true;
                $scope.suggestdiv = false;
                $scope.searchmsg = '';
            }
        };

        //点击进入筛选界面
        $scope.selecttagset = function() {
            $scope.selecttag = false;

            $('.search-bar .back').css('display', 'none');
        };
        //筛选的返回
        $scope.selecttagset2 = function() {
            $scope.selecttag = true;
            $('.search-bar .back').css('display', 'block');
        };
        //设置筛选的全服和本服切换
        $scope.sserver = function(num) {
            $('.select .opt .s-server h5').css({
                'background': '#ffffff',
                'color': '#e63535'
            })
            $('.select .opt .s-server h5').eq(num).css({
                'background': '#e63535',
                'color': '#ffffff'
            })
        };
        
        //出售状态隐藏显示
        $scope.flag = false;
        $scope.sschoicestag = function () {
            if (!$scope.flag) {
                $scope.flag = true;
            } else {
                $scope.flag = false;
            }
        }

        
        $http({
            url:'http://127.0.0.1:6587/seek'+ $scope.num,
            method:'get'
        }).success(function (data) {
            // console.log(data)
              $scope.arr = data;
        })
        
    }
    dj()

    $scope.dj1 = function () {
        $scope.num = 1;
        dj()
    }

    $scope.dj2 = function () {
        $scope.num = 2;
        dj()
    }

    $scope.dj3 = function () {
        $scope.num = 3;
        dj()
    }

    $scope.dj4 = function () {
        $scope.num = 4;
        dj()
    }

    $scope.dj5 = function () {
        $scope.num = 5;
        dj()
    }

    $scope.dj6 = function () {
        $scope.num = 6;
        dj()
    }

    $scope.dj7 = function () {
        $scope.num = 7;
        dj()
    }

    $scope.dj8 = function () {
        $scope.num = 8;
        dj()
    }
})