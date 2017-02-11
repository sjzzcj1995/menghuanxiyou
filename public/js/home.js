var controller = app.controller('homeControl',['$scope','$http',function ($scope,$http) {
			var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				autoplay: 1000,
				loop:true,
				//pagination : '#swiper-pagination1',
				autoplayDisableOnInteraction : false,
		        observer:true,
		        observeParents:true,
		        paginationClickable :true,
			})
		}])
