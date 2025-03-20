import shutil
import os
import time
from PIL import Image
from fastapi import HTTPException
import torch
from torchvision import transforms
from utils.image_processing import clahe, saveImage, medianFilter, laplacianFilter
from utils.trained_model import model

UPLOAD_DIR = "uploads"  # Directory to save files
os.makedirs(UPLOAD_DIR, exist_ok=True)  # Create if not exists

async def uploadAndPredict(name, file):
    try:
        metadata = {
            "time": int(time.time() * 1000),
            "filename": os.path.splitext(file.filename)[0].replace(" ", "_"),
            "username": name.replace(" ", "_"),
            "extention": os.path.splitext(file.filename)[1]
        }
        file_path = os.path.join(UPLOAD_DIR,f"{metadata['time']}_{metadata['filename']}_{metadata['username']}{metadata['extention']}")

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        image = laplacianFilter(medianFilter(clahe(file_path)))
        saveImage(image, file_path)

        image = Image.fromarray(image)
        transform = transforms.Compose([transforms.Grayscale(num_output_channels=3), transforms.ToTensor()])
        image = transform(image).unsqueeze(0)
        with torch.no_grad():
            output = model(image)
            _, predicted_class = torch.max(output, 1)
        
        return int(predicted_class.item())
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")