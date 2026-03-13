"use client";

import HistoryList from "@/components/HistoryList";
import { useEffect, useState } from "react";

export default function HistoryPage() {

  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {

    const stored = localStorage.getItem("studyDates");

    const dates = stored ? JSON.parse(stored) : [];

    setHistory(dates.sort().reverse());

  }, []);

  return (

    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Study History
      </h1>

      <HistoryList history={history} />
<a
            href="/"
            className="text-indigo-600 hover:underline"
          >
            ← Back to Dashboard
          </a>
    </div>

  );
}