/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").style.backgroundColor = "red";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/

document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/

document.getElementsByClassName("profile")[0].innerHTML = "When Doves Cry";
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/

document.getElementsByClassName("profile")[1].innerHTML = "If you love life, don't waste time, for time is what life is made up of.";

/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/

document.getElementsByClassName("alias")[2].innerHTML = "Lieutenant Colonel Preston Packard";

/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/

var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = "Peter Griffin";
nameParent.appendChild(divElement);

/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/

var divElement2 = document.createElement("div");
divElement2.id = "alias8";
divElement2.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(divElement2);

//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

var myCustomProf = document.getElementsByClassName("block3 col-sm-4")[2];

// The Main Man of the Hour
var jarCal = document.createElement("div");
jarCal.id = "real_pseudo";
jarCal.innerHTML = "Jarren Calizo";
jarCal.style.textAlign = "center";

myCustomProf.appendChild(jarCal);

//Nicknames
var jarCal2 = document.createElement("div");
jarCal2.id = "pseudonymity";
jarCal2.innerHTML = "Bar Bar, Math Wizard, DreamChaser_JC <br /> McD3rpster, aloha_jxrren";
jarCal2.style.textAlign = "center";

myCustomProf.appendChild(jarCal2);

//Some Random Phrase I Go By
var jarCal3 = document.createElement("div");
jarCal3.id = "random_phrase";
jarCal3.innerHTML = "&#34;1 Shot, 1 Breeze&#34;";
jarCal3.style.textAlign = "center";

myCustomProf.appendChild(jarCal3);

//Find IMG in source
var jarCal4 = document.getElementsByTagName("img");
console.log(jarCal4); 

//Change HTML Img to Own
jarCal4[8].src = "https://cdn-images-1.medium.com/fit/c/200/200/1*crtFnR7-N2QAEszRJKwYjQ.jpeg";