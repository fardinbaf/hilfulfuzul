import { useState, useEffect } from 'react';
import '../styles/animations.css';
import { useData } from '../context/DataContext';

const EventNotice = () => {
  const { marqueeText: notices } = useData();
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    if (notices.length === 0) return;
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) => (prevIndex + 1) % notices.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [notices.length]);

  if (notices.length === 0 || !notices[currentNoticeIndex]) {
    return null;
  }

  return (
    <div className="bg-emerald-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            {notices[currentNoticeIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNotice;
