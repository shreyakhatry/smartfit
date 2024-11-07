# Dockerfile for ml service
FROM python:3.11

WORKDIR /app

# Remove this line if requirements.txt doesn't exist
# COPY requirements.txt ./

# Copy all other files from ml folder into the container
COPY . .

EXPOSE 5000

CMD ["uvicorn", "ml_service:app", "--host", "0.0.0.0", "--port", "5000"]  # Replace with the actual script for your ML service