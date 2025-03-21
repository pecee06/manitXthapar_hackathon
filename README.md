# Arthritis Stage Classification and Recommendation System

## 🩺 Project Overview

This project is an **Arthritis Stage Classification and Recommendation System** that uses Resnet 18 to classify the stages of arthritis from medical images. Based on the classification, the system provides personalized AI powered recommendations for treatment and management.

## 🚀 Features

- Classifies arthritis into different stages.
- Provides personalized treatment recommendations.
- User-friendly interface for image upload and result viewing.
- Efficient and accurate predictions using state-of-the-art algorithms.

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind
- **Backend:** Python (FastAPI)
- **Machine Learning:** PyTorch
- **Database & Authentication:** Appwrite

## 🧑‍💻 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pecee06/manitXthapar_hackathon.git
   cd manitXthapar_hackathon
   ```

2. Install dependencies:

   ```bash
   # Backend
   cd backend
   pip install -r requirements.txt

   # Frontend
   cd ../frontend
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in both `backend` and `frontend` folders.
   - Add necessary Appwrite API keys, database credentials, and model paths.

4. Run the application:

   ```bash
   # Start Backend
   cd backend
   uvicorn main:app --reload

   # Start Frontend
   cd ../frontend
   npm run dev
   ```

5. Access the app at `http://localhost:5173`

## 📊 Dataset

- The dataset used for this project consists of knee Xray images of arthritis patients.

## 🧪 Model Training

- We have used a pretrained model

## 🩹 Recommendations Generation

The system generates recommendations using a combination of:

- Clinical guidelines
- Machine learning-based suggestions
- User medical history

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## 📧 Contact

For any queries or suggestions, feel free to reach out to **Priyanshu Choudhury** at [priyanshu.choudhury2406@outlook.com](mailto:priyanshu.choudhury2406@outlook.com).
