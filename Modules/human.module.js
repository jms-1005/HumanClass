"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.President = exports.HumanBeing = void 0;
var HumanBeing = /** @class */ (function () {
    function HumanBeing(human) {
        this.human = human;
        //properties
        //name;
        // eyeColor;
        // height;
        // weight;
        // hairColor;
        // birthdate;
        this.dailyWalkMiles = 0;
    }
    //METHODS
    HumanBeing.prototype.walk = function (source, destination) {
        // MOVE HUMAN FROM ONE SPOT TO ANOTHER
        console.log(this.human.name + ' walked from ' + source + ' to ' + destination);
    };
    HumanBeing.prototype.talk = function (words) {
        console.log(this.human.name + ' says ', words);
    };
    HumanBeing.prototype.calculateAge = function () {
        return (31 - this.human.birthdate);
    };
    HumanBeing.prototype.health = function () {
        if (this.human.weight > 80) {
            return this.human.name + ' not healthy';
        }
        else
            return this.human.name + ' is in perfect health';
    };
    return HumanBeing;
}());
exports.HumanBeing = HumanBeing;
var President = /** @class */ (function (_super) {
    __extends(President, _super);
    function President() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    President.prototype.signAgreement = function () {
        return ('Give citizens each a million dollars');
    };
    return President;
}(HumanBeing));
exports.President = President;
