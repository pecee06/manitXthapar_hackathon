import cv2
import numpy as np

def arithmeticMeanFilter(image_path, kernel_size=3):
    # Denoise Gaussian noise using arithmetic mean filtering
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    kernel = np.ones((kernel_size, kernel_size), dtype=np.float32) / (kernel_size ** 2)
    return cv2.filter2D(image, -1, kernel)

def clahe(image, clip_limit=2.0, tile_grid_size=(8, 8)):
    # Apply Contrast Limited Adaptive Histogram Equalization (CLAHE)
    # Create CLAHE object
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tile_grid_size)
    # Apply CLAHE
    return clahe.apply(image)

def laplacianFilter(image):
    # Sharpens the image
    laplacian = cv2.Laplacian(image, cv2.CV_64F)
    return cv2.convertScaleAbs(laplacian)

def medianFilter(image_path, kernel_size=3):
    # Denoise speckle noise using median filtering
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    return cv2.medianBlur(image, kernel_size)

def otsu(image):
    # automated image thresholding technique that finds the optimal threshold value to separate pixels into foreground and background
    _, otsu_threshold = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return otsu_threshold

def saveImage(image, path):
    # Save the image
    cv2.imwrite(path, image)

def splitAndMerge(image, threshold=30):
    # Perform image segmentation using region splitting and merging
    height, width = image.shape[:2]
    
    # Initialize an empty segmentation map
    segmented = np.zeros((height, width), dtype=np.uint8)

    # Recursive splitting function
    def split(x, y, w, h):
        # Recursively splits regions based on intensity variance
        region = image[y:y+h, x:x+w]
        mean = np.mean(region)
        std = np.std(region)
        
        if std < threshold or w < 4 or h < 4:  # Stop splitting if homogeneous
            segmented[y:y+h, x:x+w] = int(mean)
        else:
            hw, hh = w // 2, h // 2
            split(x, y, hw, hh)
            split(x + hw, y, hw, hh)
            split(x, y + hh, hw, hh)
            split(x + hw, y + hh, hw, hh)

    # Perform recursive splitting
    split(0, 0, width, height)
    
    return segmented