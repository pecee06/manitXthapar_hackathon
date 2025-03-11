from fastapi import FastAPI, File, UploadFile
import shutil
import os
import random

app = FastAPI()

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
    file_path = os.path.join(UPLOAD_DIR, f"{file.filename}_{random.randint(1, 100)}")
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename, "content_type": file.content_type}

# Run using: uvicorn server:app --reload
# uvicorn spins off the server at port 8000 by default