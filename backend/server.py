from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile, Form
from controllers.uploadAndPredict import uploadAndPredict
from controllers.generateFeedback import generateFeedback
from utils.ApiResponse import ApiResponse

# Settings
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Routes
@app.get("/")
def start():
    res = ApiResponse(message="OK", data=None)
    return res

@app.post("/prediction")
async def servePrediction(name: str = Form(...), file: UploadFile = File(...)):
    arthritis_severity = await uploadAndPredict(name, file)
    res = ApiResponse(message="OK", data=arthritis_severity)
    return res

@app.post("/ai/feedback")
async def serveAiFeedback(prompt: str = Form(...)):
    ai_feedback = await generateFeedback(prompt)
    res = ApiResponse(message="OK", data=ai_feedback)
    return res

# Run using: uvicorn server:app --reload
# uvicorn spins off the server at port 8000 by default