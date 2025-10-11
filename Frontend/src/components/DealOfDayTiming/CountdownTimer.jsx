import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 478, hours: 7, minutes: 6, seconds: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
      </svg>
      <span>
        {time.days} : {String(time.hours).padStart(2, "0")} :{" "}
        {String(time.minutes).padStart(2, "0")} : {String(time.seconds).padStart(2, "0")}
      </span>
    </div>
  );
}
