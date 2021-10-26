import { ProxyState } from "../AppState.js"
import { triviaServices } from "../Services/TriviaServices.js"
import { loadStateHs, saveStateHs } from "../Utils/LocalStorage.js"

function _draw(){
  let questions = ProxyState.trivia
  let template =''
  questions.forEach( q => template = q.TemplateQuestion)
  document.getElementById('trivia').innerHTML = template
  document.getElementById('streak').innerText = `Winning Streak: ${ProxyState.correct}`
  document.getElementById('highest').innerText = `Highest: ${ProxyState.highest}`
}


export class TriviaController {
constructor(){
console.log('Controller here')
ProxyState.on('trivia', _draw)
ProxyState.on('highest', saveStateHs)
loadStateHs()
_draw

this.getQuestions()
}

async getQuestions(){
  try {
    await triviaServices.getQuestions()
    console.log('controller: get questions done')
  } catch (error) {
    console.error('controller error', error)
  }
}

submitAnswer(){
  window.event.preventDefault()
  console.log('submited')
  const formElem = window.event.target
  const answerData = formElem.answer_user.value
    triviaServices.submitAnswer(answerData)
  }
correct(){
 window.alert('Correct! Good Job! 👏')
 if(ProxyState.highest > ProxyState.correct) {
   ProxyState.correct++
  this.getQuestions()
}
 else {
  ProxyState.highest++ 
  ProxyState.correct++
  this.getQuestions()
}
}
wrong(){
  if (ProxyState.correct == 0){
  window.alert('Wrong! 👎')
  this.getQuestions()
  }else{
    window.alert('Wrong! You broke the streak! 🤷‍♂️')
    ProxyState.correct = 0
  this.getQuestions()
}

}

skip(){

  this.getQuestions()
}


}




