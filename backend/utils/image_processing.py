import cv2

def medianFilter(image, kernel_size=3):
    # Denoise speckle noise using median filtering
    return cv2.medianBlur(image, kernel_size)

def clahe(image_path, clip_limit=2.0, tile_grid_size=(8, 8)):
    # Apply Contrast Limited Adaptive Histogram Equalization (CLAHE)
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    # Create CLAHE object
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tile_grid_size)
    # Apply CLAHE
    return clahe.apply(image)

def laplacianFilter(image):
    # Sharpens the image
    laplacian = cv2.Laplacian(image, cv2.CV_64F)
    return cv2.convertScaleAbs(laplacian)

def saveImage(image, path):
    # Save the image
    cv2.imwrite(path, image)
