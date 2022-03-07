document.getElementById('btn1').addEventListener('click',btn1);
document.getElementById('btn2').addEventListener('click',btn2);
document.getElementById('btn3').addEventListener('click',btn3);
document.getElementById('btn4').addEventListener('click',btn4);
document.getElementById('btn5').addEventListener('click',btn5);
document.getElementById('btn6').addEventListener('click',btn6);
document.getElementById('btn7').addEventListener('click',btn7);
document.getElementById('btn8').addEventListener('click',btn8);
document.getElementById('btn9').addEventListener('click',btn9);
document.getElementById('btn10').addEventListener('click',btn10);
document.getElementById('btn11').addEventListener('click',btn11);
document.getElementById('btn12').addEventListener('click',btn12);





function btn1(){
	var count = document.getElementById('strCount');
	str=document.getElementById('text').value; 
	document.getElementById('strCount').style.display="block";
	count.innerHTML="Charactor Count : " + str.length; 

}

function btn2(){
	var str=document.getElementById('text');
	var final=str.value.toUpperCase();
	str.value = final
}

function btn3(){
	var str=document.getElementById('text');
	var final=str.value.toLowerCase();
	str.value=final;
}


function btn4(){
	var count = 0;
	var str = document.getElementById('text').value;
	for(var i in str){
		if(str[i]=="A" || str[i]=="E" || str[i]=="str[i]" || str[i]=="O" || str[i]=="U" || str[i]=="a" || str[i]=="str[i]" || str[i]=="o" || str[i]=="e" || str[i]=="u"){
			count++;
		}
	}
	vowel = document.getElementById('vowelCount');
	document.getElementById('vowelCount').style.display="block";
	vowel.innerHTML="Vowel Count : " + count;

}


function btn5(){
	var count=0
	var str = document.getElementById('text').value;
	var conso = document.getElementById('consoCount');

	for(var i in str){
		if(str[i] != "A" && str[i] !=  "E" && str[i] !=  "I" && str[i] !=  "O" && str[i] !=  "U" && str[i] !=  "a" && str[i] !=  "e" && str[i] !=  "i" && str[i] !=  "o" && str[i] !=  "u"){
			count++;
		}
	}
	document.getElementById('consoCount').style.display="block";
	conso.innerHTML="Consonet Count : " + count;
}

function btn6(){
	var str = document.getElementById('text');
	var final=str.value;
	str.style.fontWeight=900;
}

function btn7(){
	var str = document.getElementById('text');
	var final=str.value;
	str.style.fontStyle='italic';
}

function btn8(){
	var str = document.getElementById('text');
	var final=str.value;
	str.style.fontStyle="normal";
	str.style.fontWeight=200;
}


function btn9(){
	var str = document.getElementById('text');
	var final = str.value;
	str.value = final.replace(/\s /g,'');
}

function btn10(){
	var str = document.getElementById('text').value;
	var btn = document.createElement("a");
	btn.href=window.URL.createObjectURL(new Blob([str],{type:"text/plain"}));
	btn.download="demo.txt";
	btn.click();
}

function btn11(){
	var str = document.getElementById('text');
	var final = str.value;
	str.value='';
}

function btn12(){
	location.reload();
	var str=document.getElementById('text');
	str.value=''
}