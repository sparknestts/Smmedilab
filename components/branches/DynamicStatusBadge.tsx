"use client";

import { useEffect, useState } from "react";
import { getStatusStyles, BranchStatus } from "@/data/branches";

export default function DynamicStatusBadge({
  initialStatus,
  initialText,
}: {
  initialStatus: BranchStatus;
  initialText: string;
}) {
  const [status, setStatus] = useState<BranchStatus>(initialStatus);
  const [text, setText] = useState<string>(initialText);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkStatus = () => {
      const now = new Date();
      // Use Sri Lanka time (Asia/Colombo)
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Colombo',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find(p => p.type === 'hour');
      const minutePart = parts.find(p => p.type === 'minute');
      
      if (!hourPart || !minutePart) return;

      const hour = parseInt(hourPart.value, 10);
      const minute = parseInt(minutePart.value, 10);
      const timeInMinutes = hour * 60 + minute;

      // Open: 06:30 (390 mins) to 21:00 (1260 mins)
      const openTime = 6 * 60 + 30; // 390
      const closeTime = 21 * 60;    // 1260
      const closesSoonTime = closeTime - 30; // 1230

      if (timeInMinutes >= openTime && timeInMinutes < closesSoonTime) {
        setStatus("open");
        setText("OPEN NOW");
      } else if (timeInMinutes >= closesSoonTime && timeInMinutes < closeTime) {
        setStatus("closes-soon");
        setText("CLOSES SOON");
      } else {
        setStatus("closed");
        setText("CLOSED");
      }
    };

    checkStatus();
    // Check every minute to update status in real-time
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by rendering initial state before mount
  const displayStatus = mounted ? status : initialStatus;
  const displayText = mounted ? text : initialText;

  return (
    <span
      className={`inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300 ${getStatusStyles(displayStatus)}`}
    >
      {displayText}
    </span>
  );
}
