import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDetails = ({ match }) => {
  console.log('JobDetails.js component is rendered');
  const jobId = match.params.id; 
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('JobDetails useEffect triggered');
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/jobs/${jobId}`);
        console.log('Job Details Response:', response.data);
        setJobDetails(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  return (
    <div>
      <h1>{jobDetails.Topic}</h1>
      {/* Add more details as needed */}
      <p>Profession: {jobDetails.Profession}</p>
      <p>Workplace: {jobDetails.Workplace}</p>
      <p>Mode: {jobDetails.Mode}</p>
      <p>About Company: {jobDetails.Aboutcompany}</p>
      <p>Required Post: {jobDetails.Requirepost}</p>
      <p>About Post: {jobDetails.Aboutpost}</p>
      <p>Skill 1: {jobDetails.Skill1}</p>
      <p>Skill 2: {jobDetails.Skill2}</p>
      <p>Skill 3: {jobDetails.Skill3}</p>
      <p>Skill 4: {jobDetails.Skill4}</p>
      <p>Certification 1: {jobDetails.Certification1}</p>
      <p>Certification 2: {jobDetails.Certification2}</p>
      <p>Number of Openings: {jobDetails.Numberofopenings}</p>
      <p>Stipend: {jobDetails.Stipend}</p>
      <p>Duration: {jobDetails.Duration}</p>
      <p>Start Date: {jobDetails.StartDate}</p>
      <p>Perk 1: {jobDetails.Perk1}</p>
      <p>Perk 2: {jobDetails.Perk2}</p>
      <p>Email: {jobDetails.Email}</p>
      <p>LinkedIn: {jobDetails.Linkedin}</p>
    </div>
  );
};

export default JobDetails;
