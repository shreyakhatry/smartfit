from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "ML Service is running!"}