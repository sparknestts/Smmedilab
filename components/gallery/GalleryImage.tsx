import Image from "next/image";
import type { GalleryImageItem } from "@/data/gallery";

interface GalleryImageProps {
  item: GalleryImageItem;
  className?: string;
  priority?: boolean;
}

export default function GalleryImage({
  item,
  className = "",
  priority = false,
}: GalleryImageProps) {
  return (
    <div
      className={`relative rounded-[16px] md:rounded-[20px] overflow-hidden group ${className}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
        priority={priority}
      />

      {item.badge && (
        <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm text-[#002b5c] text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
          {item.badge}
        </span>
      )}

      {item.overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/80 via-transparent to-transparent" />
      )}

      {item.overlay && (
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
          <h3 className="text-lg md:text-xl font-black mb-1">
            {item.overlay.title}
          </h3>
          <p className="text-blue-100/90 text-sm">{item.overlay.subtitle}</p>
        </div>
      )}
    </div>
  );
}
