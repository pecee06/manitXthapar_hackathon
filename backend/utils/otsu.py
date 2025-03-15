import cv2
import numpy as np

def otsu(image_path):
    # automated image thresholding technique that finds the optimal threshold value to separate pixels into foreground and background
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    _, otsu_threshold = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return otsu_threshold