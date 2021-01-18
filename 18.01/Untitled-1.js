/*

callWindow();

// Calling prompt window
function callWindow(){
    var skaitlis = parseInt(prompt("Ievadi skaitli", ""));
    console.log(skaitlis);
    // return false;
    validateInput(skaitlis);

}

// Validating prompt input
function validateInput(input){
    if(input > 5){
        alert("Ievadiet mazāku skaitli");
        callWindow();
        
    }else if(isNaN(input)){
        alert("Ievadiet skaitli!");
        callWindow();
    }else{
        writeResult(input);
    }
}

// Displaying result
function writeResult(number){
    var text = "";

    switch(number){
        case 1:
            text = "Viens";
        break;
        case 2:
            text = "Divi";
        break;
        case 3:
            text = "Trīs";
        break;
        case 4:
            text = "Četri";
        break;
        case 5:
            text = "Pieci";
        break;
        default:
            text = "Neatbilst vērtība";
    }

    document.write(text);
}

*/





/*

function validate(text){
    if(text == null){
      return false;
  }else{
      return true;
  }
}

var input = prompt("Ievadi vērtību", "");

if(validate(input)){
    document.write("Tika ievadīts: " + input);
}

   



function callWindow(){
    
    var data = prompt("Ievadi jebko", "");
    if(checkInput(data)){

        document.write(data)
    }

}

function checkInput(data){
    if(data == null || data == ""){
        alert("null != jebko")
        callWindow()
       return false;
        
    }else{
       return true;
    }
}
    
*/




function callWindow(){
    var skaitlis = parseInt(prompt("Ievadi skaitli", ""));
    console.log(skaitlis);
    // return false;
    validateInput(skaitlis);
    return ''
}

/*
const myFn = (longtermParam) => (param) => {
    console.log(longtermParam + param)
}

myFn(param1)(param2);
const withLongTerm = myFn("Sis vertejums ir zems");
withLongTerm(", jusu vertejums ir 1")
withLongTerm(", jusu vertejums ir 2")
withLongTerm(", jusu vertejums ir 3")
*/ 

// Validating prompt input
function validateInput(input){
    var text = "";
    if(input > 3){
        alert("eksamens ir nokartots. Jusu vertejums ir" + writeResult(input));
       
        //writeResult(text);
    }else if(input < 4){
        alert("eksamens nav nokartots. Jusu vertejums ir  "+ writeResult(input));
    }
    
    else if(isNaN(input)){
        alert("Ievadiet skaitli!");
        callWindow();
    }else{
        writeResult(text);
    }
}

// Displaying result
function writeResult(number){
    var text = "";

    switch(number){
        case 1:
            text = "Viens";
        break;
        case 2:
            text = "Divi";
        break;
        case 3:
            text = "Trīs";
        break;
        case 4:
            text = "Četri";
        break;
        case 5:
            text = "Pieci";
        break;
        case 6:
            text = "sesi";
        break;
        case 7:
            text = "septini";
        break;
        case 8:
            text = "astoni";
        break;
        case 9:
            text = "devini ";
        break;
        case 10:
            text = "desmit";
        break;
        default:
            text = "Neatbilst vērtība";
    }
    document.write(text);
    return text;
}


callWindow()






/*

function calcNegative (answers, ){
    for (let i = 0; i < positive.length; i++) {
        position = positive[i] - 1;
        if (answers[position] === 1) {
            group = group + 1
        }

}



function showMess (mess, count=1){
    for (let i=0; i<count; i++)
    console.log(mess, " ", i);
    }
    
    showMess ("bumbās", 5);




    function testOnly(a, b) {
        let result = a * b;
        return result;
        };
        
        
        let x;
        x=testOnly(7,7);
        console.log(x, "funkcijas rezultāts");
    


        let atb=[99,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0];
let gr1_poz=[1, 3, 8, 10, 13, 17, 22, 25, 27, 37, 39, 44, 46, 49, 53, 56];
let gr1_neg=[5, 15, 20, 29, 32, 34, 41, 51];
let gr2_=[2, 4, 7, 9, 11, 14, 16, 19, 21, 23, 26, 28, 31, 33, 35, 38, 40, 43, 45, 47, 50, 52, 55, 57];
let gr3_poz=[6, 24, 36];
let gr3_neg=[12, 18, 30, 42, 48, 54];

let gr1_summa=0, gr2_summa=0, gr3_summa=0, poz;

function massCount(masAtb,masPoz,indexAtb) {
let summa=0;

for (let i = 0; i < masPoz.length; i++) {
poz=masPoz[i];
if (masAtb[poz]==indexAtb){
summa+=1;
};
// console.log(poz,"poz", summa, "summa", masAtb[poz], "adrese" );
};
return summa;
}

gr1_summa=massCount(atb,gr1_poz,1);
gr1_summa+=massCount(atb,gr1_neg,0);
gr2_summa=massCount(atb,gr2_,1);
gr3_summa=massCount(atb,gr3_poz,1);
gr3_summa+=massCount(atb,gr3_neg,0);
console.log(gr1_summa, " fun",gr2_summa," fun",gr3_summa," fun");


gr1_summa=0;
for (let i = 0; i < gr1_poz.length; i++) {
poz=gr1_poz[i];
if (atb[poz]==1){
gr1_summa+=1;
};
// console.log(" + +", poz , " ",atb[poz]," ",gr1_summa);
}


for (i = 0; i < gr1_neg.length; i++) {
poz=gr1_neg[i];
if (atb[poz]==0){
gr1_summa+=1;
};
// console.log("- - ",poz, " ",atb[poz]," ",gr1_summa);
}

console.log(gr1_summa, "lineāri");

*/