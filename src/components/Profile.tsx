import { useState, useEffect } from 'react';
import type { ProfileData } from '../types';

interface ProfileProps {
  data: ProfileData;
}

export default function Profile({ data }: ProfileProps) {
  const [imageUrl, setImageUrl] = useState(data.imageUrl);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImageUrl(savedImage);
    }
  }, []);

  const handleImageClick = () => {
    const newUrl = prompt('새 프로필 이미지 URL을 입력하세요:');
    if (newUrl && newUrl.trim()) {
      setImageUrl(newUrl);
      localStorage.setItem('profileImage', newUrl);
    }
  };

  return (
    <div className="text-center mb-12 animate-fade-in">
      <div
        className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={imageUrl}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {data.name}
      </h1>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
        {data.description}
      </p>
    </div>
  );
}
