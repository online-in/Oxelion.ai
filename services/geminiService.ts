
import { GoogleGenAI } from "@google/genai";
import { GroundingChunk } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface AnswerResponse {
    answer: string;
    citations: GroundingChunk[];
}

export const getAnswer = async (question: string): Promise<AnswerResponse> => {
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });
        
        const answer = result.text;
        const groundingMetadata = result.candidates?.[0]?.groundingMetadata;
        const citations: GroundingChunk[] = groundingMetadata?.groundingChunks?.filter(
          (chunk): chunk is GroundingChunk => chunk.web?.uri != null && chunk.web?.title != null
        ) ?? [];

        return { answer, citations };
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to get answer from Gemini: ${error.message}`);
        }
        throw new Error("An unknown error occurred while fetching the answer.");
    }
};
