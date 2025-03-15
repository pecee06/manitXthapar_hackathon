import cv2
import numpy as np

def arithmeticMeanFilter(image_path, kernel_size=3):
    # Denoise Gaussian noise using arithmetic mean filtering
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    kernel = np.ones((kernel_size, kernel_size), dtype=np.float32) / (kernel_size ** 2)
    return cv2.filter2D(image, -1, kernel)