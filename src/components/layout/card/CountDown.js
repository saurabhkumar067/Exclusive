"use client";
import React, { useEffect, useState } from "react";

const formatTime = (value) => String(value).padStart(2, "0");

function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Define target time inside useEffect (runs only on client)
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
        <React.Fragment key={label}>
          <span>
            <p className="text-xs">{label}</p>
            <p className="font-bold text-2xl">
              {timeLeft[label.toLowerCase()]}
            </p>
          </span>
          {idx < 3 && <span className="font-bold mt-4">:</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CountDown;
