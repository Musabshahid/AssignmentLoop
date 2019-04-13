
/*Q:1*/
function br2(){

document.write("<br><br>");

}
function br1(){

document.write("<br>");

}
document.write("<h2>Question : 1</h2>");
for(i=0;i<5;i++)
{
	document.write("Hello World<br>");
}

/*Output
Hello World
Hello World
Hello World
Hello World
Hello World*/


/*Q:2*/

document.write("<h2>Question : 2</h2>");
for(i=1;i<11;i++)
{
	document.write(i+ "<br>");
}
/*
output
1
2
3
4
5
6
7
8
9
10
*/

/*Q:3*/

// document.write("<h2>Question : 3</h2>");
// input_tbl=prompt("Enter a number to print its table");
// input_tbl_range=prompt("Enter length of multiplication table");

// for(i=1;i<=input_tbl_range;i++)
// {
// 	result=input_tbl*i;
// 	document.write(input_tbl+" x " +i+ " = " +result + "<br>");
// }
/*
output
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
2 x 11 = 22
2 x 12 = 24
2 x 13 = 26
2 x 14 = 28
2 x 15 = 30
*/


document.write("<h2>Question : 4</h2>");
var a = ["Nokia","Apple","Samsung","Sony"];
for(i=0;i<a.length;i++)
{
	document.write(a[i]+ "<br>");
}

/*
Output
Nokia
Apple
Samsung
Sony
*/


document.write("<h2>Question : 5</h2>");
var fruits = ["Banana","Apple","Peach","Watermelon"];
for(i=0;i<fruits.length;i++)
{
	document.write(fruits[i]+ "<br>");


}
br1();
for(i=0;i<fruits.length;i++)
{
	document.write("Element of index "+i+ " is " +fruits[i]+ "<br>" );


}
/*Output

Banana
Apple
Peach
Watermelon

Element of index 0 is Banana
Element of index 1 is Apple
Element of index 2 is Peach
Element of index 3 is Watermelon
*/

// document.write("<h2>Question : 6</h2>");

// prom = prompt("Enter number");

// for(i=0;i<prom;i++)
// {
// 	prompt("Enter value at index " +i+)
// } 

//  document.write("<h2>Question : 6</h2>");
// var n_items=prompt("Enter Number of items");
// var arr = [];                              
// for (var i = 0; i < n_items; i++) {             
//   arr.push(prompt('Enter value for index '+i)); 
// }
// document.write("<u>Number of items</u> <b>:</b> " +arr.length );
// document.write("<br><u>Items</u> <b>:</b><br>"+arr.join("<br>"));

/*
output
Number of items : 2
Items :
one
two
*/
 document.write("<h2>Question : 7</h2>");
document.write("<h4>Counting : </h4>" );
for(i=1;i<=15;i++)
{
	document.write(i+",");

}
/*
output
Counting : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,

*/
br1();
document.write("<br><h4>Reverse Counting : </h4>" );
for(i=10;i>0;i--)
{
	document.write(i+",");

}
/*
output
Reverse Counting : 10,9,8,7,6,5,4,3,2,1,
*/
br1();
document.write("<br><h4>Even Counting : </h4></h4>" );
for(i=0;i<=20;i++)
{
	if(i%2==0)
	{
	document.write(i+",");	
	}
}
/*
output
Even Counting : 0,2,4,6,8,10,12,14,16,18,20,*/
br1();
document.write("<br><h4>Odd Counting : </h4>" );
for(i=0;i<=20;i++)
{
	if(i%2!==0)
	{
	document.write(i+",");	
	}
}
/*
output
Odd Counting : 1,3,5,7,9,11,13,15,17,19,
*/
br1();
document.write("<br><h4>Series : </h4>" );
for(i=2;i<=20;i++)
{
	if(i%2==0)
	{
	document.write(i+"k,");	
	}
}
/*
output
Series : 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k,
*/


/*queation no 8*/

   // var bakkery_items = prompt("Q:8.welocome to Sabahat bakers what do you want to order sir/madam", "chips");//Tucson
   //      var bakkery = ["cake", "apple pie", "cookies", "chips", "patties"];

   //      var match = false; 

   //      for (var i = 0; i < bakkery.length; i++) {
   //          if (bakkery_items === bakkery[i]) {
   //              match = true;
   //          }
   //      }

   //      if (match === true) {
   //          alert("Order Succesfully Placed");
   //      } else if (match === false) {
   //          alert("we're sorry " +bakkery_items+ " its not available in here");
   //      }

/*Output
welocome to Sabahat bakers what do you want to order sir/madam 
|cookie|

Order Succesfully Placed

*/

/*queation no 8*/
		document.write("<h2>Question : 9:10:11</h2>");
		// var largest_number = [1,2,3,4,5];
		// document.write("Numbers : "+largest_number);
		// console.log(Math.max(largest_number));
		// document.write(Math.max("Largest Number is : "+largest_number));


var array2 = [14, 34, 54,44];
document.write("Numbers : "+array2);
br1();

document.write("Largest Number is:"+Math.max(...array2));

// output: 54
br1();
document.write("Smallest Number is:"+Math.min(...array2));
// output: 14
//Question  11 is same as 9/10




document.write("<h2>Question : 13</h2>");
var students = ["Ali", "Sami", "Taha", "Inam"];
 var scores  = [58, 73, 89, 90];

 document.write("<table style='text-align:center;width:150px;border:1px solid;border-collapse: collapse; '><tr><th>Name</th><th>Score</th></tr><tr><td>"+students[0]+"</td><td>"+scores[0]+"</td></tr><tr><td>"+students[1]+"</td><td>"+scores[1]+"</td></tr><tr><td>"+students[2]+"</td><td>"+scores[2]+"</td></tr><tr><td>"+students[3]+"</td><td>"+scores[3]+"</td></tr></table>");


document.write("<h2>Question : 15</h2>");
multi_array = [ [1,2,3] , [4,5,6] , [7,8,9]];
// document.write(multi_array[0]); 

	// document.write(multi_array[i]+"<br>");	
for(j=0;j<multi_array.length;j++)
{
	 document.write(multi_array[j]+"<br>");	
}
/*output
1,2,3
4,5,6
7,8,9
*/


document.write("<h2>Question : 16</h2>");

document.write("<br><h4>Even/Odd Reporter : </h4></h4>" );
var check = false;
for(i=1;i<=20;i++)
{	
	if(i%2==0)
	{
	document.write(i+" is even <br>");	
	}
	else if(!i%2==0)
	{
			document.write(i+" is odd <br>");	

	}
}
/*Output
1 is odd 
2 is even 
3 is odd 
4 is even 
5 is odd 
6 is even 
7 is odd 
8 is even 
9 is odd 
10 is even 
11 is odd 
12 is even 
13 is odd 
14 is even 
15 is odd 
16 is even 
17 is odd 
18 is even 
19 is odd 
20 is even 
*/
document.write("<h2>Question : 17</h2>");
for (var k=1;k<=7;k++)
 {	
	for (var l=k;l<=7;l++) 
		{
		 	document.write("*");
		}
		document.write("<br>");
 }

/*Output
--
*******
******
*****
****
***
**
*
--

*/
document.write("<h2>Question : 19(a)</h2>");
for (var k=1;k<=4;k++)
 {	
	for (var l=1;l<=5;l++) 
		{
		 	document.write("*");
		}
		document.write("<br>");
 }

/*Output--

*****
*****
*****
*****


-*/
document.write("<h2>Question : 19(b)</h2>");
for (var k=1;k<=5;k++)
 {	
	for (var l=1;l<=k;l++) 
		{
		 	document.write("*");
		}
		document.write("<br>");
 }

/*Output--
*
**
***
****
*****


-*/

document.write("<h2>Question : 19(c)</h2>");
for (var k=1;k<=5;k++)
 {	
	for (var l=k;l<=5;l++) 
		{
		 	document.write("*");
		}
		document.write("<br>");
 }

/*Output--
*****
****
***
**
*


-*/





//Ques 12/14/15(nested)/	 