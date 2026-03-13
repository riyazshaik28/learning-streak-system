"use client";

import { useState } from "react";

type Props = {
  refresh: () => void;
};

export default function StudyButton({ refresh }: Props) {

  const [message, setMessage] = useState("");

  const markStudy = () => {

  const today = new Date().toLocaleDateString("en-CA");

  const stored = localStorage.getItem("studyDates");

  let dates = stored ? JSON.parse(stored) : [];

  if (dates.includes(today)) {
    setMessage("You have already marked today.");
    return;
  }

  dates.push(today);

  localStorage.setItem("studyDates", JSON.stringify(dates));

  setMessage("Study recorded successfully!");

  refresh();
};

  return (
    <div className="mt-4 text-center">

      <button
        onClick={markStudy}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        I Studied Today
      </button>

      {message && (
        <p className="text-green-600 mt-2">{message}</p>
      )}

    </div>
  );
}