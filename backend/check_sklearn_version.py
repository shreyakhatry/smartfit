import joblib

model_path = '/Users/shreyakhatry/Desktop/personalized-fitness-recommender-system/backend/data/model.pkl'  # Update this with the actual path to your model

# Load the model metadata and print the scikit-learn version
try:
    with open(model_path, 'rb') as f:
        model = joblib.load(f)
    sklearn_version = model.get('scikit_learn_version', 'unknown')
    print(f"The model was created using scikit-learn version: {sklearn_version}")
    
    # Ensure the correct version of scikit-learn is installed
    import subprocess
    if sklearn_version != 'unknown':
        subprocess.check_call(['pip', 'install', f'scikit-learn=={sklearn_version}'])
    else:
        print("The scikit-learn version is unknown. Please check the model file.")
except Exception as e:
    print(f"An error occurred: {e}")