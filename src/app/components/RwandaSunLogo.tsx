export function RwandaSunLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun rays */}
      <g fill="#FCD116">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const innerRadius = 25;
          const outerRadius = 48;
          const x1 = 50 + innerRadius * Math.cos(angle);
          const y1 = 50 + innerRadius * Math.sin(angle);
          const x2 = 50 + outerRadius * Math.cos(angle);
          const y2 = 50 + outerRadius * Math.sin(angle);
          const angle2 = ((i * 15 + 7.5) * Math.PI) / 180;
          const x3 = 50 + innerRadius * Math.cos(angle2);
          const y3 = 50 + innerRadius * Math.sin(angle2);
          
          return (
            <polygon
              key={i}
              points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
            />
          );
        })}
      </g>
      {/* Sun circle */}
      <circle cx="50" cy="50" r="25" fill="#FCD116" />
      <circle cx="50" cy="50" r="22" fill="#FAB20B" />
    </svg>
  );
}
