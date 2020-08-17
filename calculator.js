function addition()
{
	add_res = Number(num1) + Number(num2);
	document.write(num1 + '+' + num2 + '  ');
	document.write('Answer is' + '    ' + add_res);
}

function substraction()
{
	sub_res = num1-num2;
	document.write(num1 + '-' + num2 + '  ');
	document.write('Answer is' + '    ' + sub_res);
}

function multiplication()
{
	multiply_res = num1*num2;
	document.write(num1 + '*' + num2 + '  ');
	document.write('Answer is' + '    ' + multiply_res);
}

function division()
{
	divide_res = num1/num2;
	document.write(num1 + '/' + num2 + '  ');
	document.write('Answer is' + '    ' + divide_res);
}


var num1 = prompt('Enter First Number');
var num2 = prompt('Enter Second Number');
var operation = prompt('Which operation to perform(Type : add/sub/multiply/divide)');

if (operation == 'add')
{
	addition();
}

else if (operation == 'sub')
{
	substraction();
}

else if (operation == 'multiply')
{
	multiplication();
}

else if (operation == 'divide')
{
	division();
}

else
{

	alert('Invalid Operation')
}
