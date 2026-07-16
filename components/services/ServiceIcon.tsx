interface ServiceIconProps {
  colorClass: string;
}

export default function ServiceIcon({ colorClass }: ServiceIconProps) {
  return (
    <div className={`${colorClass} p-3 rounded-xl inline-flex`}>
      <svg
        className="w-6 h-6 text-[#4a90e2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    </div>
  );
}
