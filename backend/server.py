from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import random

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
async def uploadFile(file: UploadFile = File(...)):
    try:
        file_path = os.path.join(UPLOAD_DIR, f"{random.randint(1, 100)}_{file.filename}")
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        return {"filename": file.filename, "content_type": file.content_type}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")

# Run using: uvicorn server:app --reload
# uvicorn spins off the server at port 8000 by default