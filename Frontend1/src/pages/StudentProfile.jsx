import React, { useState } from "react";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <div className="bg-[#FCF8F9] min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <img
            alt="Logo"
            className="h-8 w-8"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIKtXq5w8MtHD0oRi8WmdUx_IOl-5UmWlip0ANKyiVkeRO5L2pR-G03k-JWSA7ufBg7srjuj9LhddP25pSok9lK95k87YWOFZH24V3GuSVSc7xLuN6EoW-KAt3aL8uVMY62dwpJyE2CifTPvoWUG_gABpjZ8nyLfpogAx9dxnoufHt4uZAt-lzi-KeclFs2tgk_4h0LeghBH8GXdYuhFW1ldfAE1fME3-bayQPiGnbNCDMZG9pQbU-yGzqHy2p5iDzQ2OaqyGgVM"
          />
        </div>
        <h1 className="text-xl font-bold text-[#1C0D11]">Student Profile</h1>
        <button className="text-[#1C0D11]">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      {/* Main */}
      <main className="flex-grow p-6">
        <div className="flex flex-col items-center gap-6">
          {/* Profile Pic */}
          <div className="relative">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white shadow-md"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkbPXr4jrBC-5NPMoFQw1xm6hDSjkbkUEy6UmUHCU-doQqGxPpb0vcLkRK_RYYrIbpmuw4V9QZ1Bt5h8VObMwZpqLjjWxiAh0dVC5vIqLh_pogG6Bn2-Ig5wy95gohVuLSCURN_iWrPW4DMV9fcI27i1YB5VTh9iq4I_tJylHFKwVSLhL_MGZB5CJCRIf8EvpLPnF_etqWZD7dReth0k9hDe89BywA9EbVYn2q_OwCQFQqzf8hE6QQd5d3XLC_UC23lWF4tzg_7E8")',
              }}
            />
          </div>

          {/* Student Info */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1C0D11]">Emily Carter</h2>
            <p className="text-sm text-[#9C4961]">Register No: 2021CS001</p>
          </div>

          {/* Parent + Contact + Email */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-[#9C4961]">Parent Name</p>
              <p className="text-[#1C0D11] font-semibold">Michael Carter</p>
            </div>
            <div>
              <p className="font-medium text-[#9C4961]">Parent Contact</p>
              <p className="text-[#1C0D11] font-semibold">987-654-3210</p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-[#9C4961]">Email</p>
              <p className="text-[#1C0D11] font-semibold">
                emily.carter@example.com
              </p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-[#9C4961]">Number of Arrears</p>
              <p className="text-[#1C0D11] font-semibold">0</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex border-b border-[#E8CED6]">
            <button
              className={`flex-1 py-3 text-center text-sm font-bold border-b-2 ${
                activeTab === "certifications"
                  ? "border-[#FBB6CA] text-[#1C0D11]"
                  : "border-transparent text-[#9C4961] hover:text-[#1C0D11] hover:border-[#FBB6CA]"
              }`}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </button>
            <button
              className={`flex-1 py-3 text-center text-sm font-bold border-b-2 ${
                activeTab === "feedback"
                  ? "border-[#FBB6CA] text-[#1C0D11]"
                  : "border-transparent text-[#9C4961] hover:text-[#1C0D11] hover:border-[#FBB6CA]"
              }`}
              onClick={() => setActiveTab("feedback")}
            >
              Feedback
            </button>
          </div>
        </div>

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="mt-8 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#1C0D11]">Python for Everybody</h3>
                <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-full">
                  Completed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[#9C4961] hover:text-[#1C0D11]">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <span className="material-symbols-outlined">check_circle</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#1C0D11]">Web Design Basics</h3>
                <span className="text-xs text-white bg-yellow-500 px-2 py-1 rounded-full">
                  In-progress
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[#9C4961] hover:text-[#1C0D11]">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="text-yellow-500 hover:text-yellow-700">
                  <span className="material-symbols-outlined">hourglass_top</span>
                </button>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-[#FBB6CA] text-white text-base font-bold shadow-md hover:bg-opacity-90 transition-all mt-4">
              <span className="material-symbols-outlined">add</span>
              <span className="truncate">Add Certification</span>
            </button>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="mt-8 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <p className="text-[#1C0D11]">
                "Emily consistently demonstrates strong problem-solving skills and a collaborative spirit in team projects. She would benefit from contributing more during class discussions."
              </p>
              <div className="flex justify-end gap-2 mt-2">
                <button className="text-[#9C4961] hover:text-[#1C0D11]">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4">
              <p className="text-[#1C0D11]">
                "Excellent work on the last assignment. The code was clean, well-documented, and highly efficient. Keep up the great work!"
              </p>
              <div className="flex justify-end gap-2 mt-2">
                <button className="text-[#9C4961] hover:text-[#1C0D11]">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-[#FBB6CA] text-white text-base font-bold shadow-md hover:bg-opacity-90 transition-all mt-4">
              <span className="material-symbols-outlined">add</span>
              <span className="truncate">Add Feedback</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentProfile;
