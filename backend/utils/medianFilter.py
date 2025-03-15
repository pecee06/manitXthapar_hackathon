import cv2
import numpy as np

def medianFilter(image_path, kernel_size=3):
    # Denoise speckle noise using median filtering
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    return cv2.medianBlur(image, kernel_size)