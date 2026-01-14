import React, { useState } from 'react';
import { ArrowRight, Compass, Hammer, AlertTriangle, Shield, Target } from 'lucide-react';

interface HomeProps {
  onStartRoadmap: () => void;
}

export function Home({ onStartRoadmap }: HomeProps) {
  const [selectedMode, setSelectedMode] = useState<'explorer' | 'builder'>('explorer');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Statistics Banner */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              73% of first-time investors lose money in their first year
            </div>
            <p className="text-gray-700 mb-3">
              Most losses come from lack of preparation, emotional decisions, and poor discipline — not market conditions.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <span className="font-semibold">Source:</span> Behavioral Finance Research, 2023
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-8 mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-teal-100 rounded-lg flex-shrink-0">
            <Shield className="w-8 h-8 text-teal-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              We don't give stock tips. We make you ready.
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This platform evaluates your knowledge, tests your behavior, and builds your discipline before you risk real money.
            </p>
            
            {/* EXPLICIT DIFFERENTIATION STATEMENT */}
            <div className="bg-white rounded-xl p-6 mb-4 border-2 border-teal-400 shadow-sm">
              <p className="text-lg text-gray-900 leading-relaxed">
                <strong className="text-teal-700">Most investing apps suggest where to invest.</strong><br/>
                <strong className="text-teal-700">This system decides when you are ready.</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <div className="font-semibold text-gray-900 mb-1">Traditional Apps</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Give you stocks/tips immediately</li>
                  <li>• Focus on returns & predictions</li>
                  <li>• No behavior assessment</li>
                  <li>• High beginner failure rate</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <div className="font-semibold text-gray-900 mb-1">Readiness System</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Evaluates your preparation first</li>
                  <li>✓ Tests decision quality, not predictions</li>
                  <li>✓ Locks stages until you're ready</li>
                  <li>✓ Protects beginners from mistakes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Build Investor Readiness — Even With ₹500
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A beginner-first system for learning, simulating, and building discipline through visible rule-based logic.
        </p>
        <button
          onClick={onStartRoadmap}
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg font-semibold shadow-lg"
        >
          Start Your Assessment
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-500 mt-3">
          Takes 2 minutes • Get personalized roadmap instantly
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Choose Your Mode
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Explorer Mode */}
          <button
            onClick={() => setSelectedMode('explorer')}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedMode === 'explorer'
                ? 'border-teal-600 bg-teal-50'
                : 'border-gray-200 hover:border-teal-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Compass className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Explorer Mode
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn fundamentals and simulate scenarios without pressure. Perfect for complete beginners.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Educational capsules</li>
                  <li>• Risk-free simulations</li>
                  <li>• No time commitments</li>
                </ul>
              </div>
            </div>
          </button>

          {/* Builder Mode */}
          <button
            onClick={() => setSelectedMode('builder')}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedMode === 'builder'
                ? 'border-teal-600 bg-teal-50'
                : 'border-gray-200 hover:border-teal-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Hammer className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Builder Mode
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Build discipline through structured weekly goals and consistency tracking.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Structured micro-goals</li>
                  <li>• Consistency tracking</li>
                  <li>• Habit formation focus</li>
                </ul>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Learn First</h3>
          <p className="text-sm text-gray-600">
            Understand core concepts before making any decisions. No shortcuts.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Simulate Behavior</h3>
          <p className="text-sm text-gray-600">
            See how consistency and discipline impact outcomes over time.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🛡️</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Protected Path</h3>
          <p className="text-sm text-gray-600">
            Progress blocked until you're ready. Safety over speed.
          </p>
        </div>
      </div>

      {/* What This Is NOT */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-3">This Is NOT:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">✗</span>
            <span>A stock advisory or tip-giving service</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">✗</span>
            <span>A platform for real money transactions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold">✗</span>
            <span>A get-rich-quick scheme or return-focused system</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
