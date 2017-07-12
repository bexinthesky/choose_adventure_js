var welcome = confirm("Welcome! Get ready to start an adventure!");
var adventure;
var kingsCanyon;

if (welcome === false) {
  alert("Your loss. Laters.");
} else {
  adventure = confirm("It's the 4th of July! You've decided to travel to Kings Canyon to enjoy the glory of nature!");
  kingsCanyon = prompt("You've made it to mountains in one piece. Do you: Explore Boyden Cave? Or, hike to the majestic General Sherman Tree? Please type one of the following options: Boyden Cave or General Sherman Tree.");
  if (kingsCanyon === "Boyden Cave") {
    var boydenCave = prompt("The cave is dark, damp, and refreshingly cool.");
    if (boydenCave === "Go Left") {
      alert("You fell down 15 feet and died. What did you expect? That’s what you get for going off trail.");
    } else if (boydenCave === "Go Straight") {
      alert("Having just missed a a fatal opportunity, you meekly agree and stick close to the tour guide for the rest of the tour.");
    } else {
      alert("Please follow the instructions and type one of the two options if you would like to continue your adventure.");
    }
  } else if (kingsCanyon === "General Sherman Tree") {
    var generalSherman = prompt("You start walking down the trail that leads to the.");
    if (generalSherman === "Help Them") {
      alert("Luckily, the German tourists speak English.");
    } else if (generalSherman === "Keep Going") {
      var keepGoing = prompt("You continue."); {
        if (keepGoing === "New Hike") {
          alert("You take a 6 mile hike to see a waterfall.");
        } else if (keepGoing === "Eat Lunch") {
          alert("You hike back to the picnic spot your family chose. There’s barbecued chicken drumsticks, hot dogs, ribs, and hamburgers.");
          alert("The End. Happy 4th of July!");
        } else {
          alert("Please follow the instructions and type one of the two options if you would like to continue your adventure.");
        }
      }
    } else {
      alert("Please follow the instructions and type one of the two options if you would like to continue your adventure.");
    }
  } else {
    alert("Please follow the instructions and type one of the two options if you would like to continue your adventure.");
  }
}
