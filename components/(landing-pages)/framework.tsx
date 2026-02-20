'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE_NAME } from "@/global/constants";

export default function Framework() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: 'Learn to recognize and understand market movements',
      desc: `Achieve better returns through superior market understanding. Those who can read price movements profit.`,
      icon: (
        <div className="flex items-end gap-1">
          <span className="w-1.5 h-3 bg-gray-300 dark:bg-gray-400 rounded-sm" />
          <span className="w-1.5 h-5 bg-purple-500 rounded-sm" />
          <span className="w-1.5 h-8 bg-orange-500 rounded-sm" />
        </div>
      ),
    },
    {
      title: 'Understanding Bitcoin & Blockchain',
      desc: `Only those who truly understand blockchain technology can benefit from the next big crypto trends.`,
      icon: <span className="text-3xl font-bold text-orange-500">₿</span>,
    },
    {
      title: 'Proven Strategies & Systematization',
      desc: `Systematize your trading strategy to stay ahead of other market participants.`,
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-purple-500"
        >
          <path
            d="M3 17L9 11L13 15L21 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-[#07061a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2
          className={`
            text-3xl md:text-4xl lg:text-5xl font-semibold
            text-gray-900 dark:text-white max-w-4xl
            ${visible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}
          `}
          style={{ animationDuration: '0.8s' }}
        >
          Profit from the market in record time with the{' '}
          <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
            {SITE_NAME} framework
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                relative p-8 rounded-2xl
                bg-gray-50/70 dark:bg-white/5
                backdrop-blur
                border border-gray-200 dark:border-white/10
                transition hover:shadow-lg
                ${visible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}
              `}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '0.8s',
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}