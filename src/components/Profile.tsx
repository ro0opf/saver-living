import { useState, useEffect } from 'react';
import type { ProfileData } from '../types';

interface ProfileProps {
  data: ProfileData;
  onShare?: () => void;
}

export default function Profile({ data, onShare }: ProfileProps) {
  const [imageUrl, setImageUrl] = useState(data.imageUrl);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImageUrl(savedImage);
    }
  }, []);

  const handleImageClick = () => {
    window.open(
      'https://www.youtube.com/@%EB%8F%88%EB%B2%84%EB%8A%94%EC%82%B4%EB%A6%BC',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="relative flex justify-center mb-6">
        {onShare && (
          <button
            onClick={onShare}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
            title="공유하기"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
        )}
        <div
          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={imageUrl}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-2xl md:text-[32px] font-bold text-gray-900 dark:text-white mb-2">
        {data.name}
      </h1>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto">
        {data.description}
      </p>
      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-4">
        비즈니스 문의 : <a href="mailto:d3bussi@gmail.com" className="underline hover:text-primary">d3bussi@gmail.com</a>
      </p>
    </div>
  );
}
