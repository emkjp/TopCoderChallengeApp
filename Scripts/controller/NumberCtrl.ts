/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

module NumberGenerator {

    export interface Scope extends ng.IScope {
        maxValue: number;
        minValue: number;
        length: number;
        generate(): void;
        result: number[];
        resultTextForCode: string;
    }

    export class Controller {
        // Constructor
        constructor($scope: Scope) {
            $scope.generate = () => {
                var sequence: number[] = [];

                for (var i = 0; i < $scope.length; i++) {
                    var x = this.random($scope.minValue, $scope.maxValue);
                    sequence.push(x);
                }

                $scope.result = sequence;
                $scope.resultTextForCode = this.toArrayText(sequence);
            }
        }

        random(lower: number, upper: number): number {
            return Math.floor(Math.random() * (upper - lower + 1) + lower);
        }

        toArrayText(sequence: number[]): string {
            var text: string = "";

            angular.forEach(sequence, (value) => {
                if (text != "")
                    text += ",";
                text += value;
            });

            return "{" + text + "}";
        }
    }
    
}