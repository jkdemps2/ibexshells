//the first section of the data file is the shuffleSequence, here you put items in the order you want them to appear
//since this is a shell, the only items I'm including are "Welcome", "SPR1" and the fixation to precede all experimental items
//you can plug an item in one at a time, for example, you could choose to just see SPR1 preceded by the fixation like:
//var shuffleSequence = seq(precedeEachWith("fixation", "SPR1"));
//you could also view more than one item, say SPR1 and Likert3:
//var shuffleSequence = seq(precedeEachWith("fixation", seq("SPR1", "Likert2")));

//shuffleSequence can and will get very complicated - that may be addressed in a different shell, but I would just recommend playing around with it and referring to
//ibex docs for help

var shuffleSequence = seq("Welcome", precedeEachWith("fixation", "SPR1"));


//defaults save you time and effort when creating items, they allow you to set default options for all controllers
//for example, if you wanted to hide the progressbar in all of the controllers you use, you could set those optinos here, which I do
var defaults = ["Form", {hideProgressBar: true},
                "Message", {hideProgressBar: true},
                "Question", {hideProgressBar: true},
                "DashedSentence", {hideProgressBar: true}
               ];             

//simply add in additional options within {} separated by commas if you want to make different defaults - this is particularly helpful with questions
//if you have likert items, they require at least 4 options to construct, so you can save time by defining some of them as defaults here


//this is simply what you display to participants after results have been sent to the server
var completionMessage = "Put the thank you message to participants here. If you want to give them a unique code to enter for compensation, place here.";

//this is what is displayed while the results are being sent
var sendingResultsMessage = "Please wait while results are sent. DO NOT EXIT WINDOW."; //this is important because people might have slow internet


//this is the bulk of the experiment - this includes all items in the experiment
//it is important to note that an item will not appear unless you specify it in shuffleSequence - you can put 100,000 items below and choose to only call upon one,
//which makes these shells easy to use so you can just view one type of item at a time if you'd like to see what it looks like
var items = [
    
//In general, items have three parts: the name, the controller, and the controller options, of which the latter two can be repeated
    //for example, the structure to one item might be: item name, spr controller, spr options, question controller, question options --> this is for spr followed by a 
    //question
    
//Including HTML files - you will need to first upload the files under chunk_includes, then use the following code
    //for example, if I want the welcome page to be welcome.html, which I've uploaded to chunk_includes, I would write:
    
["Welcome", "Message", {html: {include: "welcome.html"}}],  
//in this item, the name is Welcome, the controller is Message, and an option for Message controllers is html, which lets you include html. We then use html syntax to
//include the welcome.html file we uploaded to chunk includes
    
//Note that the Message controller does not send information back to the server - if you make forms out of html, use the Form controller
    //for example, the consent form we are using has been uploaded to chunk_includes as consent.html -- we will now add it as an item below
    //we use form here because in this consent form we have a text box where we want participants to enter their Mechanical Turk ID

["Consent", "Form", {html: {include: "consent.html"}}],
    
//make a fixation cross to appear before certain stimuli
   
["fixation", "Message", {html:'<center><h3>+</h3></center>', transfer: 500}],
    //here, the h3 tags can be changed to h1-h6 depending on desired size (1 is largest), transfer = presentation time in msec
    //if you choose this option, it will appear in the center of the screen before whatever item comes next
    
    //you'll then place this in var shuffleSequence using the precedeEachWith() function (see above)

//Now we'll start making different types of SPR items
//SPR works through the DashedSentence controller (self-paced reading is the default option, see how to make rsvp items further below)
    
    //word-by-word SPR
["SPR1", "DashedSentence", {s:"This is a self-paced reading sentence."}],
    //hideUnderscores: true --> phrase by phrase
["SPR2", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", hideUnderscores: true}],
    //showAhead: false --> you don't want blanks to be visible for upcoming words (i.e. you don't want your participants seeing the length of the sentence)
    //this is also how you would do full-sentence reading...if you only want full-sentence reading time recorded, simply have the sentence appear altogether with _
["SPR3", "DashedSentence", {s:"This_is_a_self-paced_reading_sentence.", hideUnderscores: true}],
["SPR4", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", hideUnderscores: true, showAhead: false}],
    //showBehind: false --> you don't want the blanks behind...only really useful because setting showBehind & showAhead to false eliminates all blanks
["SPR5", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", hideUnderscores: true, showAhead: false, showBehind: false}],
   //display: in place --> one word or region displayed at a time in the center
["SPR6", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", hideUnderscores: true, display: "in place"}],
    
//another option using the DashedSentence controller is "speeded acceptability", which is basically RSVP...either in place or not
    //word by word RSVP in line
["RSVP1", "DashedSentence", {s:"This is a self-paced reading sentence.", mode: "speeded acceptability"}],
    //phrase by phrase RSVP in line
["RSVP2", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", mode: "speeded acceptability", hideUnderscores: true}],
    //RSVP in center presentation
["RSVP3", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", mode: "speeded acceptability", hideUnderscores: true, display: "in place"}],
    //the defaults are extremely fast - you'll likely want to change the time between words and the time of each word
    //let's make the time between words 500msec (wordPauseTime) and the time of each word/phrase 1000msec (wordTime) (adjust as you'd like)
["RSVP4", "DashedSentence", {s:"This is a_self-paced_reading_sentence.", mode: "speeded acceptability", hideUnderscores: true, display: "in place", wordPauseTime: 500, wordTime: 1000}],
    
    
    
//This next section is for cumulative self-paced reading (keep in mind this could include or could not include rereading of previous material, no way to know)
    //I've uploaded a controller in js_includes and css_includes called "DashedSentenceCumulative" - these must be present in their corresponding chunk areas
    //or the controller will not work
    
["SPRC1", "DashedSentenceCumulative", {s:"This is a cumulative self-paced reading sentence."}],


//You are probably going to want to add comprehension questions after these sentences, the next section presents different ways to present sentences.
//The final section will briefly show how to combine a DashedSentence & Question controller so that the sentence is followed by the question, it works for any two controllers
//that you wish to be presented back to back and still constitute the same experimental item

//First, we'll go over multiple choice questions, the simplest of which being when there are two answers
   //there are two mandatory options in Question: the question to be displayed and the possible answers, presented as an array
["MC1", "Question", {q:"Do you enjoy programming experiments in Ibex Farm?", as:["Yes","No"]}],
    //now, let's have those answers presented horizontally with presentHorizontally: true...this also gets rid of the numbers in front of the choices
["MC2", "Question", {q:"Do you enjoy programming experiments in Ibex Farm?", as:["Yes","No"], presentHorizontally: true}],
    //we can also present multiple choices, like ABCD
["MC3", "Question", {q:"How often do you have the pleasure of programming in Ibex Farm?", as:["A", "B", "C", "D"], presentHorizontally: true}],
    //we can also assign a correct answer with hasCorrect: "string"...we'll assign make the presentation of choices random with randomOrder: true
["MC4", "Question", {q:"How often do you have the pleasure of programming in Ibex Farm?", as:["A", "B", "C", "D"], randomOrder: true, presentHorizontally: true, hasCorrect: "A"}],
    //this won't change how things are displayed, but will give you a nice 1 or 0 column in your results file for correct or incorrect
    //you'll also often want to allow participants to press a key on the keyboard rather than clicking on the correct answer
    //to allow them to hit the key corresponding to the first character in the answer, use autoFirstChar: true (I got rid of has correct and random order)
["MC5", "Question", {q:"How often do you have the pleasure of programming in Ibex Farm?", as:["A", "B", "C", "D"], presentHorizontally: true, autoFirstChar: true}],
    //we can also assign keys to specific answers, to do that, each item in the answer array is its own array containing two strings, the first being what is pressed
    //to choose the choice in the second string -- for example:
["MC6", "Question", {q:"Do you enjoy programming experiments in Ibex Farm?", as:[["F", "Yes"], ["J", "No"]], presentHorizontally: true}],
    //now we'll use the Question controller to make Likert scale items
["Likert1", "Question", {q:"I enjoy programming experiments in Ibex Farm.", as:["1","2","3","4","5"], presentAsScale: true}],
    //if you want to add comments on the left or right, use leftComment: and rightComment:
["Likert2", "Question", {q:"I enjoy programming experiments in Ibex Farm.", as:["1","2","3","4","5"], presentAsScale: true, leftComment:"Strongly Disagree", rightComment:"Strongly Disagree"}],
    
      
//The final section of this shell is to show how to combine items...we'll be combining items SPR1 & MC1 first
["SPRMC1", "DashedSentence", {s:"This is a self-paced reading sentence."}, "Question", {q:"Do you enjoy programming experiments in Ibex Farm?", as:["Yes", "No"]}]
    
     ];