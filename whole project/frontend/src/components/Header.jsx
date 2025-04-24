import React from 'react';
import { Link } from 'react-router-dom';

const options = [
  { title: 'Your Health', path: '/health' },
  { title: 'Check ECG', path: '/ecg' },
  { title: 'Insurance', path: '/insurance' },

  { title: 'Benificary Form', path: '/Beneficiary' },
  { title: 'Donations', path: '/donation' },
  { title: 'AI for Suggestions', path: '/ai-suggestions' },
];

const OptionCardsRow = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {options.map((option, index) => (
        <Link
          key={index}
          to={option.path}
          className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-6 w-48 text-center cursor-pointer"
        >
          <h2 className="text-lg font-semibold">
            <img src={`${option.title}.png`} alt={option.title} />
            {option.title}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default OptionCardsRow;
