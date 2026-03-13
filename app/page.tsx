"use client";

import StudyButton from "@/components/StudyButton";
import { calculateStreak } from "@/lib/streakLogic";
import { useEffect, useState } from "react";

export default function Home() {

  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);

  const fetchData = () => {

    const stored = localStorage.getItem("studyDates");

    const dates = stored ? JSON.parse(stored) : [];

    const data = calculateStreak(dates);

    setStreak(data.streak);
    setTotal(data.total);
    setLastDate(data.lastDate);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex flex-col items-center justify-center p-6">

      <div className="w-full max-w-md">

        {/* App Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          📚 Learning Streak
        </h1>

        {/* Card Container */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 space-y-6">

          {/* Streak Display */}
          <div className="text-center">

            <p className="text-gray-500 text-sm">
              Current Streak
            </p>

            <div className="text-5xl font-bold text-orange-500 flex items-center justify-center gap-2">
              🔥 {streak}
            </div>

            <p className="text-gray-400 text-sm mt-1">
              Keep learning every day!
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 text-sm">
                Total Days
              </p>
              <p className="text-xl font-bold text-blue-600">
                {total}
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 text-sm">
                Last Studied
              </p>
              <p className="text-sm font-semibold text-purple-600">
                {lastDate || "None"}
              </p>
            </div>

          </div>

          {/* Study Button */}
          <StudyButton refresh={fetchData} />

          {/* History Link */}
          <div className="text-center">

            <a
              href="/history"
              className="text-indigo-600 font-semibold hover:underline"
            >
              View Study History →
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}