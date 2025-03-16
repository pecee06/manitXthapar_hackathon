from fastapi import FastAPI, File, UploadFile, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from datetime import datetime
from utils import arithmeticMeanFilter, clahe, splitAndMerge, saveImage, detectContour

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def welcome():
    return {
        "message": "OK",
        "statusCode": 200
    }

UPLOAD_DIR = "uploads"  # Directory to save files
os.makedirs(UPLOAD_DIR, exist_ok=True)  # Create if not exists

@app.post("/upload")
async def uploadFile(name: str = Form(...), file: UploadFile = File(...)):
    try:
        file_path = os.path.join(UPLOAD_DIR, f"{datetime.now().date()}_{name.replace(" ", "_")}_xray_{os.path.splitext(file.filename)[1]}")
        # print(file_path)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        image = splitAndMerge(clahe(arithmeticMeanFilter(file_path)))
        # image = detectContour(clahe(arithmeticMeanFilter(file_path)))
        saveImage(image, file_path)

        model_prediction = 2  # hard coded right now
        return model_prediction
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")

# Run using: uvicorn server:app --reload
# uvicorn spins off the server at port 8000 by default