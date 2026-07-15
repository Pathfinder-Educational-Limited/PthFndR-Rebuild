import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  href?: string;
  className?: string;
}

const sizeMap = {
  sm: { height: 24, width: 120 },
  md: { height: 32, width: 160 },
  lg: { height: 48, width: 240 },
  xl: { height: 64, width: 320 }
};

export function Logo({ 
  size = 'md', 
  variant = 'light',
  href = '/',
  className = '' 
}: LogoProps) {
  const { height, width } = sizeMap[size];
  
  // Color based on variant
  const textColor = variant === 'light' ? '#004890' : '#FFFFFF';
  const navyTriangle = '#0C2A5C';
  
  // Font size is in viewBox units; the svg's width/height scale it per size
  const fontSize = 20;

  const LogoContent = (
    <div className={`flex items-center ${className}`}>
      {/* Text Wordmark */}
      <svg
        width={height * 2}
        height={height}
        viewBox="0 0 80 40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <style>{`
            .pth-italic {
              font-family: 'Futura', 'Inter', 'Montserrat', sans-serif;
              font-size: ${fontSize}px;
              font-weight: 500;
              font-style: italic;
              fill: ${textColor};
              letter-spacing: -0.03em;
            }
            .fndr-normal {
              font-family: 'Futura', 'Inter', 'Montserrat', sans-serif;
              font-size: ${fontSize}px;
              font-weight: 600;
              font-style: normal;
              fill: ${textColor};
              letter-spacing: -0.03em;
            }
          `}</style>
        </defs>
        
        {/* "PthFndR" as one continuous wordmark: italic "Pth" flows into normal "FndR" */}
        <text x="0" y="28">
          <tspan className="pth-italic">Pth</tspan><tspan className="fndr-normal">FndR</tspan>
        </text>
      </svg>

      {/* Icon: overlapping dual triangles — gradient peeks out 4 units behind the navy */}
      <svg
        width={height * 0.6}
        height={height}
        viewBox="0 0 24 40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          {/* Gradient: Cyan to Lime Green */}
          <linearGradient
            id="pthfndr-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0097b2" />
            <stop offset="100%" stopColor="#7ed957" />
          </linearGradient>
        </defs>

        {/* Back Triangle (Gradient) - identical, offset +4 to the right */}
        <polygon
          points="4,8 4,32 22,20"
          fill="url(#pthfndr-gradient)"
          opacity="0.95"
        />

        {/* Front Triangle (Navy Solid) at x=0 */}
        <polygon
          points="0,8 0,32 18,20"
          fill={navyTriangle}
        />
      </svg>
    </div>
  );

  // If href is provided, wrap in link
  if (href) {
    return (
      <a 
        href={href}
        className="inline-flex items-center hover:opacity-80 transition-opacity duration-200"
        aria-label="PthFndR - Where Potential Becomes Impact"
      >
        {LogoContent}
      </a>
    );
  }

  return LogoContent;
}