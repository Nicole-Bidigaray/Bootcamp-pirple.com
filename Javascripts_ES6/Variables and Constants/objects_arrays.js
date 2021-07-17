var donut1 = {
    type: "coconut",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayType: function() {
      console.log("Type: " + this.type);
    },
    showSweetness: function() {
      console.log("Sweetness: " + this.sweeteness + "/10");
    },
  };
  
  var donut2 = {
    type: "sprinkles",
    glazed: true,
    sweetness: 10,
    hasChocolate: false,
    sayType: function() {
      console.log("Type: " + this.type);
    },
    showSweetness: function() {
      console.log("Sweetness: " + this.sweeteness + "/10");
    },
  };
  
  // Constructor pattern for creating objects
  function Donut(type, glazed, sweetness, hasChocolate, sayType, showSweetness) {
    this.type = type;
    this.glazed = glazed;
    this.sweeteness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = sayType;
    this.showSweetness = showSweetness;
    // this.sayType = function() {
    //   console.log("Type: " + this.type);
    // };
    // this.showSweetness = function() {
    //   console.log("Sweetness: " + this.sweeteness + "/10");
    // };
  }

  // var coconutDonut = new DonutConstructor("coconut", false, 8, true);
  // console.log(coconutDonut);

  var coconutDonut = new Donut("coconut", false, 8, true, "Donut", "10/10");
  var vanillaDonut = new Donut("vanilla", true, 10, false);
  // coconutDonut.sayType();
  // vanillaDonut.showSweetness();
  console.log(coconutDonut.glazed);
  coconutDonut.tasteGood = true;
  console.log(coconutDonut);

// Arrays
// Collection of data
// var myNamesArray = new Array();
// myNamesArray[0] = "Chris";
// myNamesArray[1] = "Newt";
// myNamesArray[100] = "Chris";
// console.log(myNamesArray.length);

// var myNamesArray = ["Chris", "Jessica", "John", "Jane", ["blue", "orange", "yellow", "red"]];
var myNamesArray = ["Chris", "Zack", "Jessica", "John", "Jane"];
var slicedArray = myNamesArray.slice(myNamesArray.length -1);
slicedArray[0] = "Jessie Joey Joe Joe";
console.log(myNamesArray);
console.log(slicedArray);
// var myDonuts = [coconutDonut, vanillaDonut];
// var donutLength = myDonuts.length;
// var lastDonut = myDonuts[1];
// var lastDonut = myDonuts[donutLength - 1];
// var lastDonut = myDonuts.slice(myDonuts.length -1);
// lastDonut.sayType();
// lastDonut[0].showSweetness();
// console.log(lastDonut);
// var lastDonut = myDonuts.pop();
// var joinedArray = myNamesArray.join("-")
// var myOtherNames = ["Jake", "Amy", "Timmy"];
// var myEventMoreOtherNames = ["Pete", "Mary Jane"];
// myNamesArray.push("Bob");
// myNamesArray.pop();
// var lastName = myNamesArray.pop();
// myNamesArray.push(["Bob", "Sally", "Jimbo"]);
// console.log(myNamesArray[4][0]);
// var sortedArray = myNamesArray.sort();
// sortedArray.reverse();
// console.log(sortedArray);
// var concattedArray = myNamesArray.concat(myOtherNames, myEventMoreOtherNames);
// var slicedArray = concattedArray.slice(5, 9);
// console.log(concattedArray);
// console.log(slicedArray);
// console.log(joinedArray);
// console.log(myDonuts);






