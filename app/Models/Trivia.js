


export class Trivia {

constructor(data){
this.category = data.category
this.correct_answer = data.correct_answer
this.answer_user = data.answer_user
this.question = data.question
this.difficulty = data.difficulty

}

get TemplateQuestion(){
return `
<div class="mb-3">
<h5><b>Question:</b> ${this.question}</h5>
`
}
// get TemplateAnswer(){
//   return `

//   <b >Answer: ${this.correct_answer=="option1" ? "True" : "False" }</b>
//   `
//   }


}



