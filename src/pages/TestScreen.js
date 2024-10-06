import TestBox from "../components/TestBox";

function TestScreen({ questions, questionIndex, setQuestionIndex, onAnswer }) {
  return (
    <TestBox
      question={questions[questionIndex].question}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      onAnswer={onAnswer}
    />
  );
}

export default TestScreen;
