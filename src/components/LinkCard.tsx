import type { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

const gradientPalette = [
  'from-pink-600 to-purple-600',
  'from-red-600 to-red-700',
  'from-green-500 to-green-600',
  'from-yellow-400 to-yellow-500',
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-purple-600',
];

export default function LinkCard({ link, index }: LinkCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.url === '#') {
      e.preventDefault();
      alert(`${link.title} 링크를 설정해주세요!`);
    }
  };

  const hasImage = Boolean(link.image);

  return (
    <a
      href={link.url}
      onClick={handleClick}
      target={link.url !== '#' ? '_blank' : undefined}
      rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
      className="group flex h-full flex-col p-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 active:translate-y-0 no-underline"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      {hasImage ? (
        <div className="w-10/12 mx-auto aspect-square overflow-hidden rounded-xl mb-3 bg-gray-50 dark:bg-gray-900/40">
          <img
            src={link.image}
            alt={link.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`w-10/12 mx-auto aspect-square flex items-center justify-center bg-gradient-to-br ${gradientPalette[index % gradientPalette.length]} rounded-xl mb-3 text-white group-hover:rotate-3 group-hover:scale-105 transition-transform duration-300`}
        >
          <span className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            {link.icon}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 text-gray-900 dark:text-white">
        <span className="text-xs md:text-sm font-semibold text-center leading-tight">{link.title}</span>
        {link.description && (
          <p className="mt-1 text-[12px] md:text-sm text-gray-600 dark:text-gray-300 leading-snug text-center line-clamp-3">
            {link.description}
          </p>
        )}
      </div>
    </a>
  );
}
