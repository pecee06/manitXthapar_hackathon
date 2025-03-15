import cv2
import numpy as np

def splitAndMerge(image_path, threshold=30):
    # Perform image segmentation using region splitting and merging
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
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