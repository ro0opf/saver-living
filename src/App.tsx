import { useState } from 'react';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import FloatingMessage from './components/FloatingMessage';
import { profileData, links } from './data/links';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: '내 프로필 링크를 확인해보세요!',
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showNotification();
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showNotification();
        } catch {
          console.error('복사 실패');
        }
      }
    }
  };

  const showNotification = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 p-5 md:p-10 transition-colors duration-300">
      <FloatingMessage />

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-14 transition-colors duration-300 mt-12">
        <Profile data={profileData} onShare={handleShare} />

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 mb-8">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 돈버는 살림. All rights reserved.
          </p>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50">
          링크가 클립보드에 복사되었습니다!
        </div>
      )}
    </div>
  );
}

export default App;
