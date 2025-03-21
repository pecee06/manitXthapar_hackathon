from fastapi import HTTPException
from utils.ai import generateResponse

async def generateFeedback(prompt):
    try:
        prompt_add_on = "This is the chronological sequence of arthritis severity report consisting of diagnosis remark along with the date it was made. Generate a progress report of the patient for the same. It should sound like a doctor is suggesting something, i.e., it should be in 1st person. Suggest lifestyle changes to cure arthritis based on the progress of patient. Output should be in HTML - no basic structure just give the output using p tag and other tags like b, i, etc. Apply basic inline css so that it doesn't look odd"
        ai_feedback = generateResponse(f"{prompt}. {prompt_add_on}")
        ai_feedback = ai_feedback.replace("```","")
        ai_feedback = ai_feedback.replace("html","")
        ai_feedback = ai_feedback.replace("\n","<br>")
        ai_feedback = ai_feedback.replace("**","")
        return ai_feedback
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unable to fetch AI feedback: {str(e)}")