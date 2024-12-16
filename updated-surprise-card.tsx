
'use client'

import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Heart, Gift, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SurpriseCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [showReasons, setShowReasons] = useState(false)

  const cardAnimation = useSpring({
    transform: isOpen ? 'scale(1)' : 'scale(0.8)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
  })

  const messageAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
    config: { tension: 200, friction: 20 },
  })

  const reasonsAnimation = useSpring({
    opacity: showReasons ? 1 : 0,
    transform: showReasons ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <animated.div style={cardAnimation} className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="text-3xl mb-4 animate-bounce"
                aria-label="Open surprise card"
              >
                <Gift className="w-16 h-16 mx-auto text-pink-500" />
                <span className="block mt-2 text-lg font-semibold text-gray-700">
                  Click to open your surprise!
                </span>
              </button>
            )}
            {isOpen && (
              <animated.div style={messageAnimation}>
                <h2 className="text-3xl font-bold text-pink-600 mb-4">
                  To My Wonderful Girlfriend
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  I'm sorry you're feeling upset. Remember that you're amazing,
                  strong, and incredibly loved. Your smile brightens my world,
                  and I hope this little surprise brings that beautiful smile back.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
                <p className="text-xl font-semibold text-purple-600 mb-6">
                  I love you more than words can express!
                </p>
                {!showReasons && (
                  <Button
                    onClick={() => setShowReasons(true)}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Why I Love You
                  </Button>
                )}
                {showReasons && (
                  <animated.div style={reasonsAnimation} className="text-left">
                    <h3 className="text-2xl font-semibold text-pink-600 mb-4">Reasons Why I Love You:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {["Your beautiful smile lights up my world every day",
                      "Your kindness and compassion inspire me to be a better person",
                      "The way you laugh at my jokes, even the bad ones",
                      "Your strength and resilience in facing life's challenges",
                      "The comfort I feel just being in your presence",
                      "Your intelligence and the fascinating conversations we share",
                      "The way you support my dreams and ambitions",
                      "Your adorable quirks that make you uniquely you",
                      "The memories we've created and the future we're building together",
                      "The love and warmth you bring into my life every single day"].map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </animated.div>
                )}
              </animated.div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  )
}
