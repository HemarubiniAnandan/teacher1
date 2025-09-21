// src/pages/ClassList.jsx
import React from "react";

const ClassList = () => {
  const students = [
    {
      name: "Ethan Harper",
      regNo: "12345",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCP6kGpmWQiJTxqhL-g8nOrQCKyTRUXygHue01QBSwU0d0G0NW2cYyHx50j-0ck31jq-dnRgtz9SZsy86ze54HlsAT8vS8TSZFRt8TqD9dzV6Xyp6JMRR6LvLanQ8InnBPjZe6DXRaa7BonwroF7cp-3o66yjaJIHhE0QlCzyig_qZzyDCgJhxvf2mwK2tWd4ByxDTSneYxvd1Kgnqg0tJA9OdwFCJOy7c_fjEqpwBDudAayeAARydtVKioenLm-okEuacbMs8tvc",
    },
    {
      name: "Olivia Bennett",
      regNo: "67890",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC80uCtCUKkprw26kGQYwDiE_eNhfpszsQBi-j7bYQTxsiNNhuHNnG60NqFb0PBlDteiAXPZCxnQx93FSGqPZZOefFmAgwK3EN3kgiTSaOqXi771HIxG7Wxd-3GlfkUa8KU_zMV2ZiSaEVhCbXb7h9hFpFTKih2RuTuzx5hRVuQomzqmYfSQ92S2UI83QfSnxtlSfo9VApdW2P2tKr5u5XQNx7lRs5nbzmwvrwd0dYjxpwiAvz7IImIX3KWgRJI9EkUaLH3_P7i4B0",
    },
    {
      name: "Noah Carter",
      regNo: "24680",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoezaAztB4sciBsTMU1VNaX5JwCZHcVMZFQ_L9XoMPnuGmbufCrQW9Ut005PW2EmnCQqWjzJ7Qow1RF14k3fZfugCcSHhUj7OZclfSK40L-Ybd4eR5iPyRDEt_LfNHcAqUYHjQuXMkLJ5u8qgrMwPJrjkPk7CECRPL8iKi2r0G0opBSb2tXTP8V0fBs0WLJEnBRu0ldF6Hhrox_3wdxn7vpwvHLaWzu8iCY2QeuaH20OPfWDj5w-YsHKRTe0ccDaN0oADMj_p1_Xk",
    },
    {
      name: "Ava Mitchell",
      regNo: "13579",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRc4BtN8-s24Mk3QwdWsShZTnOVn7jzQiWE4SCLQe3RToimfywuMJgpW2Gla8FJCTRGAqVZYlYSEhdXMjzaaGxlCUpPrOyqsHW08oLJBggrOJnAinvV903DiFsFj6cytgkgBAs2g1cjehLWYfHfrXyrsEEJeeBCRN-h4Wj-y9PFsEaHqd6d5uF_0zZYPn1dKIWcqmxSCEmp9P-XNHLksQjdpNMhLRS2NRtfAGrLudfmUYQKIWwmml4lKs7e3MgViPVWDk3tyHoOxc",
    },
    {
      name: "Liam Foster",
      regNo: "97531",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRzWNC5pWJNuBGr8d5ShQvcKn6jRezfVIvkrucHRm6zzQCR1-0gSU5yU3aZXFBqZwJVUMuj-Z6527znTMHncE2SO7cAXdHRlnRWfZLCyAl9iEN5zWYiIRE-Z_28XDKDt1Spyb7mEdhS8mdykoX_3SMrEow9rMXBKe3pTuF6Oehw5o_EpE39UGiwLr3w9zPHby1qI6djKxRmMXgBYIDvgf9xC6tUPLeDeK0-tL2QBNLYPKB5dei2EgL1sQmxT587DxIazF634hMpvs",
    },
  ];

  return (
    <div className="bg-[#FCF8F9] min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#fcf8f9]/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button className="text-[#1c0d11] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-[#f4e7ea] transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-[#1c0d11] text-xl font-bold flex-1 text-center">
            IT A
          </h1>
          <div className="size-10"></div>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9c4961]">
              search
            </span>
            <input
              type="text"
              placeholder="Search by name or register number"
              className="form-input w-full rounded-full border-none bg-[#f4e7ea] py-3 pl-10 pr-4 text-base text-[#1c0d11] placeholder:text-[#9c4961] focus:outline-none focus:ring-2 focus:ring-[#fbb6ca]"
            />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-4 flex-grow">
        <h2 className="text-[#1c0d11] text-lg font-bold mb-4">
          Students ({students.length})
        </h2>
        <div className="space-y-3">
          {students.map((student, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={student.img}
                alt={student.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-[#1c0d11] text-base font-semibold">
                  {student.name}
                </p>
                <p className="text-[#9c4961] text-sm">
                  Register No: {student.regNo}
                </p>
              </div>
              <button className="text-[#9c4961] hover:text-[#1c0d11] transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Add Button */}
      <div className="fixed bottom-5 right-5 z-20">
        <button className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fbb6ca] text-[#1c0d11] shadow-lg hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-3xl">add</span>
          <span className="sr-only">Add Student</span>
        </button>
      </div>
    </div>
  );
};

export default ClassList;
