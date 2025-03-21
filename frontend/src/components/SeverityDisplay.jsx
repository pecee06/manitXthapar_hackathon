import React from "react";
import { CheckCircle, AlertTriangle, XCircle, Frown, Smile } from "lucide-react";

const severityMap = [
  { 
    text: "Healthy knee", 
    Icon: Smile, 
    bg: "bg-green-100 border-green-400 text-green-800"
  },
  { 
    text: "Doubtful joint narrowing with possible osteophytic lipping", 
    Icon: CheckCircle, 
    bg: "bg-yellow-100 border-yellow-400 text-yellow-800"
  },
  { 
    text: "Definite presence of osteophytes and possible joint space narrowing", 
    Icon: AlertTriangle, 
    bg: "bg-orange-100 border-orange-400 text-orange-800"
  },
  { 
    text: "Multiple osteophytes, definite joint space narrowing, with mild sclerosis", 
    Icon: Frown, 
    bg: "bg-red-100 border-red-400 text-red-800"
  },
  { 
    text: "Large osteophytes, significant joint narrowing, and severe sclerosis", 
    Icon: XCircle, 
    bg: "bg-red-200 border-red-600 text-red-900"
  }
];

const SeverityDisplay = ({ severityScore }) => {
  const severity = severityMap[severityScore] || severityMap[0];

  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-2xl border shadow-lg ${severity.bg} w-full max-w-lg`}>
      {/* Render the icon dynamically */}
      <severity.Icon className="w-8 h-8" />
      <p className="mt-2 text-lg font-semibold text-center">{severity.text}</p>
    </div>
  );
};

export default SeverityDisplay;