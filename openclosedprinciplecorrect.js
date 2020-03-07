class BooleanQuestion {
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('1. True')
        console.log('2. False')
    }
}

class MultipleChoiceQuestion {
    constructor(description, options){
        this.description = description;
        this.options = options;
    }

    printQuestionChoices(){
        this.options.forEach((option,index) => {

            if(Array.isArray(option)){
                option.forEach((option,indexd) =>{
                    console.log(`${index+1}.${indexd+1}.${option}`)
                });
            }
        });
    }
}

class TextQuestion {
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Answer:______________________')
    }
}
function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
    })
}


const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion('This video is useful.',[['CSS','d'],'HTML','JS','Python']),
    new TextQuestion('Describe your favorite JS feature.')
]

printQuiz(questions)
