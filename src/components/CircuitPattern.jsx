export default function CircuitPattern() {
  return (
    <div className="circuit-pattern">
      <svg
        className="circuit-svg"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b24bf3" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Circuit paths - horizontal */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none" filter="url(#circuitGlow)">
          <path d="M 50,100 L 200,100 L 200,150 L 350,150">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M 450,150 L 600,150 L 600,200 L 750,200">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite" />
          </path>
          
          <path d="M 50,250 L 150,250 L 150,300 L 400,300">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" />
          </path>
          <path d="M 500,300 L 650,300 L 650,250 L 750,250">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" />
          </path>
          
          <path d="M 50,400 L 250,400 L 250,450 L 550,450">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="5.5s" repeatCount="indefinite" />
          </path>
          <path d="M 600,450 L 750,450">
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Circuit nodes */}
        <g fill="url(#circuitGradient)" filter="url(#circuitGlow)">
          <circle cx="200" cy="100" r="4">
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="150" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="150" r="4">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="200" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="250" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="300" r="4">
            <animate attributeName="r" values="4;6;4" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="300" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="250" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.9s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="250" cy="400" r="4">
            <animate attributeName="r" values="4;6;4" dur="3.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="450" r="4">
            <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Microchip rectangles */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none" opacity="0.5">
          <rect x="340" y="140" width="30" height="30" rx="2">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="390" y="290" width="30" height="30" rx="2">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
          </rect>
          <rect x="540" y="440" width="30" height="30" rx="2">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Data pulses */}
        <g fill="#00d9ff" opacity="0.8">
          <circle r="3">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#circuit-path-1"/>
            </animateMotion>
          </circle>
          <circle r="3">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#circuit-path-2"/>
            </animateMotion>
          </circle>
        </g>

        <defs>
          <path id="circuit-path-1" d="M 50,100 L 200,100 L 200,150 L 350,150" fill="none"/>
          <path id="circuit-path-2" d="M 50,250 L 150,250 L 150,300 L 400,300" fill="none"/>
        </defs>
      </svg>
    </div>
  );
}
