var welcome = confirm("Welcome! Get ready to start an adventure!");
var adventure;
var kingsCanyon;

if (welcome === false) {
  alert("Your loss. Laters.");
} else {
  adventure = confirm("It's the 4th of July! You've decided to travel to Kings Canyon to enjoy the glory of nature!");
  kingsCanyon = prompt("You've made it to mountains in one piece. Do you: Explore Boyden Cave? Or, hike to the majestic General Sherman Tree? Please type one of the following options: Boyden Cave or General Sherman Tree.");
  if (kingsCanyon === "Boyden Cave") {
    var boydenCave = prompt("The cave is dark, damp, and refreshingly cool compared to the 100 ˚F temperature outside. The tour guide is explaining the difference between stalactites and stalagmites to an old man for the fifth time. You’re growing impatient and decide to see how far ahead you can explore before the tour guide notices. Do you go down the dark cavern to your left which is just out of the tour guide’s sightline? Or do you try to go past the tour guide to see the rest of the cavern you’re currently in? Please type one of the following options: Go Left or Go Straight.");
    if (boydenCave === "Go Left") {
      alert("The tunnel is so dark that you find yourself wishing you had night vision. You trip over a stone and fall. But you don’t hit the ground quickly, you just keep falling. And falling. And then, “Splat!” You fell down 15 feet and died. What did you expect? That’s what you get for going off trail. The End.");
    } else if (boydenCave === "Go Straight") {
      alert("The tour guide stops you from going forward. “Be careful,” she says. “It’s dangerous to continue without me; if you had kept going, you may have fallen into an extremely deep crevice. They’re all over the place here, which is why I insist you follow my lead. If you disagree, you’ll be escorted out of the cave.” Having just missed a a fatal opportunity, you meekly agree and stick close to the tour guide for the rest of the tour.");
      alert("You take it easy the rest of day after such a close encounter to death. The End.");
    } else {
      alert("Please follow the instructions and type one of the two options if you would like to continue your adventure.");
    }
  } else if (kingsCanyon === "General Sherman Tree") {
    var generalSherman = prompt("You start walking down the trail that leads to the General Sherman Tree. You’re excited to see the world's largest living tree; it’s 275 feet tall, has a circumference of 25 feet, and grows larger every year. You see a couple of German tourists standing in the middle of the trail with their map out. They look confused. Do you help them? Or do you ignore them and keep going? Please type one of the following options: Help Them or Keep Going.");
    if (generalSherman === "Help Them") {
      alert("Luckily, the German tourists speak English. They explain that they left something at their campsite and are now lost. They point to the trail they were on previously, and you start walking towards it. Suddenly something hits your head and everything goes black. You wake up tied to a tree in a totally foreign location. Your mouth is covered with duck tape. The German tourists are tending a very large fire. They happily inform you that they're cannibals and that you're they're next meal. They've never barbecued a person before. They behead you and roast your body. But the German tourists are a bit stupid and their fire spreads and kills them in the process. Forest rangers and firefighters are able to contain the blaze, so Kings Canyon is safe.");
      alert("The End. I hope you enjoyed being eaten by cannnibals!");
    } else if (generalSherman === "Keep Going") {
      var keepGoing = prompt("You continue down the trail and nod a greeting at the German tourists as you pass them. You feel bad, but while you recognize a few German words, you can’t speak the language. You make it the tree and are awed by all you see. The tree is at least 2,300 years old and it’s alive and surviving. Now that you’ve seen the tree, you have two choices. Go meet your family at their picnic spot and eat a 4th of July lunch, or follow a trail that leads off from the tree. Please type one of the following options: Eat Lunch or New Hike."); {
        if (keepGoing === "New Hike") {
          alert("You take a 6 mile hike to see a waterfall. It’s beautiful and you have a great time. It gets dark on your way back, but you came prepared and grab a flashlight out of your backpack. You see fireworks while walking back and wonder how it’s possible to light fireworks in the mountains without causing a forest fire. You end the 4th of July feeling satisfied and refreshed.");
          alert("The End. I hope you enjoyed the fireworks!");
        } else if (keepGoing === "Eat Lunch") {
          alert("You hike back to the picnic spot your family chose. There’s barbecued chicken drumsticks, hot dogs, ribs, and hamburgers. Someone cut open a huge watermelon and sliced it up. The cooler has refreshingly cold water bottles, sodas, and Mike's Hard Lemonades. Your sister baked chocolate chip cookies, you’re dad baked a cheese cake, and your aunts made several fruit pies. You happily join your family and begin to feast on the scrumptious options.");
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
