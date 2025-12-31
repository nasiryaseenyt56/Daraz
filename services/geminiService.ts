
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getShoppingAssistantResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful and charismatic shopping assistant for "Daraz", a major e-commerce platform in South Asia (Pakistan, Bangladesh, etc.).
      
      User is asking: "${query}"
      
      Provide a concise, friendly recommendation or answer based on the context of shopping on Daraz. Mention popular categories, current deals, or general product advice. Keep it under 100 words. If asked about prices, give estimates in Pakistani Rupees (PKR).`,
      config: {
        systemInstruction: "You are a professional and friendly e-commerce expert for Daraz. Help users find products, explain benefits, and suggest gifts.",
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. How else can I help you find what you need on Daraz?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to assistant. Please try again.";
  }
};
