/* 

	=====================BinoJS=====================================
	Created with love by Akshat Joshi.
	Visit me at: http://akshatweb.in .
	
	This is a simple implementation of the binomial theoram for the expansion of (a+b) to the power n, where n is any natural number.
	Simply call the binomial function and then you are good to go.



*/

function fact(num)
{
	product = 1;
	var i;
	for(var i=num;i>0;i--)
	{
		product = product*i;
	}
	return product;
	

}
function combi(from,to)
{
	a= fact(to);
	b = fact(from)*fact(to-from);
	if(a/b != 1)
	{
		return a/b;
	}
	else
	{
		return "";
	}
	
}
function binomial(power)
{
	if(power != 0)
	{
	string =  "";
	for(var i=0;i<=parseInt(power);i++)
	{
		fora = parseInt(power)-i;
		forb = i;
		if(fora == 0 && forb == 0)
		{
			string = string + combi(i,parseInt(power)).toString();
		}
		else if(fora == 0)
		{
			string = string + combi(i,parseInt(power)).toString()+"b<sup>"+forb.toString()+"</sup>   ";
		}
		else if (fora == 1 && forb == 1)
		{
			string = string + combi(i,parseInt(power)).toString()+"ab";
		}
		else if(fora == 1 && forb == 0 )
		{
			string = string + combi(i,parseInt(power)).toString()+"a ";
		}
		else if(fora == 0 && forb == 1 )
		{
			string = string + combi(i,parseInt(power)).toString()+"b ";
		}
		else if(fora == 1)
		{
			string = string + combi(i,parseInt(power)).toString()+"ab<sup>"+forb.toString()+"</sup>  ";
		}
		else if(forb == 1)
		{
			string = string + combi(i,parseInt(power)).toString()+"a<sup>"+fora.toString()+"</sup>b";
		}
		
		else if(forb == 0)
		{
			string = string + combi(i,parseInt(power)).toString()+"a<sup>"+fora.toString()+"</sup>   ";
		}
		
		else
		{
			string = string + combi(i,parseInt(power)).toString()+"a<sup>"+fora.toString()+"</sup>b<sup>"+forb.toString()+"</sup>  ";
		}
		if (i != power)
		{
			string = string + "+";
		}
	}
	document.getElementById('area').innerHTML=string;
	}
	else
	{
		document.getElementById('area').innerHTML="1";
	}
}
