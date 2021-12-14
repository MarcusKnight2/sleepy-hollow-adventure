let story = 0;
let form = document.getElementById('adventure');
let buttons = document.getElementsByClassName('answer');
let answer = ''

let story_telling = {
    "0_a":{
        "question": "Summer has just rolled around and you are riding your horse from New York to Boston. As night approaches, you start looking for somewhere to stay. After a few minutes, you see the small village of Tarry Town sitting in the distance, the sunset shining behind it.",
        "answers":{
            "a":"Continue"
        }
    },
    "1_a":{
        "question": "As you get to Tarry Town, you start looking around for somewhere to stay. You see an inn near the edge of town and decide to stay there for the night.",
        "answers":{
            "a":"Continue",
        }
    },
    "2_a":{
        "question": "You enter the inn, and walk up to the bar.",
        "answers": {
            "a":"Go get a room"
        }
    },
    "3_a":{
        "question": "You ask the man standing there for a room. He gives you a small room upstairs.",
        "answers": {
            "a":"Go up to your room"
        }
    },
    "4_a":{
        "question": "While you are going up to your room, you notice a poster hanging on the wall.",
        "answers": {
            "a": "Ignore it and continue to your room",
            "b": "Ask someone what it's about"
        }
    },
    "5_a":{
        "question": "You ignore the poster and continue to your room. You settle down into your room, and start wondering what you want to do.",
        "answers": {
            "a": "Try to get some sleep",
            "b": "Go outside and take a walk"
        }
    },
    "5_b":{
        "question": "After you see the poster you look for someone to ask what it's about. You see someone down the hallway and go to them.",
        "answers": {
            "c": "Continue"
        }
    },
    "6_a":{
        "question": "You slip into your bed and quickly fall asleep.",
        "answers": {
            "a": "Continue"
        }
    },
    "6_b":{
        "question": "You decide that you want to to take a walk",
        "answers": {
            "b": "Ask someone where to walk",
            "c": "Just wing it"
        }
    },
    "6_c":{
        "question": "You lead them to the poster and they start telling you what it's about.\n \"Haven't you heard? The Headless Horseman is a well-known legend of this town. He is said to live in the Sleepy Hollow just behind this tavern. He lost his head and now he spends his time searching for a new one. You better watch out for him!\"",
        "answers": {
            "d": "\"I bet he's not real\"",
            "e": "\"That guy seems scary\""
        }
    },
    "7_a":{
        "question": "Right before drifting off to sleep, you hear some loud rustling and then knocking at your door.",
        "answers": {
            "a": "Tell them to come in",
            "b": "Get up and investigate"
        }
    },
    "7_b":{
        "question": "You go back down to the bar, and ask someone sitting there where you should go walk. \n\"If you want a calm walk, you should go out there to the Sleepy Hollow, but you need to watch out for the Headless Horseman, a local legend of this town.\"",
        "answers": {
            "c": "Okay, thank you"
        }
    },
    "7_c":{
        "question": "You make your way outside and look for some place to walk. You see a big plain, and decide to walk there.",
        "answers": {
            "c": "Continue"
        }
    },
    "7_d":{
        "question": "\"Oh he sure is real. Many of people have said they have seen him.\"",
        "answers": {
            "d": "\"Oh, I'll make sure to watch out for him\"",
            "e": "\"That's probably just a myth\""
        }
    },
    "7_e":{
        "question": "He most definitely is scary. You better watch out for him.",
        "answers": {
            "f": "Continue"
        }
    },
    "8_a":{
        "question": "They open your room's door. \"Apparently someone saw the headless horseman out there. Watch out.\"",
        "answers": {
            "a": "Check it out"
        }
    },
    "8_b":{
        "question": "You stand up and go to the door, and open it. \"Apparently someone saw the headless horseman out there. Watch out for him,\" the person at the door says.",
        "answers": {
            "a": "Go check it out"
        }
    },
    "8_c":{
        "question": "You then go out into the Sleepy Hollow and get started your walk.",
        "answers": {
            "b": "Continue"
        }
    },
    "8_d":{
        "question": "\"You better. We don't want another body on our hands.\"",
        "answers": {
            "c": "Go to your room and sleep",
            "d": "Go outside and see if he's real"
        }
    },
    "8_e":{
        "question": "\"He is most definitely not. Be careful if you go out there.\"",
        "answers": {
            "c": "Go to your room and sleep",
            "d": "Go outside and see if he's real"
        }
    },
    "8_f":{
        "question": "\"I'll be sure to watch out for him then,\" you reply.",
        "answers": {
            "c": "Go to your room and sleep",
            "d": "Go outside and see if he's real"
        }
    },
    "9_a":{
        "question": "You make your way outside and go into the Sleepy Hollow, but something just feels off to you.",
        "answers": {
            "a": "Explore deeper",
            "b": "Go around the outside"
        }
    },
    "9_b":{
        "question": "You walk further into the forest, and you see the shadow of a man riding a horse in the darkness.",
        "answers": {
            "c": "Turn back, that guy seems scary",
            "d": "It's probably fine"
        }
    },
    "9_c":{
        "question": "You head up to your room and go right to your bed. You quickly drift off to sleep.",
        "answers": {
            "e": "Continue"
        }
    },
    "9_d":{
        "question": "You decide to go out of the back door of the tavern to see if the Headless Horseman is real or not.",
        "answers": {
            "f": "Try to see him in the distance",
            "g": "Go deeper into the woods and try to see him clearer"
        }
    },
    "10_a":{
        "question": "You explore deeper into Sleepy Hollow, and feel a slight breeze. Do you want to go into the forest, or stay in the clearing?",
        "answers": {
            "a": "Go to the forest",
            "b": "Go to the clearing"
        }
    },
    "10_b":{
        "question": "You explore around the outside of the Sleepy Hollow. You look closer and see someone being chased by the Headless Horseman",
        "answers": {
            "c": "Help them out",
            "d": "Not your problem"
        }
    },
    "10_c":{
        "question": "You see the figure, and it seems to start turning towards you. You start running back to the town.",
        "answers": {
            "e": "Continue"
        }
    },
    //Ending
    "10_d":{
        "question": "You keep going forward, investigating the figure. Immediately, you recognize it as the Headless Horseman.",
        "answers": {
            "finish": "Even though you immediately started running back, the Headless Horseman was able to outrun you, and he trampled you. Better luck next time."
        }
    },
    "10_e":{
        "question": "The next morning, you wake up early to get back on the road. You quickly collect all of your stuff and start to get going.",
        "answers": {
            "f": "Continue"
        }
    },
    //Ending
    "10_f":{
        "question": "You look, and see a figure lurking on a horse near the edge of the forest. He sees you and starts running towards you. Quickly, you run back into the building.",
        "answers": {
            "finish": "You look out of the window on the door and see him turn around and go back to the forest. Good job, you survived the Headless Horseman!"
        }
    },
    "10_g":{
        "question": "You start walking outside and go into the hollow. You see a figure who you think is the Headless Horseman lurking in the distance, but you're not sure if it's him.",
        "answers": {
            "g": "Turn around",
            "h": "Keep going to get a better look"
        }
    },
    "11_a":{
        "question": "You go into the forest. After a bit, you think you see a shadow moving in the distance.",
        "answers": {
            "a": "Turn back",
            "b": "Keep going"
        }
    },
    "11_b":{
        "question": "You go to the clearing. After a little bit, you see something moving in the distance.",
        "answers": {
            "c": "Turn back",
            "d": "Keep going"
        }
    },
    //Ending
    "11_c":{
        "question": "You run into the forest and grab them. After running for dear life with them, you made it back to the village, both of you being safe.",
        "answers": {
            "finish": "Congrats! Not only did you survive, but you also helped someone else!"
        }
    },
    //Ending
    "11_d":{
        "question": "You decide to stay back in the village and just watch. You see the Headless Horseman throw his pumpkin right at the person, which hits them and they fall over. The Headless Horseman runs back into the forest.",
        "answers": {
            "finish": "You survived the Headless Horseman, but watched someone else get injured along the way."
        }
    },
    "11_e":{
        "question": "Quickly, the figure gets closer and closer, and you start running away.",
        "answers": {
            "e": "Surrender to him",
            "f": "Hide and the run away"
        }
    },
    "11_f":{
        "question": "You go out to your horse and start riding, and you go into a clearing by the tavern.",
        "answers": {
            "g": "Continue"
        }
    },
    //Ending
    "11_g":{
        "question": "You turn around, and make it back to the tavern before the Headless Horseman even notices you.",
        "answers": {
            "finish": "You made it! You were safe and didn't even get close to the Headless Horseman."
        }
    },
    //Ending
    "11_h":{
        "question": "You go to get a closer look when the figure, which you decide is the Headless Horseman, starts running towards you quickly.",
        "answers": {
            "finish": "You start running yourself, but the Headless Horseman is much faster and outruns you. You lost."
        }
    },
    "12_a":{
        "question": "You turn around, and start going back towards the inn.",
        "answers": {
            "a": "Continue"
        }
    },
    "12_b":{
        "question": "You keep going deeper into the forest. Your foot snags on a thick root on the ground.",
        "answers": {
            "b": "Continue"
        }
    },
    "12_c":{
        "question": "You turn back, and go back towards Tarry Town",
        "answers": {
            "c": "Continue"
        }
    },
    "12_d":{
        "question": "You continue into the clearing. You hear the howling of wolves, which sends shivers down your spine.",
        "answers": {
            "d": "\"That's not scary\"",
            "e": "\"I should go back\""
        }
    },
    //Ending
    "12_e":{
        "question": "You surrender yourself to the Headless Horseman for some reason.",
        "answers": {
            "finish": "You died after giving up. Why would you do that?"
        }
    },
    //Ending
    "12_f":{
        "question": "You run and hide behind a tree and then back to the Tarry Town",
        "answers": {
            "finish": "Congrats! You survived the Headless Horseman! Good job!"
        }
    },
    "12_g":{
        "question": "While riding you see a figure in the distance that resembles a headless man on a horse.",
        "answers": {
            "f": "Ignore it and keep going",
            "g": "Move closer to the town"
        }
    },
    "13_a":{
        "question": "While going back, you hear the sound of hooves hitting dirt. You turn around and see the headless horseman standing there!",
        "answers": {
            "a": "RUN!",
            "b": "Try to trick him"
        }
    },
    "13_b":{
        "question": "You get back up and keep going. Suddenly you see a figure sitting on a horse in the distance, who seems to be chasing you.",
        "answers": {
            "c": "RUN!",
            "d": "Ignore it, it's probably nothing"
        }
    },
    //Ending
    "13_c":{
        "question": "The Headless Horseman starts to catch up to you, and he throws his pumkin at you!",
        "answers": {
            "finish": "You lost! You died when the pumpkin hit you.",
        }
    },
    "13_d":{
        "question": "You keep going deeper into the clearing, and you see a light with the silhouette of a headless man on a horse.",
        "answers": {
            "e": "Run away!"
        }
    },
    //Ending
    "13_e":{
        "question": "You turn around and start going back towards the town. Just then, you hear the sound of hooves behind you. You start to run as fast as you can, but the man on the horse caught up to you.",
        "answers": {
            "finish": "You died! The Headless Horseman caught up to you and killed you."
        }
    },
    "13_f":{
        "question": "You keep going, ignoring the figure. You quoickly look behind you and see the figure has started chasing you!",
        "answers": {
            "f": "Run to a bridge crossing a creek",
            "g": "Jump over the creek"
        }
    },
    "13_g":{
        "question": "You move back to the side of the Sleepy Hollow, but the Headless Horseman is still chasing you. You notice a creek in front of you, and a bridge going across it.",
        "answers": {
            "h": "Run across the bridge"
        }
    },
    "14_a":{
        "question": "You immediately start running, going as fast as you possibly can.",
        "answers": {
            "a": "Continue"
        }
    },
    "14_b":{
        "question": "You decide you want to trick him. How will you go about that?",
        "answers": {
            "b": "Give up and run",
            "c": "Duck under him",
            "d": "Jump to the side"
        }
    },
    "14_c":{
        "question": "You start to running, weaving through the thick forest. You look back quickly and see the figure still chasing you.",
        "answers": {
            "e": "Continue"
        }
    },
    "14_d":{
        "question": "You go further into the forest, and you look back where you thought you saw the figure, and it dissapeared.",
        "answers": {
            "f": "Continue"
        }
    },
    "14_e":{
        "question": "You start to run back, but the Headless Horseman is catching up with you.",
        "answers": {
            "g": "Go into the forest",
            "h": "Go to Tarry Town"
        }
    },
    //Ending
    "14_f":{
        "question": "You run over to the bridge and cross it. When you look bak you notice that the horseman had turned around.",
        "answers": {
            "finish": "You survived the Headless Horseman, and were able to keep going onwards to Boston safely."
        }
    },
    //Ending
    "14_g":{
        "question": "You make your horse go to the creek and jump over it. Your horse's hoof slips and the horseman catches up to you. He throws his pumpkin at you, and it hits you in the head.",
        "answers": {
            "finish": "You were so close, but the Headless Horseman won. Better luck next time."
        }
    },
    //Ending
    "14_h":{
        "question": "The Headless Horseman throws his pumpkin at you, then turns around when you go across the bridge.",
        "answers": {
            "finish": "Even though the Headless Horseman threw his pumpkin at you, you dodged it and survived, staying on track towards Boston. Good job!"
        }
    },
    //Ending
    "15_a":{
        "question": "After what felt like ages, you finally reach the town, and the Headless Horseman gives up and turns around. Right before turning around though, he throws a pumpkin at you, and it hits your leg.",
        "answers": {
            "finish": "Congrats! You survived the Headless Horseman! While you did have minor leg injuries, you ended up being fine."
        }
    },
    //Ending
    "15_b":{
        "question": "You try to run back, but the Headless Horseman catches up with you because you spent so much time pondering your decision.",
        "answers": {
            "finish": "You died! You were so close, but the Headless Horseman was just a little faster. Better luck next time!"
        }
    },
    //Ending
    "15_c":{
        "question": "In attempt to trick him, you duck under his horse when he starts going towards you.",
        "answers": {
            "finish": "You died! While ducking, his horse's leg hit your head and you died."
        }
    },
    "15_d":{
        "question": "When he starts running towards you, you quickly jump out of the way, and you see him sharply turning around after.",
        "answers": {
            "a": "Do it again",
            "b": "Run"
        }
    },
    //Ending
    "15_e":{
        "question": "You start running faster, and make it to the tavern very quickly.",
        "answers": {
            "finish": "You made it back to the tavern and survived the Headless Horseman!"
        }
    },
    //Ending
    "15_f":{
        "question": "You then hear the sound of hooves behind you. You turn around, and you see a man with no head riding a horse. He's holding a pumpkin, and he throws it straight at you",
        "answers": {
            "finish": "Oof! The pumpkin hit your head and you passed out. You lost."
        }
    },
    "15_g":{
        "question": "You go into the forest, and try to find somewhere to hide before you run back to Tarry Town.",
        "answers": {
            "c": "Go into a run-down hut in the forest",
            "d": "Hide inside a hollowed-out tree"
        }
    },
    "15_h":{
        "question": "You sprint straight towards the town, going as fast as you can.",
        "answers": {
            "e": "Continue"
        }
    },
    "16_a":{
        "question": "As the Headless Horseman starts running back, you jump out of the way again.",
        "answers": {
            "a": "Start running"
        }
    },
    "16_b":{
        "question": "You try to run, but you have nowhere to go because the Headless Horseman is between you and the village.",
        "answers": {
            "finish": "The Headless Horseman kills you! R.I.P."
        }
    },
    "16_c":{
        "question": "You go to the hut, and hide behind the door. The Headless Horseman follows you, and the door creaks open.",
        "answers": {
            "finish": "The Headless Horseman is there when the door opens, and he throws his pumpkin at you. Oof!"
        }
    },
    // Ending
    "16_d":{
        "question": "You go into a hollow tree you spot nearby, and see the Headless Horseman run past and not notice you.",
        "answers": {
            "finish": "Congrats! You run back to the town and survive the Headless Horseman."
        }
    },
    // Ending
    "16_e":{
        "question": "The Headless Horseman gets closer and closer to you, and he eventually catches up to you.",
        "answers": {
            "finish": "The Headless Horseman ends up killing you. Oof."
        }
    },
    // Ending
    "17_a":{
        "question": "You start running towards the village. After a little while of running, you make it to the village and the Headless Horseman has turned around.",
        "answers": {
            "finish": "Congrats! You survived the Headless Horseman!"
        }
    },
    // Ending
    "17_b":{
        "question": "You try to run to the side but the Headless Horseman reaches you and tramples you.",
        "answers": {
            "finish": "You died! Better luck next time!"
        }
    }
};

function nextQuestion(button){
    var answer = button.value;
    if(answer) {
        story++;
        populateForm(story + '_' + answer);
    }
}

function resetForm(){
    document.getElementById("adventure").reset();
}

function populateForm(story){
    var current_story = story_telling[story];
    var text = '';
    for (var prop in current_story['answers']){
        if(current_story['answers'].hasOwnProperty("finish")){
            text += '<p class="answer" id="' + current_story['answers'][prop] + '"value="' + prop +'">' + current_story['answers'][prop] + '</p>';
        } else if(current_story['answers'].hasOwnProperty(prop)){
            text += '<button class="answer" id="' + current_story['answers'][prop] + '" onClick="nextQuestion(this)" value="' + prop +'">' + current_story['answers'][prop] + '</button>';
        }
    }
    form.querySelector('p').innerHTML = current_story.question;
    form.querySelector('fieldset').innerHTML = text;
}

populateForm('0_a');