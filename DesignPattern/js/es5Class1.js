Function.prototype.addMethod = function(name, fn) {
	this.prototype[name] = fn;
}
let Methods = function() {};
Methods.addMethod('checkName', function() {
	console.log("验证姓名")
});
Methods.addMethod('age', () => {
	console.log("12")
})
let m = new Methods()