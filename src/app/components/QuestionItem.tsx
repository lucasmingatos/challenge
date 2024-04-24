import { useState } from "react";
import { Question } from "../type/Question";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;

}


export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnser, setSelectedAnser] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnser === null){
            setSelectedAnser(key);

            setTimeout(() => {
                onAnswer(key);
                setSelectedAnser(null);
            }, 1000);
        }
    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5"> {count}. {question.question} </div>
            <div>
            {question.options.map((item, key) => (
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 bg-yellow-100 border-yellow-600

                    ${selectedAnser !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnser !== null && selectedAnser === question.answer && selectedAnser === key && 'bg-green-300'}
                    ${selectedAnser !== null && selectedAnser !== question.answer && selectedAnser === key && 'bg-red-300'}

                    `}
                >{item}</div>
            ))}
        </div>
        </div>
    );
}