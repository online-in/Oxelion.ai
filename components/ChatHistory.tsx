import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import LinkIcon from './icons/LinkIcon';
import Loader from './Loader';

interface ChatHistoryProps {
  history: ChatMessage[];
  isLoading: boolean;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ history, isLoading }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isLoading]);

  return (
    <div className="chat-history-container">
      {history.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.role}-message`}>
          <p className="message-role">{msg.role === 'user' ? 'You' : 'Oxelion AI'}</p>
          <div className="message-content">
            <p dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br />') }} />
            {msg.role === 'ai' && msg.citations.length > 0 && (
              <div className="citations-container">
                <h3 className="citations-title">Sources</h3>
                <div className="citations-grid">
                  {msg.citations.map((citation, idx) => (
                    <a
                      key={idx}
                      href={citation.web.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="citation-link"
                    >
                      <LinkIcon className="citation-link-icon" />
                      <span className="citation-link-text" title={citation.web.title}>
                        {citation.web.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="chat-message ai-message">
             <p className="message-role">Oxelion AI</p>
             <div className="message-content">
                <Loader />
             </div>
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatHistory;
