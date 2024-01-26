import React from 'react'
import twitter from '../src/assets/twitt.svg';
import linkedin from '../src/assets/linkedin.svg';
import github from '../src/assets/github.svg';

const Footer = () => {
    const social = [{
        id:1,
        logo: twitter,
        name: twitter,
        link: 'https://twitter.com/enata'
    },
    {
        id:2,
        logo: linkedin,
        name: linkedin,
        link: 'https://linkedin.com/enata'
    },
    {
        id:3,
        logo: github,
        name: github,
        link: 'https://github.com/enata'
    }
]
  return (
    <div className='bg-[#212020] h-32 border-t border-dashed relative text-white flex justify-between align-middle pt-10 px-4'>
            <p>Developed by Enata</p>
            <div className='flex justify-between align-middle lg:gap-10'>
                {
                    social && social.map((media) => (
                        <div key={media.id} className='max-w-[25px]'>
                            <a href={media.link}>
                              <img src={media.logo} alt={media.name} />
                            </a>
                        </div>
                    ))
                }
            </div>
            <p>Copyrights 2024</p>
    </div>
  )
}

export default Footer
