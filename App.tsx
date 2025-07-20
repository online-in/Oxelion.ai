import React, { useState, useCallback } from 'react';
import { getAnswer } from './services/geminiService';
import { GroundingChunk } from './types';
import QuestionForm from './components/QuestionForm';
import AnswerDisplay from './components/AnswerDisplay';

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [citations, setCitations] = useState<GroundingChunk[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await getAnswer(question);
      setAnswer(result.answer);
      setCitations(result.citations);
      setShowAnswer(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      setShowAnswer(false);
    } finally {
      setIsLoading(false);
    }
  }, [question]);

  const handleReset = useCallback(() => {
    setQuestion('');
    setAnswer('');
    setCitations([]);
    setError(null);
    setShowAnswer(false);
  }, []);
  
  const viewKey = showAnswer ? 'answer' : 'question';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-3xl" key={viewKey}>
        {showAnswer ? (
          <AnswerDisplay
            question={question}
            answer={answer}
            citations={citations}
            handleReset={handleReset}
          />
        ) : (
          <QuestionForm
            question={question}
            setQuestion={setQuestion}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center w-full max-w-2xl mx-auto">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
