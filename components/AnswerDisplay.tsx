import React from 'react';
import { GroundingChunk } from '../types';
import LinkIcon from './icons/LinkIcon';
import ResetIcon from './icons/ResetIcon';

interface AnswerDisplayProps {
  question: string;
  answer: string;
  citations: GroundingChunk[];
  handleReset: () => void;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ question, answer, citations, handleReset }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <p className="text-slate-500 mb-2">Your question:</p>
        <p className="text-slate-900 font-semibold text-lg">{question}</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
          Answer
        </h2>
        <div 
          className="prose max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, '<br />') }} 
        />
        
        {citations.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-600 mb-3">Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {citations.map((citation, index) => (
                <a
                  key={index}
                  href={citation.web.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 truncate"
                >
                  <LinkIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600 truncate" title={citation.web.title}>
                    {citation.web.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-600"
        >
          <ResetIcon className="w-5 h-5"/>
          Ask Another Question
        </button>
      </div>
    </div>
  );
};

export default AnswerDisplay;