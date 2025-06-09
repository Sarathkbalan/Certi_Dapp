import { BrowserProvider, Contract } from "ethers";
import { useState } from "react";
import abi from "./assets/Certi.json";
import address from "./assets/deployed_addresses.json";

function App() {
  const [txtDetails, setTxDetails] = useState({
    ID: 0,
    Name: "",
    Course: "",
    Grade: "",
    Date: "",
  });

  const [Output, setOutput] = useState();
  const provider = new BrowserProvider(window.ethereum);

  async function handleWallet() {
    const signer = await provider.getSigner();
    alert(`${signer.address} connected successfully.`);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setTxDetails((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const signer = await provider.getSigner();
    const contObj = new Contract(address["CertModule#Certi"], abi.abi, signer);
    const txReciept = await contObj.issue(
      txtDetails.ID,
      txtDetails.Name,
      txtDetails.Course,
      txtDetails.Grade,
      txtDetails.Date
    );

    if (txReciept) {
      alert(`${txReciept.hash} Created Successfully.`);
    } else {
      alert("Check Details.");
    }
  }

  async function handleClick() {
    const ID = document.getElementById("ID").value;
    const signer = await provider.getSigner();
    const contObj = new Contract(address["CertModule#Certi"], abi.abi, signer);
    const result = await contObj.Certificates(ID);

    const out = `Name: ${result[0]}, Course: ${result[1]}, Grade: ${result[2]}, Date: ${result[3]}`;
    setOutput(out);
  }

  return (
    <div className="min-h-screen bg-gray-200 text-white flex items-center justify-center p-6">
      <div className="bg-white-200 p-8 border-2 border-black rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl text-black font-extrabold mb-8 text-center tracking-wide">
          Certificate Issuer
        </h1>

        <div className="mb-8 text-center">
          <button
            onClick={handleWallet}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg font-semibold transition duration-300 ease-in-out"
          >
            Connect to MetaMask
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["ID", "Name", "Course", "Grade", "Date"].map((field) => (
            <div key={field}>
              <label className="block mb-2 font-semibold text-gray-600">{field}:</label>
              <input
                type={field === "Date" ? "date" : "text"}
                name={field}
                onChange={handleChange}
                className="w-full px-4 py-3  rounded-xl border-2 border-black text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
              />
            </div>
          ))}

          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-xl shadow-lg cursor-pointer font-semibold transition duration-300 ease-in-out"
            />
          </div>
        </form>

        <div className="my-10 border-t border-gray-700 pt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-200">Get Certificate</h2>
          <div className="flex gap-4">
            <input
              type="text"
              id="ID"
              placeholder="Enter Certificate ID"
              className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-600 transition shadow-md"
            />
            <button
              onClick={handleClick}
              className="px-6 py-3 bg-green-600 hover:bg-purple-700 rounded-xl shadow-lg font-semibold transition duration-300 ease-in-out"
            >
              Get
            </button>
          </div>
        </div>

        {Output && (
          <div className="mt-6 bg-gray-700 p-5 rounded-2xl shadow-inner text-gray-100 font-medium whitespace-pre-wrap">
            <p>{Output}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
