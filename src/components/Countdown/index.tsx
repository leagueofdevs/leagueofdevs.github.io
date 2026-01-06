import { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2026-01-31T23:59:59');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10 animate-fade-in-up">
        <h3 className="text-indigo-300 font-bold tracking-widest uppercase text-sm bg-indigo-900/30 px-4 py-1 rounded-full border border-indigo-500/30">
            Fim das Inscrições
        </h3>
        <div className="flex gap-3 sm:gap-6 flex-wrap justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-gray-900/90 p-4 rounded-xl min-w-[90px] border border-gray-800 shadow-xl backdrop-blur-sm">
                    <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                        {String(value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-medium mt-1">{unit}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Countdown;
