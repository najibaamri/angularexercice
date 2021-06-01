

const divTrois = function(x){
	var s = 0;
	var c = x.toString();
	
	var i;
for (i = 0; i < c.length; i++) {
  var res = c.charAt(i);
  var f = Number(res);
  s += f;
}
if ((s === 3) || (s === 9) || (s === 6)) {
	return true;
}
else return false;
}
exports.divTrois = divTrois;

