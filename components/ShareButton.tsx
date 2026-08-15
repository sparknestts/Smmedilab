"use client";

import React, { ReactNode } from "react";

interface ShareButtonProps {
  className?: string;
  title?: string;
  children: ReactNode;
}

const ShareButton = ({ className, title, children }: ShareButtonProps) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shareData = {
      title: "SMMEDILAB",
      text: "Check out this website",
      url: "https://www.smmedilab.com", 
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled or error - safe to ignore
      }
    } else {
      // Fallback for desktop browsers without share support
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } catch {
        // clipboard write failed silently
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={className}
      title={title}
      aria-label={title || "Share this website"}
    >
      {children}
    </button>
  );
};

export default ShareButton;
