import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Section Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800">About ArthroScan</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ArthroScan is an AI-powered solution designed to revolutionize arthritis diagnosis and monitoring. By leveraging advanced deep learning techniques, we provide precise and reliable assessments, helping healthcare professionals make data-driven decisions with confidence.
          </p>
          <br></br>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            In addition to its diagnostic capabilities, ArthroScan also plays a crucial role in improving the overall efficiency of medical practices. It reduces the time and effort required to manually interpret X-ray results, ensuring that resources are utilized more effectively, which is especially important in busy healthcare environments. By providing automated and accurate readings, ArthroScan supports clinicians in making faster, more informed decisions without sacrificing the quality of patient care.
          </p>

          {/* Feature Highlights */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI-Powered Diagnosis",
                desc: "Utilizes ResNet-based deep learning models to classify arthritis severity from knee X-rays with high accuracy.",
                icon: "🤖",
              },
              {
                title: "Seamless Patient Monitoring",
                desc: "Tracks patient history over time, offering insights into arthritis progression and treatment effectiveness.",
                icon: "📈",
              },
              {
                title: "Detailed Medical Reports",
                desc: "Generates comprehensive reports to support clinicians in providing personalized treatment plans.",
                icon: "📄",
              },
              {
                title: "Reliable & Scalable",
                desc: "Designed for hospitals and research institutions, ensuring efficiency and consistency in diagnosis.",
                icon: "⚡",
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="p-6 bg-white rounded-xl shadow-md text-center transition-transform transform hover:scale-105">
                <div className="text-5xl">{icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default About;