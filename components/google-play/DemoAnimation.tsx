"use client";

import { useState, useEffect } from "react";
import { Star, Sparkles, Bot, Zap } from "lucide-react";

const DEMO_REVIEWS = [
  {
    author: "Sarah Jenkins",
    initial: "S",
    color: "from-purple-500 to-pink-500",
    rating: 5,
    text: "Absolutely love this app! The new features are exactly what I was looking for. However, I wish there was a dark mode option.",
    reply: "Hi Sarah! Thank you so much for the 5-star rating! 🌟 We're thrilled to hear you love the new features. Great news - Dark Mode is actually coming in our next update next week! Stay tuned! 🌙"
  },
  {
    author: "Michael Chen",
    initial: "M",
    color: "from-blue-500 to-cyan-500",
    rating: 4,
    text: "Great functionality but the sync can be a bit slow sometimes. Otherwise perfect for my daily workflow.",
    reply: "Thanks for the feedback Michael! We appreciate your support. 🚀 We're actively working on optimizing the sync performance in the upcoming v2.1 release. Let us know if you have any other suggestions!"
  },
  {
    author: "Emma Wilson",
    initial: "E",
    color: "from-orange-500 to-red-500",
    rating: 5,
    text: "The AI suggestions are mind-blowing! Saved me hours of work this week alone. Highly recommended!",
    reply: "That's fantastic to hear, Emma! 🎉 We're so glad our AI tools are helping you save time. We have even more productivity features coming soon!"
  }
];

export default function DemoAnimation() {
  const [text, setText] = useState("");
  const [isThinking, setIsThinking] = useState(true);
  const [showActions, setShowActions] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const currentReview = DEMO_REVIEWS[currentReviewIndex];

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      setIsThinking(true);
      setShowActions(false);
      setText("");
      currentIndex = 0;

      timeout = setTimeout(() => {
        setIsThinking(false);
        
        const fullText = DEMO_REVIEWS[currentReviewIndex].reply;
        
        const type = () => {
          if (currentIndex < fullText.length) {
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            timeout = setTimeout(type, 20 + Math.random() * 30);
          } else {
            setShowActions(true);
            timeout = setTimeout(() => {
              setCurrentReviewIndex((prev) => (prev + 1) % DEMO_REVIEWS.length);
            }, 10000); // Wait 10 seconds before switching
          }
        };
        type();
      }, 1500);
    };

    animate();

    return () => clearTimeout(timeout);
  }, [currentReviewIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Floating Badge */}
      <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-700 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 animate-bounce duration-[3000ms] z-10">
        <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* Review Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentReview.color} flex items-center justify-center text-white font-bold transition-colors duration-500`}>
              {currentReview.initial}
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white transition-all duration-300">{currentReview.author}</h4>
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < currentReview.rating ? "fill-current" : "text-gray-300 dark:text-gray-600"}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <span className="text-xs text-gray-400">2 mins ago</span>
        </div>

        {/* Review Text */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed min-h-[60px] transition-opacity duration-300">
          "{currentReview.text}"
        </p>

        {/* AI Reply Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">AI Suggested Reply</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed min-h-[80px]">
              {isThinking ? (
                <span className="inline-flex gap-1 items-center text-gray-400">
                  Thinking<span className="animate-pulse">...</span>
                </span>
              ) : (
                <span>
                  {text}
                  {!showActions && (
                    <span className="inline-block w-1.5 h-4 ml-1 bg-blue-600 animate-pulse align-middle"></span>
                  )}
                </span>
              )}
            </p>
          </div>

          {showActions && (
            <div className="mt-3 flex gap-2 animate-in fade-in slide-in-from-bottom-2">
              <button className="flex-1 bg-blue-600 text-white text-xs font-medium py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                Post Reply
              </button>
              <button className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Zap className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
