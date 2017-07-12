var welcome = confirm("Welcome! Get ready to start an adventure!");
var adventure;
var kingsCanyon;
var fireworks;
var brunch;

if (welcome === false) {
  alert('Your loss. Laters.');
} else {
  adventure = prompt("It's the 4th of July! How will you celebrate Independence Day? Will you: Travel to Kings Canyon to enjoy the glory of nature? Go to a fireworks booth to buy fireworks? Or, go to a 4th of July Brunch in the park? Please type one of the following options: Kings Canyon, Fireworks, or Brunch.");
    if (adventure === 'Kings Canyon') {
      kingsCanyon = prompt ("You've made it to mountains in one piece. Do you: Explore Boyden Cave? Or, hike to the majestic General Sherman Tree? Please type one of the following options: Boyden Cave, or General Sherman Tree.");
        if (kingsCanyon === 'Boyden Cave') {
          var boydenCave = prompt('The cave is dark, damp, and refreshingly cool compared to the 100 ˚F temperature outside. The tour guide is explaining the difference between stalactites and stalagmites to an old man for the fifth time. You’re growing impatient and decide to see how far ahead you can explore before the tour guide notices. Do you go down the dark cavern to your left which is just out of the tour guide’s sightline? Or do you try to go past the tour guide to see the rest of the cavern you’re currently in? Please type one of the following options: Go Left or Go Straight.') {
            if (boydenCave === 'Go Left') {
              alert('The tunnel is so dark that you find yourself wishing you had night vision. You trip over a stone and fall. But you don’t hit the ground quickly, you just keep falling. And falling. And then, “Splat!” You fell down 15 feet and died. What did you expect? That’s what you get for going off trail.');
            } else {
              alert('The tour guide stops you from going forward. “Be careful,” she says. “It’s dangerous to continue without me; if you had kept going, you may have fallen into an extremely deep crevice. They’re all over the place here, which is why I insist you follow my lead. If you disagree, you’ll be escorted out of the cave.” Having just missed a a fatal opportunity, you meekly agree and stick close to the tour guide for the rest of the tour.');
            }
          }
        } else {
          if (kingsCanyon === 'General Sherman Tree') {
            var generalSherman = prompt('')
          }
        }

    }  else {
      alert("To continue the adventure, please type one of the 3 options: Kings Canyon, Fireworks, or Brunch.")
    }

}



// else if (adventure === 'Fireworks') {
//
// } else if (adventure === 'Brunch') {
//
// }
