var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
sample3();
function sample3() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}
// /*----------------------------------------------------------*/
// sample();
function sample() {
    for (var i = 0; i < 3; i++) {
        console.log("inside function" + i);
    }
    console.log("outside" + i);
}
// /*----------------------------------------------------------*/
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[3];
alert(colorName);
function trial(condition, x) {
    if (condition) {
        var x_1 = 100;
        alert("inside if " + x_1);
        return x_1;
    }
    alert("oustside if " + x);
    return x;
}
trial(false, 0);
trial(true, 0);
// /*----------------------------------------------------------*/
var person = {
    name: "aliya",
    age: 23
};
var variable = "dyyyy";
variable = "bck";
person.name = "xyz";
alert(variable);
alert(person.name);
// /*----------------------------------------------------------*/
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
try1(input);
function try1(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
var _b = [1, 2, 3, 4], first = _b[1], second = _b[3];
console.log(first);
var obj = {
    a: 5,
    b: 6,
    c: "foo",
    d: "bar"
};
var _c = [1, 2, 3, 4], p = _c[0], rest = _c.slice(1);
console.log(p, rest);
var X = obj.a, Y = obj.b;
console.log(X, Y);
/*------------------------------------------------------------*/
var a = [1, 2];
var b = [3, 4];
var c = [0].concat(a, b, [5]);
console.log(c);
var details = { name: "aliya", age: 23 };
var sample = __assign({}, details, { place: "kottayam" });
console.log(sample);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "xyz" };
printLabel(myObj);
/*----------------------------------------------------------*/
var base1 = (function () {
    function base1(theName) {
        this.name = theName;
    }
    base1.prototype.age = function (age) {
        if (age === void 0) { age = 0; }
        console.log(this.name + " aged " + age + "yrs.");
    };
    return base1;
}());
var a = (function (_super) {
    __extends(a, _super);
    function a(name) {
        return _super.call(this, name) || this;
    }
    a.prototype.age = function (age) {
        if (age === void 0) { age = 5; }
        _super.prototype.age.call(this, age);
    };
    return a;
}(base1));
var b = (function (_super) {
    __extends(b, _super);
    function b(name) {
        return _super.call(this, name) || this;
    }
    b.prototype.age = function (age) {
        if (age === void 0) { age = 45; }
        _super.prototype.age.call(this, age);
    };
    return b;
}(base1));
var x = new a("Sample");
var y = new b("xyz");
x.age();
y.agee(34);
var _a;
