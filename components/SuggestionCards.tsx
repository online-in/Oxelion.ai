import React from 'react';

interface SuggestionCardsProps {
    onSend: (message: string) => void;
}

const suggestions = [
  { title: "Create a model", subtitle: "to analyze effectiveness" },
  { title: "Evaluate arguments", subtitle: "for universal healthcare" },
  { title: "Create", subtitle: "a confusion matrix" },
  { title: "Explain", subtitle: 'the "Hello, World!" program' },
];

const SuggestionCards: React.FC<SuggestionCardsProps> = ({ onSend }) => {
    const handleCardClick = (title: string, subtitle: string) => {
        onSend(`${title} ${subtitle}`);
    };

  return (
    <div className="suggestion-container">
      <h1 className="suggestion-header">Hello. How can I help today?</h1>
      <div className="suggestion-grid">
        {suggestions.map((s, i) => (
          <div key={i} className="suggestion-card" onClick={() => handleCardClick(s.title, s.subtitle)}>
            <p>{s.title}</p>
            <span>{s.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionCards;
