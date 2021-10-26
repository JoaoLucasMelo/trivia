import { ProxyState } from "../AppState.js"
import { TriviaController } from "../Controllers/TriviaController.js"
import { Trivia } from "../Models/Trivia.js"
import { apie } from "../Services/AxiosServices.js"





class TriviaServices {

constructor(){
  console.log('Services here')


  
}

async getQuestions(){
  console.log('getting questions')
  const response = await apie.get()
  console.log('trivia get Questions response', response.data.results[0].question)
  ProxyState.trivia = response.data.results.map( q => new Trivia(q))
  console.log(ProxyState.trivia[0])
}

submitAnswer(answerData){

  const answer = answerData
let ans = ProxyState.trivia[0].correct_answer
console.log(ans)
console.log( answerData)
if ( answerData == ans ){
  app.triviaController.correct()
} else{ 
  app.triviaController.wrong()
}
}
easy(){

}






}

export const triviaServices = new TriviaServices()