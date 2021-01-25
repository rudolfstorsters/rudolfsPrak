
function callWindow() {
    var skaitlis = document.getElementById("myInput").value;
    /*skaitlis.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn").click();
           }
         });    */
    validateInput(skaitlis);
}

function goBack() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("reload");
    x.appendChild(t);
    document.body.appendChild(x);
    x.addEventListener("click", function () {
        window.location.reload()
    });
}

// Validating prompt input
function validateInput(input) {
    console.log(input)
    if (input < 0 || input > 10) {
        alert("ievadiet skaitli 0-10")
    } else if (isNaN(input) ) {
        alert("Ievadiet skaitli!");
    } else if ((input > 3) && (!isNaN(input))) {
        document.write("The exam has been passed. Your score is:  " + writeResult(input) + "!"  + "<br>");
        goBack()
        //writeResult(text);
    } else if ((input < 4) && (!isNaN(input))) {
        document.write("Exam was not passed. Your score is: " + writeResult(input) + "<br>");
        goBack()
    
    }
}

// Displaying result
function writeResult(number) {
    var text = "";
    console.log("type of input before praseInt: " + typeof number)
    number = parseInt(number)
    console.log("type of input after praseInt: " + typeof number)
    switch (number) {
        case 0:
            text = "zero";
            break;
        case 1:
            text = "unsatisfactory";
            break;
        case 2:
            text = "unsatisfactory";
            break;
        case 3:
            text = "unsatisfactory";
            break;
        case 4:
            text = "almost mediocre";
            break;
        case 5:
            text = "mediocre";
            break;
        case 6:
            text = "amost good";
            break;
        case 7:
            text = "good";
            break;
        case 8:
            text = "very good";
            break;
        case 9:
            text = "excellent ";
            break;
        case 10:
            text = "outstanding";
            break;
        default:
            text = "Invalid";
    }
    console.log(text)
    return text;
}


class SortUtils {
  
    constructor() {
     console.log("Constructor for SortUtils"); 
    }
   
    sortAscending(n) {
      var cycle = false;
      while (!cycle) {
          cycle = true;
          for (var i = 0; i < n.length; i++) {
              if (n[i - 1] > n[i]) {
                  cycle = false;
                  var temporary = n[i - 1];
                  n[i - 1] = n[i];
                  n[i] = temporary;
              }
          }
      }
  
      return n;
    }
    
    sortDescending(n) {
      for (var i = 1; i < n.length; i++) {
          var temporary = n[i];
          for (var j = i - 1; j >= 0 && (n[j] < temporary); j--) {
              n[j + 1] = n[j];
          }
          n[j + 1] = temporary;
      }
      return n;
    }
  }
   
   class AdvancedArray extends SortUtils {
      arr = [];
      name = "unknown";
    
        constructor(initArray, arrayName) {
        super();
        console.log("Constructor for AdvancedArray");
        if (Array.isArray(initArray)) {
            this.arr = initArray;
        } else {
         console.error("Class initializer should be an array not " + typeof initArray); 
        }
        if(arrayName) {
          this.name = arrayName
        }
        
        // Bind class this to each function
        this.sortAsc = this.sortAsc.bind(this);
        this.srotDsc = this.sortDsc.bind(this);
      }
    
        sortAsc() {
        this.arr = super.sortAscending(this.arr);
      }
    
        sortDsc() {
       this.arr = super.sortDescending(this.arr);
      }
    
        getArray = () => {
        return this.arr;
      }
    
        getName = () => {
        return this.name;
      }
    
        setName = (name) => {
       this.name = name; 
      }
   
   }
  
   const brrAdvanced = new AdvancedArray(brr);
   
   console.log(brrAdvanced.getName()); // unknown
   brrAdvanced.setName("My new name");
   
   brrAdvanced.sortAsc();
    
   console.log(brrAdvanced.getArray());
   brrAdvanced.sortDsc();
   console.log(brrAdvanced.getArray());
    
    
    
    
    