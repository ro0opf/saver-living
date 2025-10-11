import type { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

const colorMap = {
  instagram: 'from-pink-600 to-purple-600',
  youtube: 'from-red-600 to-red-700',
  blog: 'from-green-500 to-green-600',
  kakao: 'from-yellow-400 to-yellow-500',
  email: 'from-blue-500 to-blue-600',
  website: 'from-indigo-500 to-purple-600',
};

export default function LinkCard({ link, index }: LinkCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.url === '#') {
      e.preventDefault();
      alert(`${link.title} 링크를 설정해주세요!`);
    }
  };

  return (
    <a
      href={link.url}
      onClick={handleClick}
      target={link.url !== '#' ? '_blank' : undefined}
      rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
      className="group flex items-center p-5 md:p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 active:translate-y-0 no-underline"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <div
        className={`w-12 h-12 md:w-14 md:h-14 min-w-[3rem] md:min-w-[3.5rem] flex items-center justify-center bg-gradient-to-br ${colorMap[link.type]} rounded-xl mr-4 text-white group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {link.icon}
      </div>
      <span className="flex-1 text-base md:text-lg font-medium text-gray-900 dark:text-white">
        {link.title}
      </span>
      <div className="text-2xl text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
        →
      </div>
    </a>
  );
}
