import React, { useState } from 'react';
import axios from 'axios';

function InstagramCaptionGenerator() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedCaption, setGeneratedCaption] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleGenerateCaption = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file before generating a caption.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post('http://localhost:3008/api/v1/gemini-pro-vision', formData)

      // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
      // const response = await fetch('http://localhost:3008/api/v1/gemini-pro-vision', {
      //   method: 'POST',
      //   body: formData,
      // });

      if (response.status) {
        const result = await response;
        setGeneratedCaption(result.data.data || 'No caption available.');
        alert('Caption generated successfully!');
      } else {
        console.log(response)
        alert('Failed to generate caption. Please try again.');
      }
    } catch (error) {
      console.error('Error generating caption:', error);
    }
  };

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Instagram Caption Generator</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <br />
      <button onClick={handleGenerateCaption} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Caption
      </button>
      <div className="mt-4">
        <strong>Generated Caption:</strong>
        <p>{generatedCaption}</p>
      </div>
    </div>
  );
}

export default InstagramCaptionGenerator;
