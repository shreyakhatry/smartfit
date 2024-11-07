import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './homePage.css';
import Header from './header';
import Footer from './footer';
// import Results from './results';

const HomePage = () => {
  const [name] = useState('Shreya');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [file, setFile] = useState(null);
  // const [resultspage] = useState(Results); // You don't need this line

  const history = useHistory(); // Initialize useHistory

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  // };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      // Check file type (MIME type) or extension
      const allowedTypes = ["application/pdf"];
      const fileType = selectedFile.type; // MIME type
  
      // Check by MIME type
      if (!allowedTypes.includes(fileType)) {
        alert("Invalid file format! Please upload a PDF report");
        return;
      }
      // Set the file if it passes validation
      setFile(selectedFile);
      console.log("File format is valid.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission (for demonstration purposes)

    // Perform any necessary actions (e.g., form validation)
    if (!file) {
      alert("Please upload a file before submitting."); // Show a pop-up message
      return; // Don't proceed with the submission
    }
    // Then, navigate to the Results page
    history.push('/results');
  };

  return (
    <div>
      <Header />
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <h2>Hello {name} 👋 ...</h2>
            </div>
            <br></br>
            <div className="col1">
              <h4>Enter your details here</h4>
            </div>
            <br></br>
            <br></br>
            <div id="col2" className="col2">
              <form onSubmit={handleSubmit}>
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="height">Height (cm):</label>
                      </td>
                      <td>
                        <input type="text" id="height" value={height} onChange={handleHeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="weight">Weight (kg):</label>
                      </td>
                      <td>
                        <input type="text" id="weight" value={weight} onChange={handleWeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="file">Upload Report:</label>
                      </td>
                      <td>
                        <input type="file" id="file" onChange={handleFileChange} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
