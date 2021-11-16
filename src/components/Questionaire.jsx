import React from 'react'
const Questionaire = ({handleAnswer,showAnswers,handleNextQuestions, data: { question, correct_answer, answers } }) => {

    return (
        <div className="flex flex-col">
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">

               {answers.map((answer)=>{
                   const textColor= showAnswers ? answer ===  correct_answer ? 'text-green-500': 'text-red-500':'text-purple-500';
                   
                   return(

                    <button className={`bg-white p-4 ${textColor} font-semibold rounded shadow`}onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer}}/>
               )})}
            </div>
            {showAnswers &&(
                <button className={'ml-auto bg-purple-700 p-4 font-semibold rounded shadow mt-6'} onClick={handleNextQuestions}>Next Question</button>
            )}
            
        </div>
    )
}

export default Questionaire
