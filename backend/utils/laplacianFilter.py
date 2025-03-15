import cv2
import numpy as np

def laplacianFilter(image_path):
    # Sharpens the image
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    laplacian = cv2.Laplacian(image, cv2.CV_64F)
    return cv2.convertScaleAbs(laplacian)