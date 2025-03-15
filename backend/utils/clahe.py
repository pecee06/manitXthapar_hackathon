import cv2
import numpy as np

def clahe(image_path, clip_limit=2.0, tile_grid_size=(8, 8)):
    # Apply Contrast Limited Adaptive Histogram Equalization (CLAHE)
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    # Create CLAHE object
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tile_grid_size)
    # Apply CLAHE
    return clahe.apply(image)