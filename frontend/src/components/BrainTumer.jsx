import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  { id: 1, text: "Do you experience frequent or severe headaches?", key: "headaches" },
  { id: 2, text: "Have you had memory loss or confusion recently?", key: "memory" },
  { id: 3, text: "Do you have difficulty speaking or understanding speech?", key: "speech" },
  { id: 4, text: "Have you experienced any vision changes or blurriness?", key: "vision" },
  { id: 5, text: "Is there a family history of brain-related illnesses?", key: "family" },
];

export default function NeuroCheck() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [risk, setRisk] = useState(null);

  const handleAnswer = (value) => {
    const key = questions[step].key;
    setAnswers({ ...answers, [key]: value });
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      evaluateRisk({ ...answers, [key]: value });
    }
  };

  const evaluateRisk = (responses) => {
    // Simple ML-like scoring system
    let score = 0;
    Object.values(responses).forEach((val) => {
      if (val === true) score += 1;
    });

    if (score <= 1) setRisk("Low Risk");
    else if (score <= 3) setRisk("Moderate Risk");
    else setRisk("High Risk");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardContent>
          {!risk ? (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">NeuroCheck: Early Risk Screener</h2>
              <p>{questions[step].text}</p>
              <div className="flex gap-4">
                <Button onClick={() => handleAnswer(true)}>Yes</Button>
                <Button onClick={() => handleAnswer(false)}>No</Button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold">Your Risk Level</h2>
              <p className={`text-lg font-medium ${risk === "High Risk" ? "text-red-600" : risk === "Moderate Risk" ? "text-yellow-500" : "text-green-600"}`}>{risk}</p>
              <Button onClick={() => { setStep(0); setAnswers({}); setRisk(null); }}>Retake Test</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
