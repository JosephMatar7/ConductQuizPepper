    document.querySelector("body").background = "red"
    alert("h22i")
     
     let queryString = window.location.search;
     alert("hi")
   console.log(queryString);
   let urlParams = new URLSearchParams(queryString);
   let questionNb =    getUrlParam('questionNb')
   let answerNb = urlParams.get('answerNb')
   alert(questionNb)
   alert(answerNb)

   if(questionNb==''||questionNb==0){
     questionNb=1;
   }
   
   //raiseConfirmationEvent("question"+questionNb);
   function checkQuestion(){
     try {
       if(Number(questionNb)==1){
       if(answerNb!=''||Number(answerNb)!=0){
       if(Number(answerNb)==1){
         checkAnswer(document.getElementById("ans1q1"), true);
       }else if(Number(answerNb)==2){
         checkAnswer(document.getElementById("ans1q2"), false);
       }else if(Number(answerNb)==3){
         checkAnswer(document.getElementById("ans1q3"), false);
       }else{
         checkAnswer(document.getElementById("ans1q4"), false);
       }
     }
   }
    else if(questionNb!=''||Number(questionNb)!=0){
       window.location.href = `question${questionNb}.html`;
     }
     } catch (error) {
       alert(error)
     }
   }

   checkQuestion();

   // Timer countdown
   let timeLeft = 60;
   const timerElement = document.getElementById("time");
   const timerInterval = setInterval(function () {
     timeLeft--;
     timerElement.textContent = timeLeft;

     if (timeLeft <= 0) {
       clearInterval(timerInterval);
       // Redirect to the next question
       skipQuestion();
     }
   }, 1000);

   // Check answer and change button color

   function checkAnswer(isCorrect, answer){
       raiseConfirmationEvent('question2');
    //    raiseConfirmationEvent(button.id);
 if (isCorrect) {
   button.style.backgroundColor = "green";
 } else {
   button.style.backgroundColor = "red";
 }

 window.location.href = "question"+questionNb+".html";  // Navigate to next question
 // Disable all buttons after an answer is selected
//  document.querySelectorAll(".answer-button").forEach(function(btn) { btn.disabled = true});

 // Redirect to next question or notify Pepper of "correct" or "incorrect"
//  setTimeout( function() {
//    console.log(window.location.href);
//    let nextQuestionNb=Number(questionNb)+1;
//  }, 1000);
}

// Skip button logic
function skipQuestion() {
 raiseInputField("question"+questionNb+"skipped","noAnswer");
 let nextQuestionNb=Number(questionNb)+1;
 window.location.href = `question${nextQuestionNb}.html`;  // Navigate to next question
}




