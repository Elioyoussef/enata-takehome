import React from 'react';
import accountLogo from './assets/account.svg';
const JobListing = ({ title }) => {
  return (
    <div className="flex justify-between align-top py-4 gap-7 hover:border-white hover:border-dashed hover:border">
      <div className='border border-white rounded-full'>
        <div className='max-w-[40px] p-2'>
          <img src={accountLogo} alt="" className='block w-full'/>
        </div>
      </div>
      <div className="">
        <h3 className='text-white font-normal'>{title}</h3>
      </div>
      <button className="hover:text-teal-500 ease-in-out transition-all pb-2">Apply now</button>
    </div>
  );
};
export default JobListing;
