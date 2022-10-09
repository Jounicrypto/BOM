
/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

//Example

window.document.title = "Hello JS";



/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/




// let confirmMsg = confirm("Are You Sure");

// console.log(confirmMsg);

// if(confirmMsg === true){

//     console.log("Item Deleted!");
// }else{
//     console.log('Item available in your shopping cart!')
// }


// let prompMsg = prompt("Good Day For You?", "Write Day with 3 Characters!");

// console.log(prompMsg);



/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(counter);
// };

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let counter = setTimeout(sayMsg, 3000, "Adnan", 25);


let div = document.querySelector("div");

function countdown(){

        div.innerHTML -= 1;
        if(div.innerHTML === "0"){
            clearInterval(counter)
        }
}

let counter = setInterval(countdown, 1000);
