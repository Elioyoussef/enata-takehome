import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(jobs => {
        const matchedJob = jobs.find(job => job.id.toString() === id);
        setJob(matchedJob);
      })
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:px-20 py-20 px-4 text-white">
      <h1 className='lg:text-5xl text-center text-xl font-bold'>{job.title}</h1>
      <h3 className='lg:text-2xl lg:py-5 py-3 font-semibold'>Description:</h3>
      <p>{job.description}</p>
      <h3 className='lg:text-2xl lg:py-5 py-3 font-semibold'>Requirements:</h3>
      <ul>
        {job.requirements.map((requirement, index) => (
          <li key={index} className='list-disc'>{requirement}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobDetails;
