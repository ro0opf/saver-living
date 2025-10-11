import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import DarkModeToggle from './components/DarkModeToggle';
import ShareButton from './components/ShareButton';
import { profileData, links } from './data/links';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 p-5 md:p-10 transition-colors duration-300">
      <DarkModeToggle />

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-14 transition-colors duration-300">
        <Profile data={profileData} />

        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <ShareButton />
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            © 2024 Salim Nam. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
