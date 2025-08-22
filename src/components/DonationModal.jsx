import { useState } from "react";

export default function DonationModal() {
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState("800");
  const [idType, setIdType] = useState("Aadhar Card"); 
  const [paymentMode, setPaymentMode] = useState("E-Mandate"); // track payment mode

const inputBox =
  "w-full px-3 py-2.5 rounded-lg bg-[#181b2e] border border-green-400/60 text-white placeholder-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-300 transition shadow-sm";


  return (
    <div className="min-h-screen bg-[#0e1122] text-white flex justify-center py-12 px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8">
        
        {/* Left: Donation Form */}
        <div className="md:col-span-2 bg-[#1a1d35] p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-green-400">Donate Now!</h1>

          {/* Frequency */}
          <div className="mb-8">
            <p className="mb-3 font-semibold">Choose the frequency of your donation</p>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="monthly"
                  checked={frequency === "monthly"}
                  onChange={() => setFrequency("monthly")}
                  className="accent-green-400"
                />
                Monthly
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="onetime"
                  checked={frequency === "onetime"}
                  onChange={() => setFrequency("onetime")}
                  className="accent-green-400"
                />
                One Time
              </label>
            </div>
          </div>

          {/* Donation Amount */}
          <div className="mb-8">
            <p className="mb-3 font-semibold">Choose the amount of your donation</p>
            <div className="flex gap-4 flex-wrap items-center">
              {["800", "1200", "1800"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`px-5 py-2 rounded-lg border transition ${
                    amount === amt
                      ? "bg-green-400 text-black border-green-400"
                      : "bg-[#0e1122] border-green-400 text-white hover:bg-green-500/20"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
              <input
                type="number"
                placeholder="Other"
                className={`${inputBox} w-28`}
                onFocus={() => setAmount("")}
              />
            </div>
          </div>

          {/* Donor Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <input type="text" placeholder="First Name*" className={inputBox} />
            <input type="text" placeholder="Last Name*" className={inputBox} />
            <input type="email" placeholder="Email ID*" className={inputBox} />
            <input type="text" placeholder="Mobile Number*" className={inputBox} />
            <input type="date" placeholder="Date of Birth*" className={inputBox} />

            {/* New Identification Section */}
            <div className="md:col-span-2">
              <p className="mb-2 font-semibold">Select Unique Identification*</p>
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  value={idType}
                  onChange={(e) => setIdType(e.target.value)}
                  className={inputBox}
                >
                  <option>Aadhar Card</option>
                  <option>PAN Card</option>
                  <option>Driving Licence</option>
                  <option>Voter ID</option>
                </select>
                <input
                  type="text"
                  placeholder={`Enter your ${idType} Number*`}
                  className={inputBox}
                />
              </div>
            </div>

            <input type="text" placeholder="Address*" className={`${inputBox} md:col-span-2`} />
          </div>

          {/* Bank / Payment Details */}
          <div className="mb-8">
            <p className="mb-3 font-semibold">Please Select Donation Mode</p>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className={`${inputBox} mb-4`}
            >
              <option>E-Mandate</option>
              <option>UPI</option>
            </select>

            {/* Conditional fields */}
            {paymentMode === "UPI" ? (
              <input
                type="text"
                placeholder="Enter your UPI ID*"
                className={inputBox}
              />
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Bank Name" className={inputBox} />
                <input type="text" placeholder="IFSC Code" className={inputBox} />
                <select className={inputBox}>
                  <option>Savings</option>
                  <option>Current</option>
                </select>
                <input
                  type="text"
                  placeholder="Account Number"
                  className={`${inputBox} md:col-span-2`}
                />
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="mb-8 flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-green-400" />
            <p>
              I am an Indian Citizen and I have read and understood the{" "}
              <span className="text-green-400 underline cursor-pointer">declaration</span>.
            </p>
          </div>

          <button className="w-full bg-green-400 text-black py-3 rounded-xl font-bold text-lg hover:bg-green-300 transition">
            Proceed to Verify Details
          </button>
        </div>

        {/* Right: Info Section */}
        <div className="bg-[#1a1d35]  p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <iframe
              className="w-full rounded-xl"
              height="200"
              src="https://www.youtube.com/watch?v=_Fes7vHfZtg"
              title="Greenpeace Video"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>Email: <span className="text-green-400">supporter.services.in@greenpeace.org</span></p>
          <p>Call: 1800 425 4594</p>

          <h2 className="text-xl font-bold mt-6 mb-2">Tax Exemption</h2>
          <p>Your contribution has an exemption of 50% under section 80G of the IT act 1961.</p>

          <h2 className="text-xl font-bold mt-6 mb-2">Terms and Conditions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Donations accepted only from Indian citizens.</li>
            <li>No donations from corporates or Govt agencies.</li>
            <li>Accepted via cards, NACH, e-Mandates, online transfers (not cash).</li>
          </ul>

          <p className="mt-6 font-semibold text-green-400">
            Your donation is critical in running campaigns and enabling victories!
          </p>
        </div>
      </div>
    </div>
  );
}
