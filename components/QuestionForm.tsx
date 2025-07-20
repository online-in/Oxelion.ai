import React from 'react';
import SendIcon from './icons/SendIcon';

interface QuestionFormProps {
  question: string;
  setQuestion: (question: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ question, setQuestion, handleSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && question.trim()) {
        handleSubmit(e);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
        Oxelion AI
      </h1>
      <p className="text-center text-slate-500 mb-8 text-lg">Get answers to any question.</p>
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={question}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question here..."
          className="w-full p-4 pr-20 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none transition-shadow duration-300 shadow-lg"
          rows={3}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="absolute top-1/2 right-3 -translate-y-1/2 p-2 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-500"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;