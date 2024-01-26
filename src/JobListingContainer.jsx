import React, { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import JobListing from './JobListing';

const JobListingsContainer = () => {
  const [filter, setFilter] = useState('All');
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => setJobListings(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const filteredListings = jobListings.filter(job => 
    filter === 'All' || job.category === filter
  );

  return (
    <div className='pt-10'>
      <CategoryFilter setFilter={setFilter} activeFilter={filter} />
      {filteredListings.map(job => (
        <JobListing key={job.id} title={job.title} />
      ))}
    </div>
  );
};

export default JobListingsContainer;
