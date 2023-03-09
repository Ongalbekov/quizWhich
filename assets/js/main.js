let data = [
    {
      url: "https://images.unsplash.com/photo-1530199202256-d9a49ef1798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      question: "Which ocean lies on the east coast of the United States?",
      choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
      answer: "Atlantic",
    },
    {
      url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1647&q=80",
      question: "Which is the world's highest mountain?",
      choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
      answer: "Mount Everest",
    },
    {
      url: "https://images.unsplash.com/photo-1575223785347-f91aa155e68b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      question: "Which of these cities is not in Europe?",
      choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
      answer: "Moscow",
    },
    {
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
      question: "True or False: Iceland is covered in ice.",
      choice: ["true", "false"],
      answer: "false",
    },
    {
      url: "https://images.unsplash.com/photo-1570814671169-ce8f91015ffe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",
      question: "The United Kingdom is comprised of how many countries?",
      choice: [1, 2, 3, 4],
      answer: 4,
    },
    {
      url: "https://images.unsplash.com/photo-1525218291292-e46d2a90f77c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      question: "Which of the following countries do not border France?",
      choice: ["Germany", "Netherlands", "Spain", "Italy"],
      answer: "Netherlands",
    },
    {
      url: "https://images.unsplash.com/photo-1599517696561-37f778359c26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
      question: "Which U.S. state is the Grand Canyon located in?",
      choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
      answer: "Arizona",
    },
    {
      url: "https://images.unsplash.com/photo-1534262076942-e79205b9d678?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
      question: "Which is the smallest country, measured by total land area?",
      choice: ["Maldives", "Monaco", "Vatican"],
      answer: "Vatican",
    },
    {
      url: "https://images.unsplash.com/photo-1598903911244-95ff3c9e654f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      question: "Which is the longest river in the world?",
      choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
      answer: "Nile River",
    },
    {
      url: "https://images.unsplash.com/photo-1584794171574-fe3f84b43838?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      question: "Which is the largest body of water?",
      choice: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
      answer: "Pacific Ocean",
    },
  ];

let score = 0;

let content=document.querySelector('#content');

// =======================Counter=================================

let counter=document.createElement('div');
counter.id='counter';


let counterScore = document.createElement('h6');
counterScore.innerText=score;
counter.appendChild(counterScore);

let counterTotal=document.createElement('p');
counterTotal.innerText='/ 10';
counter.appendChild(counterTotal);

content.appendChild(counter);

// ========================CreateQuestions========================

data.forEach((item, itemIndex)=>{
    const newDiv = document.createElement('div');
    // An der Stelle bekommt jedes Div eine individuelle ID, auf die greife ich später in Zeile 125 zu, damit ich alle Buttons disablen kann
    newDiv.id='div' + itemIndex;
    newDiv.className='questionContainer';
    content.appendChild(newDiv);

    let question=document.createElement('h2');
    question.innerText=item.question;
    newDiv.appendChild(question);

    let innerDiv = document.createElement('div');
    innerDiv.className='answerContainer';
    newDiv.appendChild(innerDiv);

    let image=document.createElement('img');
    image.src=item.url;
    innerDiv.appendChild(image);

    let buttonDiv=document.createElement('div');
    buttonDiv.className='buttonDiv';
    innerDiv.appendChild(buttonDiv);

    item.choice.forEach((choice)=>{
        let possibleAnswer= document.createElement('button');
        possibleAnswer.innerHTML=choice;
        possibleAnswer.addEventListener('click', (event)=>{
            let givenAnswer = event.target.innerText;
            
            if(givenAnswer == data[itemIndex].answer) {
                event.target.classList += 'right';
                score++;
                counterScore.innerText= score;
                
            }
            else {event.target.classList += 'false';}

            
            if(score == 7){
              finalResult();
              score++;
            }

            //Aktulle Buttons deaktivieren
        document.querySelectorAll('#div' + itemIndex + ' button').forEach((button) => {
          button.disabled = true;
        });
        });
        buttonDiv.appendChild(possibleAnswer);
    });
});

//==========Create Final Result =================

function finalResult() {
  let resultDiv = document.createElement('div');
  resultDiv.id="result";
  content.appendChild(resultDiv);

  let congrats=document.createElement('h2');
  congrats.innerText=`Congratulations! Your score is ${score}`;
  resultDiv.appendChild(congrats);
  
//scrollen bis zum Ende
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior:'smooth',
  });
}



