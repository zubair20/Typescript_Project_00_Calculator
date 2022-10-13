import inquirer from "inquirer"

const numValidator = (num: number) => {
  return isNaN(num) ? "Please Enter a number" : true
}
const questions = [
  {
    type: 'list',
    name: 'operation',
    message: 'Which operation would you like to perform?',
    choices: ['addition','subtraction','multiplication','division']
  },
  {
    type:'number',
    name: 'num1',
    message: 'Enter your first number : ',
    validate: numValidator
  },
  {
    type:'number',
    name: 'num2',
    message: 'Enter your second number : ',
    validate: numValidator
  }
]

inquirer
  .prompt(questions)
  .then((answers) => {
    //console.log(answers)
    let result = 0
    if(answers.operation === 'addition') result = answers.num1 + answers.num2
    if(answers.operation === 'subtraction') result = answers.num1 - answers.num2
    if(answers.operation === 'multiplication') result = answers.num1 * answers.num2
    if(answers.operation === 'division'){
      if(answers.num2 === 0){
        console.log('Number can\'t be divided by Zero')
        return
      }else{
        result = answers.num1 / answers.num2
      }
    }
    console.log(`Result = ${result}`)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      console.log('Something went wrong')
    }
  });