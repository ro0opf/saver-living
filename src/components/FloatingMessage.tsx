export default function FloatingMessage() {
  const message = "하단 링크로 구매하면 알리,쿠팡,네이버,무신사로부터 일정액의 수수료를 돈버는 살림 채널이 제공 받아 채널 운영에 도움이 됩니다.";
  const repeats = Array.from({ length: 20 });

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 py-2 overflow-hidden z-40 shadow-sm">
      <div className="flex whitespace-nowrap text-xs md:text-[13px] will-change-transform">
        <div className="flex animate-[marquee_180s_linear_infinite] md:animate-[marquee_120s_linear_infinite]">
          {repeats.map((_, index) => (
            <span key={`message-${index}`} className="inline-block px-12">
              {message}
            </span>
          ))}
          {repeats.map((_, index) => (
            <span key={`message-duplicate-${index}`} className="inline-block px-12" aria-hidden="true">
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
