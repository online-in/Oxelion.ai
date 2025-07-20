
export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

export interface UserMessage {
  role: 'user';
  content: string;
}

export interface AiMessage {
  role: 'ai';
  content: string;
  citations: GroundingChunk[];
}

export type ChatMessage = UserMessage | AiMessage;