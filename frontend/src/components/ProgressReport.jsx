import { Activity } from "lucide-react";
import { useContext } from "react";
import { StatusContext } from "../contexts/StatusProvider";

const ProgressReport = ({ styles }) => {
  const { fileUploaded } = useContext(StatusContext); // Assuming fileUploaded state is available

  return (
    <div
      className={`${styles} flex flex-col items-center overflow-y-auto p-4 bg-white shadow-md rounded-lg border border-gray-200`}
    >
      {/* Title with Medical Icon */}
      <div className="flex items-center gap-2 text-blue-700 text-xl font-bold">
        <Activity size={24} />
        <h3>Patient Progress Report</h3>
      </div>

      {/* Progress Report */}
      {fileUploaded ? (
        <div>
          Report : Severity is ...
        </div>
      )
        : (
          <div>

            <div className="flex flex-col items-center md:mt-10 mt-5 text-gray-600">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
                Generate AI Report
              </button>
            </div >
          </div >
        )}

    </div >
  );
};

export default ProgressReport;