var password= [];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //index 0-25
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //index 0-9
var charArray = ["!", "@", "#", "$", "%", "&", "*"]; //index 0-6
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //index 0-25

//fucntion for "Copy to Clipboard" button:
function copyCheck() {
    var copyText= document.getElementById("pwBox");
    copyText.select();
    document.execCommand("copy");
    alert("Copied"); 
};

//optional complexity variables:

var addNo = document.getElementById("addNo");
var caps = document.getElementById("caps");
var char =document.getElementById("char");
var optLength= document.getElementById("optLength");

optLength.defaultValue = 8;

//When "Generate" button is clicked:

function RunNewGen(){
    password=[];

    //No complexities selected
    if (addNo.checked===false && caps.checked===false && char.checked===false){
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num]; 
            }
            document.getElementById("pwBox").textContent= password;
            console.log(password, "no additional complexities selected");
    }

        //just addNo checked:
    else if (addNo.checked===true && caps.checked===false && char.checked===false){
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password = password.split("");
            
            //loop to update password array to set specifications
            ranLoop = Math.floor(Math.random()*password.length/2+1);
            for (var e=0; e < ranLoop; e++) {
                var ranIndex= Math.floor(Math.random()*password.length);
                var ranNo= Math.floor(Math.random()*10);
                var replaceNo = numArray[ranNo];
                password.splice(ranIndex, 1, replaceNo);
            }
                password = password.join("");
                document.getElementById("pwBox").textContent=password;
                console.log(password, "only numeric values added");
            

            //just caps checked
    }else if (addNo.checked===false && caps.checked===true && char.checked ===false){
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];
            }
            password= password.split("");

            //loop to update password array to set specifications
            ranLoop = Math.floor(Math.random()*password.length/2+1);
            for (var e =0; e <ranLoop; e++) {
                var ranIndex =Math.floor(Math.random()*password.length); 
                var replaceCap = password[ranIndex].toUpperCase();
                password.splice(ranIndex, 1, replaceCap);
            }
            password= password.join("");
            document.getElementById("pwBox").textContent= password;
            console.log(password, "only capitalized values added");

            //just char checked:
    }else if (addNo.checked===false && caps.checked===false && char.checked ===true) {
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password=password.split("");
            
            //loop to update password array to set specifications
            ranLoop = Math.floor(Math.random()*password.length/4+1);
            for (var e =0; e < ranLoop; e++) {
                var ranIndex =Math.floor(Math.random()*password.length); 
                var ranChar = Math.floor(Math.random()*6);
                var replaceChar =charArray[ranChar];
                password.splice(ranIndex, 1, replaceChar);
            }
            password= password.join("");
            document.getElementById("pwBox").textContent= password;
            console.log(password, "only special characters added");
           

            //addNo & caps
    }else if (addNo.checked===true && caps.checked===true && char.checked ===false) {
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password= password.split("");

            //loop to update password array to set specifications (Capitals first)
            ranLoop = Math.floor(Math.random()*password.length/2+1);
            for (var e =0; e <ranLoop; e++) {
                var ranIndex =Math.floor(Math.random()*password.length); 
                var replaceCap = password[ranIndex].toUpperCase();
                password.splice(ranIndex, 1, replaceCap);

                //to determine index of second number to be replaced (Numeric)
                var ranIndex2 =Math.floor(Math.random()*password.length);
                var ranNo = Math.floor(Math.random()*10);
                var replaceNo =numArray[ranNo];
                password.splice(ranIndex2, 1, replaceNo); 
            }
            password= password.join("");
            document.getElementById("pwBox").textContent= password;
            console.log(password, "numeric and capitalized values added");

               //addNo & char
    }else if (addNo.checked===true && caps.checked===false && char.checked ===true) {
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password =password.split("");
           
             //loop to update password array to set specifications
             ranLoop = Math.floor(Math.random()*password.length/2+1);
             for (var e =0; e < ranLoop; e++) {
                 var ranIndex =Math.floor(Math.random()*password.length); 
                 var ranChar = Math.floor(Math.random()*6);
                 var replaceChar =charArray[ranChar];
                 password.splice(ranIndex, 1, replaceChar);
             
                //to determine index of second number to be replaced (Numeric)
                var ranIndex2 =Math.floor(Math.random()*password.length);
                var ranNo = Math.floor(Math.random()*10);
                var replaceNo =numArray[ranNo];
                password.splice(ranIndex2, 1, replaceNo); 
                }
                password= password.join("");
                document.getElementById("pwBox").textContent= password;
                console.log(password, "numeric and special characters added");

            //caps & char
    }else if (addNo.checked===false && caps.checked===true && char.checked ===true) {
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password= password.split("");

            //loop to update password array to set specifications
            ranLoop = Math.floor(Math.random()*password.length/2+1);
            for (var e =0; e < ranLoop; e++) {
                var ranIndex =Math.floor(Math.random()*password.length); 
                var replaceCap = password[ranIndex].toUpperCase();
                password.splice(ranIndex, 1, replaceCap);

                var ranIndex2 =Math.floor(Math.random()*password.length); 
                var ranChar = Math.floor(Math.random()*6);
                var replaceChar =charArray[ranChar];
                password.splice(ranIndex2, 1, replaceChar);
            }
            password =password.join("");
            document.getElementById("pwBox").textContent= password;
            console.log(password, "capitalized values and special characters added");

            //all complexities
    }else if (addNo.checked===true && caps.checked===true && char.checked ===true) {
        for (var i= 0; i < optLength.value; i++) {
            var num = Math.floor(Math.random()*lowerArray.length);
            password = password+ lowerArray[num];   
            }
            password= password.split("");

            //loop to update password array to set specifications
            ranLoop = Math.floor(Math.random()*password.length/2+1);
            for (var e =0; e < ranLoop; e++) {
                var ranIndex =Math.floor(Math.random()*password.length);
                var ranNo = Math.floor(Math.random()*10);
                var replaceNo =numArray[ranNo];
                password.splice(ranIndex, 1, replaceNo); 

                var ranIndex2 =Math.floor(Math.random()*password.length); 
                var replaceCap = password[ranIndex2].toUpperCase();
                password.splice(ranIndex2, 1, replaceCap);

                var ranIndex3 =Math.floor(Math.random()*password.length); 
                var ranChar = Math.floor(Math.random()*6);
                var replaceChar =charArray[ranChar];
                password.splice(ranIndex3, 1, replaceChar);
            }
            password= password.join("");
            document.getElementById("pwBox").textContent= password;
            console.log(password, "All complexities selected");
    } 

}