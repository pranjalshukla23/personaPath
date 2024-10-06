import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import {
  borderRadius,
  display,
  fontSize,
  fontWeight,
  padding,
  textAlign,
  width,
} from "@mui/system";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import TestScreen from "./pages/TestScreen";
import { useState } from "react";
import ResultScreen from "./pages/ResultScreen";

function App() {
  const navigate = useNavigate();
  const personalityTypes = {
    linguistic:
      "You have a gift for words and enjoy expressing yourself through language, whether it’s writing, speaking, or even learning new languages. Communicating ideas and emotions comes naturally to you, and you often find joy in reading, storytelling, or crafting meaningful messages. Whether it’s a casual conversation or a detailed piece of writing, you have the ability to captivate others with your clarity and insight. Your love for words makes you a strong communicator, able to connect with people and share ideas effectively.",
    logical:
      "You have a sharp, analytical mind that loves solving problems and understanding complex systems. Numbers, patterns, and logical reasoning are your tools for navigating challenges, and you enjoy breaking down intricate concepts into simpler, manageable parts. Whether it’s through math, science, or strategic thinking, you excel at finding solutions and making sense of the world around you. You thrive in environments where critical thinking and problem-solving are essential, and your curiosity drives you to explore how things work.",
    artistic:
      "You see the world through a creative lens, finding beauty and inspiration in everyday objects and experiences. Your imagination is vivid, and you express yourself through art, design, or other forms of visual creativity. Whether you’re painting, sketching, or simply appreciating the aesthetics around you, you have a unique ability to turn ideas into something tangible and beautiful. Creating art brings you joy and fulfillment, and your work often inspires others to see the world in a new light.",
    musical:
      "Music is your language, and you have a deep connection to rhythm, melody, and sound. Whether you’re playing an instrument, composing your own music, or simply enjoying a favorite song, you feel the beat in your soul. You can easily recognize musical patterns and often find yourself humming or creating tunes in your head. Music is not just entertainment for you—it’s a way of expressing your emotions, ideas, and creativity. It connects you to others and offers a unique outlet for your artistic expression.",
    communication:
      "You have a natural ability to connect with people and express your thoughts and ideas clearly. Whether it’s in casual conversation, public speaking, or group discussions, you’re confident in sharing your opinions and engaging with others. Your skill in communicating allows you to build strong relationships and influence those around you. People often come to you for advice or input because you have a way of explaining things that makes sense to them. You enjoy interacting with others, and your communication style helps you lead, persuade, and connect on a deeper level.",
    kinesthetic:
      "You are in tune with your body and love expressing yourself through movement. Whether it’s dancing, sports, or any form of physical activity, you have a strong sense of coordination and enjoy using your physical abilities. You learn best by doing, and hands-on activities are where you truly shine. Whether you’re performing, building, or creating with your hands, physical engagement brings you joy and fulfillment. Movement is your form of expression, and you feel most alive when you’re actively participating in something that involves the body.",
    naturalistic:
      "You have a deep connection to nature and feel at home in outdoor environments. Whether exploring the wilderness, observing animals, or simply walking through a park, you have a keen awareness of the natural world around you. You are passionate about understanding and protecting the environment, and you enjoy learning about plants, animals, and ecosystems. Nature brings you peace and inspiration, and you feel a strong responsibility to care for the planet. Your love for the outdoors drives you to connect with the world in a way that others may overlook.",
  };
  const questions = [
    {
      question: "I write well and express my thoughts easily",
      type: "linguistic",
    },
    {
      question:
        "I like to understand how different mechanisms and processes work",
      type: "logical",
    },
    {
      question: "It is easy for me to imagine any images, even not existing",
      type: "artistic",
    },
    {
      question: "I easily define different musical instruments on the sound",
      type: "musical",
    },
    { question: "I get to know new people easily", type: "communication" },
    {
      question: "I like to exercise and feel the power of my body",
      type: "kinesthetic",
    },
    { question: "I love books and movies about animals", type: "naturalistic" },
    {
      question: "It's easy for me to count the arithematic tasks in my mind",
      type: "logical",
    },
    {
      question: "I know very well my strengths and weaknesses",
      type: "linguistic",
    },
    {
      question: "I collect figures and stamps about animals and nature",
      type: "naturalistic",
    },
    {
      question: "Easy to remember names, places, dates and details",
      type: "linguistic",
    },
    {
      question: "It is easy for me to imagine and draw volumetric figures",
      type: "artistic",
    },
    {
      question: "It's easy for me to repeat the melody by ear",
      type: "musical",
    },
    {
      question: "I feel good and not boring alone with myself",
      type: "naturalistic",
    },
    {
      question: "I easily imitate other people's gestures and movements",
      type: "kinesthetic",
    },
    { question: "I like to feed and help animals", type: "naturalistic" },
    {
      question: "My friends often consult me on their problems",
      type: "linguistic",
    },
    { question: "I write my texts and poems", type: "linguistic" },
    { question: "Love solving logical problems", type: "logical" },
    {
      question:
        "Love different types of art-painting, architecture, dance and others",
      type: "artistic",
    },
    { question: "I can play a musical instrument", type: "musical" },
    {
      question: "It is easy for me to build communication with any people",
      type: "communication",
    },
    { question: "Like to read books and magazines", type: "linguistic" },
    { question: "I love chess and other strategic games", type: "logical" },
    { question: "Often humming under my breath", type: "musical" },
    {
      question:
        "I am a person who knows what he wants and consistently goes to this",
      type: "logical",
    },
    {
      question: "I like to touch and feel things to the touch",
      type: "kinesthetic",
    },
    {
      question: "It's good for me to walk in the forest",
      type: "naturalistic",
    },
    { question: "On big parties I feel like a fish in water", type: "musical" },
    { question: "Love to shoot my videos and watch movies", type: "musical" },
    {
      question: "I protect what I believe, I don't care what others think",
      type: "naturalistic",
    },
    {
      question: "I love spending time and just walk with my friends",
      type: "communication",
    },
    {
      question:
        "I like the order of things so that everything is put into categories",
      type: "linguistic",
    },
    {
      question:
        "I like working with my hands-sewing, repairing, making, cooking",
      type: "kinesthetic",
    },
    {
      question: "I like to learn the meaning of unfamiliar words",
      type: "artistic",
    },
    {
      question: "Love to solve problems using different skills and tools",
      type: "logical",
    },
    { question: "I hear the music in my head", type: "musical" },
    { question: "I gesture a lot when I say", type: "artistic" },
    { question: "I make friends easily", type: "communication" },
    { question: "I have a large vocabulary", type: "linguistic" },
    {
      question: "I'm constantly drawing something, making sketches",
      type: "artistic",
    },
    {
      question: "I know how to recognize and accept my feelings",
      type: "communication",
    },
    { question: "Love going to the zoo or the reserve", type: "naturalistic" },
    {
      question: "Love to perform in front of the audience",
      type: "communication",
    },
    { question: "I like taking photos, I do it", type: "artistic" },
    { question: "Always feel the rhythm in the music", type: "musical" },
    { question: "I like to cook and treat others", type: "communication" },
    { question: "Always wanted to have a pet pita", type: "naturalistic" },
  ];

  const [scores, setScores] = useState({
    linguistic: 0,
    logical: 0,
    artistic: 0,
    musical: 0,
    communication: 0,
    kinesthetic: 0,
    naturalistic: 0,
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const highestScoreType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const handleAnswer = (score) => {
    const questionType = questions[questionIndex].type;
    setScores((prevScores) => ({
      ...prevScores,
      [questionType]: prevScores[questionType] + score,
    }));
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/result");
      setShowResult(true);
    }
  };

  console.log("scores", scores);
  return (
    <div className="App">
      <Container
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route
            path="/test"
            element={
              <TestScreen
                questions={questions}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
                onAnswer={handleAnswer}
                showResult={showResult}
              />
            }
          />
          <Route
            path="/result"
            element={
              <ResultScreen
                personalityType={highestScoreType}
                personalityTypes={personalityTypes}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
