var shuffleSequence = seq("participant","instructions1",
                          "practice1a", "practice1b", "practice1c", "practice1test", "practice2a", "practice2b", "practice2c", "practice2test",
                          "instructions2",
"3a_1", 
"3a_2", 
"3a_3", 
"3a_test",
"3b_1", 
"3b_2", 
"3b_3", 
"3b_test",
"3c_1", 
"3c_2", 
"3c_3", 
"3c_test",
"4a_1", 
"4a_2", 
"4a_3", 
"4a_4", 
"4a_test",
"4b_1", 
"4b_2", 
"4b_3", 
"4b_4", 
"4b_test",
"4c_1", 
"4c_2", 
"4c_3", 
"4c_4", 
"4c_test",
"5a_1", 
"5a_2", 
"5a_3", 
"5a_4", 
"5a_5", 
"5a_test",
"5b_1", 
"5b_2", 
"5b_3", 
"5b_4", 
"5b_5", 
"5b_test",
"5c_1", 
"5c_2", 
"5c_3", 
"5c_4", 
"5c_5", 
"5c_test",
"6a_1", 
"6a_2", 
"6a_3", 
"6a_4", 
"6a_5", 
"6a_6", 
"6a_test",
"6b_1", 
"6b_2", 
"6b_3", 
"6b_4", 
"6b_5", 
"6b_6", 
"6b_test",
"6c_1", 
"6c_2", 
"6c_3", 
"6c_4", 
"6c_5", 
"6c_6", 
"6c_test"
 );
    
var defaults = ["Form", {continueOnReturn: false, saveReactionTime: true, hideProgressBar: true, centerItems: false},
                "Message", {hideProgressBar: true, transfer: "keypress"},
                "Question", {as: [["F","Yes"],["J","No"]], autoFirstChar: false, hideProgressBar: true, randomOrder: false, presentHorizontally: true}, 
                "Separator", {hideProgressBar: true, transfer: 2000}
];
                
var items = [
["participant", "Form", {html: {include: "participant.html"}}],
["instructions1", "Message", {html: {include: "instructions1.html"}}],
["instructions2", "Message", {html: {include: "instructions2.html"}}],
    
["practice1a", "Message", {html:'<center><h2>(2/2) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"5", hasCorrect: 1},"Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false}, "Message", {html:'<center><h2>A</h2></center>', transfer: 1000}],
["practice1b", "Message", {html:'<center><h2>(8/4) + 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"10", hasCorrect: 1}, "Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false},"Message", {html:'<center><h2>B</h2></center>', transfer: 1000}],
["practice1c", "Message", {html:'<center><h2>(10/2) - 4 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"1", hasCorrect: 0}, "Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false},"Message", {html:'<center><h2>C</h2></center>', transfer: 1000}],
["practice1test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="practice1test">'}],

["practice2a", "Message", {html:'<center><h2>(3*2) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"3", hasCorrect: 1},"Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false}, "Message", {html:'<center><h2>Q</h2></center>', transfer: 1000}],
["practice2b", "Message", {html:'<center><h2>(7*4) - 10 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"18", hasCorrect: 0}, "Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false},"Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["practice2c", "Message", {html:'<center><h2>(5/5) + 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"10", hasCorrect: 1}, "Separator", {normalMessage: "Correct",errorMessage: "Incorrect! Read math problems carefully.", ignoreFailure: false},"Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["practice2test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="practice2test">'}],    
    
["3a_1", "Message", {html:'<center><h2>(6/1) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"9"}, "Message", {html:'<center><h2>K</h2></center>', transfer: 1000}],
["3a_2", "Message", {html:'<center><h2>(2/2) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["3a_3", "Message", {html:'<center><h2>(7x3) - 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"18"}, "Message", {html:'<center><h2>B</h2></center>', transfer: 1000}],
["3b_1", "Message", {html:'<center><h2>(4x4) - 4 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>Q</h2></center>', transfer: 1000}],
["3b_2", "Message", {html:'<center><h2>(4/1) + 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"2"}, "Message", {html:'<center><h2>H</h2></center>', transfer: 1000}],
["3b_3", "Message", {html:'<center><h2>(7x2) + 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"22"}, "Message", {html:'<center><h2>N</h2></center>', transfer: 1000}],
["3c_1", "Message", {html:'<center><h2>(5x5) + 9 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"34"}, "Message", {html:'<center><h2>K</h2></center>', transfer: 1000}],
["3c_2", "Message", {html:'<center><h2>(1x8) - 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"0"}, "Message", {html:'<center><h2>T</h2></center>', transfer: 1000}],
["3c_3", "Message", {html:'<center><h2>(1x7) - 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"8"}, "Message", {html:'<center><h2>L</h2></center>', transfer: 1000}],
["4a_1", "Message", {html:'<center><h2>(8/8) + 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"2"}, "Message", {html:'<center><h2>F</h2></center>', transfer: 1000}],
["4a_2", "Message", {html:'<center><h2>(8/2) + 9 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["4a_3", "Message", {html:'<center><h2>(6x3) - 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"1"}, "Message", {html:'<center><h2>B</h2></center>', transfer: 1000}],
["4a_4", "Message", {html:'<center><h2>(2/2) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["4b_1", "Message", {html:'<center><h2>(3x4) + 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"25"}, "Message", {html:'<center><h2>F</h2></center>', transfer: 1000}],
["4b_2", "Message", {html:'<center><h2>(6/3) + 4 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>Q</h2></center>', transfer: 1000}],
["4b_3", "Message", {html:'<center><h2>(1x4) + 9 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"13"}, "Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["4b_4", "Message", {html:'<center><h2>(9x2) - 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"9"}, "Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["4c_1", "Message", {html:'<center><h2>(4x8) - 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"24"}, "Message", {html:'<center><h2>K</h2></center>', transfer: 1000}],
["4c_2", "Message", {html:'<center><h2>(3x2) - 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"16"}, "Message", {html:'<center><h2>H</h2></center>', transfer: 1000}],
["4c_3", "Message", {html:'<center><h2>(2/1) + 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>F</h2></center>', transfer: 1000}],
["4c_4", "Message", {html:'<center><h2>(2x2) + 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"12"}, "Message", {html:'<center><h2>R</h2></center>', transfer: 1000}],
["5a_1", "Message", {html:'<center><h2>(5x4) + 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"14"}, "Message", {html:'<center><h2>J</h2></center>', transfer: 1000}],
["5a_2", "Message", {html:'<center><h2>(6/6) + 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"6"}, "Message", {html:'<center><h2>L</h2></center>', transfer: 1000}],
["5a_3", "Message", {html:'<center><h2>(6/2) - 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"8"}, "Message", {html:'<center><h2>T</h2></center>', transfer: 1000}],
["5a_4", "Message", {html:'<center><h2>(6x5) - 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"15"}, "Message", {html:'<center><h2>H</h2></center>', transfer: 1000}],
["5a_5", "Message", {html:'<center><h2>(6x4) + 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"16"}, "Message", {html:'<center><h2>R</h2></center>', transfer: 1000}],
["5b_1", "Message", {html:'<center><h2>(5/5) - 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"5"}, "Message", {html:'<center><h2>L</h2></center>', transfer: 1000}],
["5b_2", "Message", {html:'<center><h2>(7/1) - 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"1"}, "Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["5b_3", "Message", {html:'<center><h2>(3/3) + 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"10"}, "Message", {html:'<center><h2>T</h2></center>', transfer: 1000}],
["5b_4", "Message", {html:'<center><h2>(2x7) + 9 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"13"}, "Message", {html:'<center><h2>J</h2></center>', transfer: 1000}],
["5b_5", "Message", {html:'<center><h2>(3x7) + 4 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"25"}, "Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["5c_1", "Message", {html:'<center><h2>(8x2) - 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"12"}, "Message", {html:'<center><h2>B</h2></center>', transfer: 1000}],
["5c_2", "Message", {html:'<center><h2>(8/1) - 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"0"}, "Message", {html:'<center><h2>T</h2></center>', transfer: 1000}],
["5c_3", "Message", {html:'<center><h2>(3x6) - 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"5"}, "Message", {html:'<center><h2>L</h2></center>', transfer: 1000}],
["5c_4", "Message", {html:'<center><h2>(2x6) + 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"19"}, "Message", {html:'<center><h2>V</h2></center>', transfer: 1000}],
["5c_5", "Message", {html:'<center><h2>(4x7) - 4 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"5"}, "Message", {html:'<center><h2>N</h2></center>', transfer: 1000}],
["6a_1", "Message", {html:'<center><h2>(5x6) - 6 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"22"}, "Message", {html:'<center><h2>F</h2></center>', transfer: 1000}],
["6a_2", "Message", {html:'<center><h2>(7/7) + 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"9"}, "Message", {html:'<center><h2>P</h2></center>', transfer: 1000}],
["6a_3", "Message", {html:'<center><h2>(1x9) + 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"8"}, "Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["6a_4", "Message", {html:'<center><h2>(4/2) + 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"9"}, "Message", {html:'<center><h2>J</h2></center>', transfer: 1000}],
["6a_5", "Message", {html:'<center><h2>(6/1) - 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"4"}, "Message", {html:'<center><h2>L</h2></center>', transfer: 1000}],
["6a_6", "Message", {html:'<center><h2>(9/9) + 5 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"8"}, "Message", {html:'<center><h2>Q</h2></center>', transfer: 1000}],
["6b_1", "Message", {html:'<center><h2>(2x4) + 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"11"}, "Message", {html:'<center><h2>N</h2></center>', transfer: 1000}],
["6b_2", "Message", {html:'<center><h2>(2x8) - 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"13"}, "Message", {html:'<center><h2>J</h2></center>', transfer: 1000}],
["6b_3", "Message", {html:'<center><h2>(3x5) - 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"13"}, "Message", {html:'<center><h2>F</h2></center>', transfer: 1000}],
["6b_4", "Message", {html:'<center><h2>(5x2) + 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"20"}, "Message", {html:'<center><h2>R</h2></center>', transfer: 1000}],
["6b_5", "Message", {html:'<center><h2>(8/4) + 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"2"}, "Message", {html:'<center><h2>Q</h2></center>', transfer: 1000}],
["6b_6", "Message", {html:'<center><h2>(1/1) + 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"2"}, "Message", {html:'<center><h2>H</h2></center>', transfer: 1000}],
["6c_1", "Message", {html:'<center><h2>(7x4) - 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"25"}, "Message", {html:'<center><h2>K</h2></center>', transfer: 1000}],
["6c_2", "Message", {html:'<center><h2>(3x9) - 2 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"25"}, "Message", {html:'<center><h2>K</h2></center>', transfer: 1000}],
["6c_3", "Message", {html:'<center><h2>(7x3) + 3 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"20"}, "Message", {html:'<center><h2>S</h2></center>', transfer: 1000}],
["6c_4", "Message", {html:'<center><h2>(4x4) + 8 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"18"}, "Message", {html:'<center><h2>X</h2></center>', transfer: 1000}],
["6c_5", "Message", {html:'<center><h2>(4x6) + 1 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"35"}, "Message", {html:'<center><h2>N</h2></center>', transfer: 1000}],
["6c_6", "Message", {html:'<center><h2>(8x4) - 7 = ?</h2></center>', transfer: "keypress"}, "Question", {q:"25"}, "Message", {html:'<center><h2>V</h2></center>', transfer: 1000}],   
                
["3a_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="3a_test">'}],
["3b_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="3b_test">'}],
["3c_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="3c_test">'}],
["4a_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="4a_test">'}],
["4b_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="4b_test">'}],
["4c_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="3a_test">'}],
["5a_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="5a_test">'}],
["5b_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="5b_test">'}],
["5c_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="5c_test">'}],
["6a_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="6a_test">'}],
["6b_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="6b_test">'}],
["6c_test", "Form", {html:'<font size="4">Recite Letters in Presented Order:<br /> &#9998;<input type="text" class="obligatory" name="6c_test">'}]
];