angular.module('noterious')
  .directive('boardChallenge4', function(){
    var controller = function () {
      var ctrldir = this;

      ctrldir.count = 1;

      ctrldir.incrementCount = function () {
        ctrldir.count += 1;
      }
    };

    var linker = function (scope, element, attrs) {
      $(element).hover(
        function () {
          $(this).children().css('opacity', '0.5');
        },
        function () {
          $(this).children().css('opacity', '1.0');
        }
      );
    };

    return {
      controller: controller,
      controllerAs: 'ctrldir',
      link: linker,
      templateUrl: 'app/boards/board-challenge-4.tmpl.html'
    };
  });