import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 1,
    minutes: 30,
    seconds: 0,
  });

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
    <div className="flex items-center gap-1 text-white text-xs font-semibold">
      <span>{time.days}d</span>:
      <span>{String(time.hours).padStart(2, "0")}h</span>:
      <span>{String(time.minutes).padStart(2, "0")}m</span>:
      <span>{String(time.seconds).padStart(2, "0")}s</span>
    </div>
  );
}
