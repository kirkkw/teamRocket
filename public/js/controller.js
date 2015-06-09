$(document).ready(function () {
  
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
     

     
     
     

 
    $.getJSON('activity.json', function(data) {

    for(i=0;i<data.quizlist.length;i++){ 
      questionBank[i]=new Array;
      questionBank[i][0]=data.quizlist[i].question;
      questionBank[i][1]=data.quizlist[i].option1;
      questionBank[i][2]=data.quizlist[i].option2;
      questionBank[i][3]=data.quizlist[i].option3;
      questionBank[i][4]=data.quizlist[i].option4;
    }
     numberOfQuestions=questionBank.length; 
    
     
    displayQuestion();
    })//gtjson
 
 



function displayQuestion(){
 var q1;
 var q2;
 var q3;
 var q4;


q1=questionBank[questionNumber][1];
q2=questionBank[questionNumber][2];
q3=questionBank[questionNumber][3];
q4=questionBank[questionNumber][4];


$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div>');

 $('.option').click(function(){
  if(questionLock==false){questionLock=true;  
  //correct answer
  if(this.id==1){
   score = 5 + score;
   }
  if(this.id==2){
   score = 10 + score;
   }
  if(this.id==3){
   score = 15 + score;
   } 
  if(this.id==4){
   score = 2 + score;
   } 

  setTimeout(function(){changeQuestion()},200);
 }})
}//display question

  
  
  
  
  
  function changeQuestion(){
    
    questionNumber++;
  
  if(stage=="#game1"){stage2="#game1";stage="#game2";}
    else{stage2="#game2";stage="#game1";}
  
  if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
  
   $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
   $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
  }//change question
  

  
  
  function displayFinalSlide(){
    
    $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>You are this likely to smoke: '+score+'</div>');
    
  }//display final slide
  
  
  
  
  
  
  
  });//doc ready