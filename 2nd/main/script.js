document.addEventListener("DOMContentLoaded", function() {
    const stanzas = document.querySelectorAll(".stanza");
    const audios = [
      new Audio("poem/audios/ElevenLabs_2024-05-23T18_05_12_ove_gen_s50_sb75_se0_b_m2.mp3"),
      new Audio("poem/audios/ElevenLabs_2024-05-23T18_06_30_ove_gen_s50_sb75_se0_b_m2.mp3"),
      new Audio("poem/audios/ElevenLabs_2024-05-23T18_07_46_ove_gen_s50_sb75_se0_b_m2.mp3"),
      new Audio("poem/audios/ElevenLabs_2024-05-23T18_08_39_ove_gen_s50_sb75_se0_b_m2.mp3")
    ];
  
    let currentStanza = 0;
  
    function playStanza(index) {
        if (index < stanzas.length) {
          stanzas[index].classList.add("show");
          audios[index].volume = 0.3;
          audios[index].play();
          audios[index].addEventListener("ended", () => {
            playStanza(index + 1);
          });
        }
      }
    
      document.getElementById("startButton").addEventListener("click", function() {
        playStanza(currentStanza);
      });
    });


    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    const startButton = document.getElementById('start-button');
    const backgroundAudio = document.getElementById('background-audio');
    const firstButton = document.getElementById('first-button');
    
    const storyData = {
        intro: {
            text: "You are Ove, a grumpy yet caring old man. You come across King Lear sitting on a bench in the park. He looks contemplative. What do you do?",
            choices: [
                { text: "Tell him he's sitting on your bench", next: 'scene1' },
                { text: "Sit quietly next to him", next: 'scene2' }
            ]
        },
        scene1: {
            text: "Ove: You're sitting on my bench.\nLear: Is a bench not for the weary? Sit, friend, if friend you be.\nOve: Not looking for friends. Just quiet.",
            choices: [
                { text: "Reflect on why you want quiet", next: 'scene3' },
                { text: "Ask Lear why he looks so troubled", next: 'scene4' }
            ]
        },
        scene2: {
            text: "Ove sits quietly next to Lear. After a moment of silence, Lear speaks.\nLear: The quiet I seek eludes me, haunted by echoes of past deeds, the stormy nights spent unsheltered. Tell me, fellow sufferer, what haunts you?",
            choices: [
                { text: "Tell him everything's changing and you don't like it", next: 'scene3' },
                { text: "Ask Lear what haunts him", next: 'scene4' }
            ]
        },
        scene3: {
            text: "Ove: Everything's changing. They build things to break, love things to leave. What's the point of building anything if it just falls apart?\nLear: To mend, perhaps. There is a nobility in repair, in not abandoning what once served well.",
            choices: [
                { text: "Fix the loose screw on the bench", next: 'scene5' },
                { text: "Reflect on Lear's words", next: 'scene6' }
            ]
        },
        scene4: {
            text: "Lear: The quiet I seek eludes me, haunted by echoes of past deeds, the stormy nights spent unsheltered. Tell me, fellow sufferer, what haunts you?",
            choices: [
                { text: "Tell him everything's changing and you don't like it", next: 'scene3' },
                { text: "Ask Lear what haunts him", next: 'scene7' }
            ]
        },
        scene5: {
            text: "Ove notices a loose screw on the bench and pulls out a small screwdriver, tightening it.\nLear watches, intrigued.\nLear: To mend, perhaps. There is a nobility in repair, in not abandoning what once served well.",
            choices: [
                { text: "Reflect on Lear's words", next: 'scene6' },
                { text: "Stay silent and continue fixing the bench", next: 'scene8' }
            ]
        },
        scene6: {
            text: "Ove: Maybe you're right. Things need care, attention. Like people.\nLear: Indeed. Perhaps it's time to nurture, not reign. What say you, Ove, shall we depart this grove wiser or merely older?",
            choices: [
                { text: "Respond humorously about gardening", next: 'scene9' },
                { text: "Agree with Lear and suggest a new start", next: 'scene10' }
            ]
        },
        scene7: {
            text: "Lear: My folly, my pride. I demanded love, parceled out my kingdom like market meat, and what did it earn me? Betrayal, madness... solitude.",
            choices: [
                { text: "Respond with humor about gardening", next: 'scene9' },
                { text: "Offer comfort and wisdom", next: 'scene10' }
            ]
        },
        scene8: {
            text: "Ove silently continues fixing the bench, a symbol of his principle to mend rather than abandon. Lear watches, finding solace in the act.",
            choices: [
                { text: "Reflect on Lear's words", next: 'scene6' },
                { text: "Ask Lear about his troubles", next: 'scene4' }
            ]
        },
        scene9: {
            text: "Ove: (chuckles) Took you long enough to figure that out, didn't it? You might've just asked a gardener. Plants grow well with care, not commands. And they certainly don't listen to any kings or stubborn old men.\nLear: (laughs, raspy but genuine) A gardener, eh? I spent a lifetime as a king when I should have been learning from the earth. It’s humbling, yet... oddly comforting.",
            choices: [
                { text: "Offer Lear some practical advice", next: 'scene11' },
                { text: "Continue the humorous exchange", next: 'scene12' }
            ]
        },
        scene10: {
            text: "Ove: Maybe a bit of both. Some things don't change, like the need for a good bench.\nLear: (laughs) And a good friend to share it with. Shall we move forward together, Ove?",
            choices: [
                { text: "Agree and suggest gardening", next: 'scene11' },
                { text: "Offer Lear some practical advice", next: 'scene12' }
            ]
        },
        scene11: {
            text: "Ove and Lear stand, ready to face their futures with newfound wisdom and camaraderie.\nNora, Equality 7-2521, Willy, and Grant join them, symbolizing the collective journey of growth and understanding.",
            choices: [
                { text: "End Story", next: 'end' }
            ]
        },
        scene12: {
            text: "Lear: Every man has his place and worth, though it may not be written in stone or gold. You are no less a king in your world than I was in mine.\nOve: Well, you're in luck. Retirement's full of gardening. It's quiet, it's peaceful, and the plants don’t talk back.",
            choices: [
                { text: "End Story", next: 'end' }
            ]
        },
        end: {
            text: "Thank you for participating in this interactive story. I hard-coded this whole website and there were some challenges, like this interactive small story! The song you are hearing in the background is Mahler: 5th Symphony, IV Mvt, Adagietto",
            choices: []
        }
    };
    
    function startStory() {
        startButton.style.display = 'none';
        displayScene('intro');
    }
    
    function displayScene(sceneKey) {
        const scene = storyData[sceneKey];
        storyText.innerHTML = scene.text.replace(/\n/g, '<br>');
        choicesContainer.innerHTML = '';
    
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => displayScene(choice.next);
            choicesContainer.appendChild(button);
        });
    }

    startButton.onclick = startStory;
    

  firstButton.onclick = () => {
    backgroundAudio.volume = 0.2; // Set low volume
    backgroundAudio.play();
};