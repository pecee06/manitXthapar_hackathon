import React, { useState } from "react";
import {
  Camera,
  FileText,
  User,
  CheckCircle,
  Calendar,
  Edit,
  UploadCloud,
  ChartLine,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";


const Profile = () => {
  const [xRayImage, setXRayImage] = useState(null);
  const [severity, setSeverity] = useState("Mild");
  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [age, setAge] = useState(45);
  const [gender, setGender] = useState("Male");

  // const progressData = {
  //   labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  //   datasets: [
  //     {
  //       label: "Arthritis Severity Over Time",
  //       data: [1, 2, 3, 2, 1],
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //       fill: false,
  //     },
  //   ],
  // };


  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

  const progressData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Arthritis Severity Over Time",
        data: [1, 4, 3, 2, 0], // Example severity data points (replace with real data)
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Optional for fill effect
        borderWidth: 2,
        tension: 0.3, // Smoother curve
        fill: false,
        pointRadius: 4, // Visible data points
      },
    ],
  };

  // Optional: Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Weeks",
        },
      },
      y: {
        title: {
          display: true,
          text: "Severity Level",
        },
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto py-12 px-4 space-y-6">
        {/* User Info Section */}
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <User className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {userName}
                </h2>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Age:</strong> {age} years
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Gender:</strong> {gender}
              </p>
            </div>
          </div>
        </section>

        {/* Diagnosis and Progress Tracking Section */}
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Diagnosis Results
          </h3>

          {/* Progress Chart */}
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <ChartLine className="h-6 w-6 text-blue-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-800">
                Progress Over Time
              </h4>
            </div>
            <div className="mt-4">
              <Line data={progressData} />
            </div>
          </div>
        </section>

        {/* Additional Section: Next Steps */}
        <section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Calendar className="h-10 w-10 text-blue-600 mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Next Steps</h3>
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Based on your results, here are the next steps:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Consult with your physician for a detailed evaluation.</li>
              <li>Consider physical therapy to reduce symptoms.</li>
              <li>
                Schedule a follow-up X-ray in 3 months to monitor progress.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;