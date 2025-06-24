import React from "react";

export default function Dashboard() {
  return (
    <div className="pt-24 px-6 min-h-screen bg-[#0a0a0a] text-white">
      <h1 className="text-3xl font-bold text-[#D09D42] mb-4">Dashboard</h1>

      <div className="bg-gray-900 rounded-xl p-6 shadow-md">
        <p className="text-lg mb-2">👋 Welcome back, Akash!</p>
        <p className="text-sm text-gray-400">
          This is your dashboard. You can display user data, stats, and actions here.
        </p>

        {/* Example widgets or sections */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#1c1c1c] p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Portfolio</h2>
            <p className="text-gray-400">Your latest algo trading stats go here.</p>
          </div>

          <div className="bg-[#1c1c1c] p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">⚙️ Settings</h2>
            <p className="text-gray-400">Manage your account or preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}