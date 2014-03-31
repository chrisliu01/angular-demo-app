(function(){
  angular.module("store", [ ])
    .controller("StoreController", function(){
      this.products = [
        { name: 'Some Awesome Product', price: 123.45,
          images: [
            { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Some Other Awesome Product', price: 123.45,
          images: [
            { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];
    })
    .controller("ReviewController", function(){
      var Review = function(){
        return {
          body: null,
          stars: 5,
          author: null,
          isEmpty: function(){
            return !(this.body || this.author);
          },
        };
      };

      this.review = new Review;

      this.addReview = function(reviews){
        reviews.push(this.review);

        this.review = new Review;
      }
    })
    .directive("productTitle", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'product-title.html',
      };
    })
    .directive("productGallery", function(){
      return {
        replace: true,
        restrict: 'E',
        controller: function(){
          var current = 0;

          this.setCurrent = function(index){
            current = index;
          };

          this.getCurrent = function(images){
            return images[current];
          };
        },
        controllerAs: 'gallery',
        templateUrl: 'product-gallery.html',
      };
    })
    .directive("productPanels", function(){
      return {
        replace: true,
        restrict: 'E',
        controller: function(){
          var current = 1;

          this.setCurrent = function(index){
            current = index;
          };

          this.isCurrent = function(index){
            return index === current;
          };
        },
        controllerAs: 'panels',
        templateUrl: 'product-panels.html',
      };
    })
  ; // END module(store)
})();
