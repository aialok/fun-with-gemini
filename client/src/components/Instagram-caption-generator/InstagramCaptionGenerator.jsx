import React, { useState } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

function InstagramCaptionGenerator() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [textPrompt, setTextPrompt] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Set the selected file
      setSelectedFile(file);

      // Read the file content and set it as a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateCaption = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file before generating a caption.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('text/plain', textPrompt);

      // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
      // const response = await fetch('YOUR_API_ENDPOINT', {
      //   method: 'POST',
      //   body: formData,
      // });

      const result = axios.post('http://localhost:3008/api/v1/gemini-pro-vision', formData)

      toast.promise(result, {
        loading: 'Generating caption...',
        success: (data) => {
          return 'Caption generated successfully!';
        },
        error: (err) => {
          return 'Failed to generate caption. Please try again.';
        },
      });
      
      const response = await result;

      if (response.data.success) {
        
        setGeneratedCaption(response.data.data || 'No caption available.');
        // alert('Caption generated successfully!');
      } else {
        alert('Failed to generate caption. Please try again.');
      }
    } catch (error) {
      console.error('Error generating caption:', error);
    }
  };

  return (
    <div className="text-center mt-8 max-w-lg mx-auto">
      <Toaster />
      <h2 className="text-3xl font-bold mb-4">Instagram Caption Generator</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      {filePreview && (
        <img src={filePreview} alt="Preview" className="max-w-full max-h-64 mb-4 rounded" />
      )}
      <input
        type="text"
        placeholder="Enter a prompt (optional)"
        value={textPrompt}
        onChange={(e) => setTextPrompt(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />
      <br />
      <button onClick={handleGenerateCaption} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Caption
      </button>
      <div className="mt-4">
        <strong>Generated Caption:</strong>
        <p className="text-lg italic text-gray-700 my-2 scroll overflow-y-auto">{generatedCaption}</p>
      </div>
    </div>
  );
}

export default InstagramCaptionGenerator;
