var a = 1;

function change(b) {
    b=2;
}

change(a);
console.log(a);

function changeObj(d)
{
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

