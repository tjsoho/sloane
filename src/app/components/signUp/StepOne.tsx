'use client';
import React, {useState} from 'react';
import EastIcon from '@mui/icons-material/East';

interface StepOneProps {
  nextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ nextStep }) => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('http://') && !value.startsWith('https://')) {
      value = 'https://' + value;
    }
    setUrl(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };



  return (
    <div className="container mx-auto px-4 w-full">
      <h2 className="text-xl font-Archivo mb-4">Create User</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
        <div className="flex flex-wrap -mx-2 w-full">
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"></label>
            <input
              type="text"
              placeholder="First name*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"></label>
            <input
              type="email"
              placeholder="Work email*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"> </label>
            <input
              type="text"
              placeholder="Business name*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"> </label>
            <input
              type="number"
              placeholder="Number of employees*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"> </label>
            <input
              type="text"
              placeholder="Profession*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 lg:mb-8">
            <label className="block text-brand-cream ml-4"></label>
            <input
              type="text"
              placeholder="URL*"
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              value={url}
              onChange={handleUrlChange}
              required
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label className="block text-brand-cream ml-4 lg:mb-2"> </label>
            <textarea
              placeholder="Describe your business in 1-2 sentences* "
              className="w-full px-4 py-2 border-[1px] border-brand-logo rounded-full focus:border-brand-green-dark outline-none bg-transparent placeholder-green-700 text-[16px] "
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center text-brand-green-dark py-2 px-4 rounded-md transition duration-300 ease-in-out group group-hover:scale-[120%] "
          >
            <span className="group-hover:scale-[120%] transition-transform duration-300">Continue</span>
            <EastIcon className="ml-2 hover:ml-4 text-brand-green-dark group-hover:scale-[120%] transition-transform duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
