from torchvision.models import resnet18, ResNet18_Weights
import torch

model = resnet18(weights = ResNet18_Weights.IMAGENET1K_V1)
num_ftrs = model.fc.in_features
model.fc = torch.nn.Linear(num_ftrs, 5)

# Load weights
model.load_state_dict(torch.load("model.pth", map_location=torch.device("cpu")))
model.eval()