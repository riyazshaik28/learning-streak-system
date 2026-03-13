type Props = {
  streak: number;
  total: number;
  lastDate: string | null;
};

export default function StreakCard({ streak, total, lastDate }: Props) {

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">

      <p className="text-lg">
        Current Streak: <b>{streak}</b> days
      </p>

      <p className="mt-2">
        Total Study Days: <b>{total}</b>
      </p>

      <p className="mt-2">
        Last Studied: <b>{lastDate || "None"}</b>
      </p>

    </div>
  );
}