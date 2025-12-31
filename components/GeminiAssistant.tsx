
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { getShoppingAssistantResponse } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: "Hi! I'm your Daraz Smart Assistant. Looking for a gift or a specific product today?"}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    const response = await getShoppingAssistantResponse(userMsg);
    setMessages(prev => [...prev, {role: 'assistant', content: response}]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-daraz-orange p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot size={24} />
              <h3 className="font-bold">Daraz AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-daraz-orange text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <Loader2 className="animate-spin text-daraz-orange" size={20} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-daraz-orange"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-daraz-orange text-white p-2 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-daraz-orange text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center space-x-2"
        >
          <MessageSquare size={24} />
          <span className="font-bold hidden md:inline">Ask AI</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
