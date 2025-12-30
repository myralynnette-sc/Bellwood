import { ImageWithFallback } from './figma/ImageWithFallback';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer saw blade circle with teeth */}
      <circle cx="100" cy="100" r="90" fill="#4a4a4a" />
      
      {/* Saw blade teeth */}
      {[...Array(20)].map((_, i) => {
        const angle = (i * 360) / 20 - 90;
        const rad = (angle * Math.PI) / 180;
        const nextAngle = ((i + 1) * 360) / 20 - 90;
        const nextRad = (nextAngle * Math.PI) / 180;
        const midAngle = (angle + nextAngle) / 2;
        const midRad = (midAngle * Math.PI) / 180;
        
        const x1 = 100 + Math.cos(rad) * 75;
        const y1 = 100 + Math.sin(rad) * 75;
        const x2 = 100 + Math.cos(midRad) * 90;
        const y2 = 100 + Math.sin(midRad) * 90;
        const x3 = 100 + Math.cos(nextRad) * 75;
        const y3 = 100 + Math.sin(nextRad) * 75;
        
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}`}
            fill="#d4b896"
            stroke="#b89a7d"
            strokeWidth="0.5"
          />
        );
      })}
      
      {/* Inner circle */}
      <circle cx="100" cy="100" r="75" fill="#d4b896" />
      
      {/* Trees - left */}
      <path d="M 45 65 L 50 55 L 55 65 Z" fill="#a88a68" />
      <rect x="48.5" y="65" width="3" height="5" fill="#a88a68" />
      
      {/* Trees - right */}
      <path d="M 145 65 L 150 55 L 155 65 Z" fill="#a88a68" />
      <rect x="148.5" y="65" width="3" height="5" fill="#a88a68" />
      
      {/* Hand plane tool */}
      <path d="M 85 60 L 115 60 L 110 70 L 80 70 Z" fill="#a88a68" />
      <rect x="80" y="65" width="30" height="3" fill="#b89a7d" />
      <circle cx="95" cy="66.5" r="2" fill="#8b7355" />
      
      {/* Wood shavings */}
      <path d="M 100 55 Q 105 50 110 52" stroke="#a88a68" strokeWidth="2" fill="none" />
      <path d="M 105 58 Q 108 54 112 56" stroke="#a88a68" strokeWidth="1.5" fill="none" />
      
      {/* Wood plank banner */}
      <path d="M 20 95 L 25 88 L 175 88 L 180 95 L 175 102 L 25 102 L 20 95 Z" fill="#d4b896" stroke="#a88a68" strokeWidth="2" />
      <path d="M 30 88 L 32 90 L 30 92" stroke="#a88a68" strokeWidth="1" fill="none" />
      <path d="M 170 88 L 168 90 L 170 92" stroke="#a88a68" strokeWidth="1" fill="none" />
      <path d="M 35 88 L 37 90 L 35 92" stroke="#a88a68" strokeWidth="1" fill="none" />
      <path d="M 165 88 L 163 90 L 165 92" stroke="#a88a68" strokeWidth="1" fill="none" />
      
      {/* Text "BELL WOOD CLUB" */}
      <text x="100" y="99" textAnchor="middle" fill="#4a4a4a" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">
        BELL WOOD CLUB
      </text>
      
      {/* Bottom wood grain rings */}
      <path d="M 100 110 Q 120 115 140 110" stroke="#a88a68" strokeWidth="2" fill="none" />
      <path d="M 60 110 Q 80 115 100 110" stroke="#a88a68" strokeWidth="2" fill="none" />
      <path d="M 100 120 Q 115 123 130 120" stroke="#a88a68" strokeWidth="1.5" fill="none" />
      <path d="M 70 120 Q 85 123 100 120" stroke="#a88a68" strokeWidth="1.5" fill="none" />
      <path d="M 100 127 Q 110 129 120 127" stroke="#a88a68" strokeWidth="1.5" fill="none" />
      <path d="M 80 127 Q 90 129 100 127" stroke="#a88a68" strokeWidth="1.5" fill="none" />
      
      {/* Additional wood grain details */}
      <path d="M 90 135 Q 95 133 100 135 Q 105 137 110 135" stroke="#a88a68" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 85 140 Q 92.5 138 100 140 Q 107.5 142 115 140" stroke="#a88a68" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 80 145 Q 90 143 100 145 Q 110 147 120 145" stroke="#a88a68" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}