import { useState, useEffect } from 'react';
import { store } from '../data/store';
import '../styles/animations.css';

const EventNotice = () => {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    setNotice(store.getNotice());
  }, []);

  if (!notice) {
    return null;
  }

  return (
    <div className="bg-emerald-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            {notice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNotice;
