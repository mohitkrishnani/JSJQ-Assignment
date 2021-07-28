let str = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;

console.log("Paragraph: "+str+"\n");
let arr1 = Array();
let s = "";
for(let i=0;i<str.length;i++){
	if (str[i] === "."){
		arr1.push(s);
		s = "";
	}
	else if(str[i]==="!" ||	str[i]==="?"){
		arr1.push(s+str[i]);
		s = "";
	}
	else{
		s = s+str[i];
	}
}

filtered_arr = arr1.filter(function(element){
	if (element.trim().split(' ').length > 3)
		return true
	else
		return false
});

function replaceNumbers(string){
	string = string.trim();
	stringElements = string.split(" ");
	for(let i = 0; i<stringElements.length; i++ ){
		if (Boolean(parseInt(stringElements[i]))){
			stringElements[i] = "X".repeat(stringElements[i].length);
		}
	}
	return stringElements.join(" ");
}

final_Array = filtered_arr.map(replaceNumbers);
final_Array.forEach((element) => { console.log(element)});
