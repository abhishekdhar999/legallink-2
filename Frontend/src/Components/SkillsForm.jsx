import React, { useState } from 'react';
import axios from 'axios';

export default function SkillsForm() {
  const [skillData, setSkillData] = useState({
    skillToLearn: '',
    skillToShare: '',
    skillLevel: '',
    skillType: '',
    skillDescription: '',
    skillImage: null,
    skillVideo: null,
    certifications: null,
  });

  const handleChange = (e) => {
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleFileChange = (e) => {
    console.log("File selected:", e.target.files[0]);
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create formData to handle file uploads
    const newSkillData = new FormData();
    newSkillData.append('skillToLearn', skillData.skillToLearn);
    newSkillData.append('skillToShare', skillData.skillToShare);
    newSkillData.append('skillLevel', skillData.skillLevel);
    newSkillData.append('skillType', skillData.skillType);
newSkillData.append('skillDescription', skillData.skillDescription);
    newSkillData.append('skillImage', skillData.skillImage);
    newSkillData.append('skillVideo', skillData.skillVideo);
    newSkillData.append('certifications', skillData.certifications);

    console.log("skilldata",skillData)
    try {
      const response = await axios.post('http://localhost:3001/skills/createskills',newSkillData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessTokken')}`,
          'Content-Type': 'multipart/form-data', // For file uploads
        },
      });
      console.log('Skill data submitted:', response.data);
      alert('Skill data submitted successfully!');
    } catch (error) {
      console.error('Error submitting skill data:', error);
      alert('Failed to submit skill data.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Submit Your Skills</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
        {/* Skill to Learn */}
        <div>
          <label className="block text-gray-700 font-medium">Skills to Learn</label>
          <input
            type="text"
            name="skillToLearn"
            value={skillData.skillToLearn}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="E.g., Web Development"
            required
          />
        </div>

        {/* Skill to Share */}
        <div>
          <label className="block text-gray-700 font-medium">Skills to Share</label>
          <input
            type="text"
            name="skillToShare"
            value={skillData.skillToShare}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="E.g., Data Analysis"
            required
          />
        </div>

        {/* Skill Level */}
        <div>
          <label className="block text-gray-700 font-medium">Skill Level</label>
          <select
            name="skillLevel"
            value={skillData.skillLevel}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="" disabled>Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Skill Type */}
        <div>
          <label className="block text-gray-700 font-medium">Skill Type</label>
          <input
            type="text"
            name="skillType"
            value={skillData.skillType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="E.g., Soft Skill, Technical Skill"
            required
          />
        </div>

        {/* Skill Description */}
        <div>
          <label className="block text-gray-700 font-medium">Skill Description</label>
          <textarea
            name="skillDescription"
            value={skillData.skillDescription}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Provide a detailed description of the skill..."
            required
          />
        </div>

        {/* Skill Image */}
        <div>
          <label className="block text-gray-700 font-medium">Upload Skill Image</label>
          <input
            type="file"
            name="skillImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Skill Video */}
        <div>
          <label className="block text-gray-700 font-medium">Upload Skill Video (optional)</label>
          <input
            type="file"
            name="skillVideo"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Certifications */}
        <div>
          <label className="block text-gray-700 font-medium">Certifications (optional)</label>
          <input
            type="file"
            name="certifications"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition transform hover:-translate-y-1"
          >
            Submit Skills
          </button>
        </div>
      </form>
    </div>
  );
}
