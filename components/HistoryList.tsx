type Props = {
  history: string[];
};

export default function HistoryList({ history }: Props) {

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 w-full max-w-md">

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        📅 Study History
      </h2>

      {history.length === 0 ? (

        <div className="text-center text-gray-400 py-8">
          <p className="text-4xl mb-2">📖</p>
          <p>No study records yet.</p>
          <p className="text-sm">Start your learning streak today!</p>
        </div>

      ) : (

        <ul className="space-y-3 max-h-72 overflow-y-auto">

          {history.map((date, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg border"
            >

              <div className="flex items-center gap-2">
                <span className="text-lg">📅</span>
                <span className="font-medium text-gray-700">
                  {date}
                </span>
              </div>

              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Studied
              </span>

            </li>
          ))}

        </ul>

      )}

    </div>
  );
}