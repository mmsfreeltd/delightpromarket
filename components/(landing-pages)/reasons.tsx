'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    tag: 'Reason 1',
    title: 'Secured',
    desc: `We prioritize your data’s safety with advanced encryption, regular audits, and robust firewalls.`,
    image: '/images/icons/icon1.avif',
  },
  {
    tag: 'Reason 2',
    title: 'Leverage',
    desc: `Maximize your potential by amplifying your positions.`,
    image: '/images/icons/icon2.avif',
  },
  {
    tag: 'Reason 3',
    title: 'Crypto Payments',
    desc: `Enjoy flexibility using your favorite cryptocurrencies.`,
    image: '/images/icons/icon3.avif',
  },
  {
    tag: 'Reason 4',
    title: 'Mine or Stake Crypto',
    desc: `Grow your assets through mining or staking.`,
    image: '/images/icons/icon4.avif',
  },
  {
    tag: 'Reason 5',
    title: 'Verified Traders',
    desc: `Connect with top-performing professionals.`,
    image: '/images/icons/icon5.webp',
  },
  {
    tag: 'Reason 6',
    title: 'Reliable Support',
    desc: `We provide unwavering support and expert guidance.`,
    image: '/images/icons/icon6.avif',
  },
  {
    tag: 'Reason 7',
    title: 'Fast Trades',
    desc: `Experience seamless, real-time order processing.`,
    image: '/images/icons/icon7.webp',
  },
];

export default function Reasons() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation once when section enters viewport
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-[#07061a]"
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white
          ${visible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
        >
          <span className="bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent">
            7 Reasons
          </span>{' '}
          To Choose Us
        </h2>
      </div>

      {/* Grid */}
      <div className="mt-16 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((item, i) => (
          <div
            key={i}
            className={`
              relative p-8 rounded-2xl
              bg-gray-50/70 dark:bg-white/5
              backdrop-blur
              border border-gray-200 dark:border-white/10
              shadow-sm hover:shadow-lg
              transition
              ${visible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}
            `}
            style={{
              animationDelay: `${i * 0.65}s`,
              animationDuration: '0.9s',
            }}
          >
            {/* Tag */}
            <span className="inline-block mb-6 px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400">
              {item.tag}
            </span>

            {/* Icon */}
            <div className="mb-6 flex justify-end">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}