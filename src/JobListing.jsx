import React from 'react';
import { useNavigate } from 'react-router-dom';
import accountLogo from './assets/account.svg';

const JobListing = ({ id, title }) => {
  const history = useNavigate();

  const handleApply = () => {
    history(`/job/${id}`);
  };
  return (
    <div className="flex justify-between align-top py-4 gap-2 hover:border-white hover:border-dashed hover:border">
      <div className='border border-white rounded-full'>
        <div className='max-w-[40px] p-2'>
          <img src={accountLogo} alt="" className='block w-full'/>
        </div>
      </div>
      <div className="">
        <h3 className='text-white font-normal'>{title}</h3>
      </div>
      <button className="hover:text-teal-500 ease-in-out transition-all pb-2" onClick={handleApply}>Apply now</button>
    </div>
  );
};
export default JobListing;
