/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var NumberGenerator;
(function (NumberGenerator) {
    var Controller = (function () {
        // Constructor
        function Controller($scope) {
            var _this = this;
            $scope.generate = function () {
                var sequence = [];

                for (var i = 0; i < $scope.length; i++) {
                    var x = _this.random($scope.minValue, $scope.maxValue);
                    sequence.push(x);
                }

                $scope.result = sequence;
                $scope.resultTextForCode = _this.toArrayText(sequence);
            };
        }
        Controller.prototype.random = function (lower, upper) {
            return Math.floor(Math.random() * (upper - lower + 1) + lower);
        };

        Controller.prototype.toArrayText = function (sequence) {
            var text = "";

            angular.forEach(sequence, function (value) {
                if (text != "")
                    text += ",";
                text += value;
            });

            return "{" + text + "}";
        };
        return Controller;
    })();
    NumberGenerator.Controller = Controller;
})(NumberGenerator || (NumberGenerator = {}));
//# sourceMappingURL=NumberCtrl.js.map
