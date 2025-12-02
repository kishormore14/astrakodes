export default function NeuralNetworkBG() {
  return (
    <div className="neural-network-bg">
      <svg
        className="neural-svg"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Define gradients */}
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.8" />
          </linearGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#b24bf3" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Neural network connections - Layer 1 to Layer 2 */}
        <g className="connections" opacity="0.4">
          {/* Input layer to hidden layer */}
          <line x1="200" y1="150" x2="500" y2="200" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="150" x2="500" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="150" x2="500" y2="600" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          
          <line x1="200" y1="400" x2="500" y2="200" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="400" x2="500" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.8s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="400" x2="500" y2="600" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite" />
          </line>
          
          <line x1="200" y1="650" x2="500" y2="200" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.6s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="650" x2="500" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4.1s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="650" x2="500" y2="600" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.4s" repeatCount="indefinite" />
          </line>

          {/* Hidden layer to output layer */}
          <line x1="500" y1="200" x2="900" y2="300" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.3s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="200" x2="900" y2="500" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.9s" repeatCount="indefinite" />
          </line>
          
          <line x1="500" y1="400" x2="900" y2="300" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4.3s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="400" x2="900" y2="500" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.7s" repeatCount="indefinite" />
          </line>
          
          <line x1="500" y1="600" x2="900" y2="300" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="600" x2="900" y2="500" stroke="url(#lineGradient)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3.1s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Neural network nodes */}
        <g className="nodes" filter="url(#glow)">
          {/* Input layer */}
          <circle cx="200" cy="150" r="12" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="400" r="12" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="12;15;12" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="650" r="12" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Hidden layer */}
          <circle cx="500" cy="200" r="14" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="14;17;14" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="400" r="14" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="14;17;14" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="600" r="14" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="14;17;14" dur="3.2s" repeatCount="indefinite" />
          </circle>

          {/* Output layer */}
          <circle cx="900" cy="300" r="16" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="16;19;16" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="500" r="16" fill="url(#nodeGradient)" opacity="0.9">
            <animate attributeName="r" values="16;19;16" dur="2.9s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Data flow particles */}
        <g className="data-particles">
          <circle r="3" fill="#00d9ff" opacity="0.8">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#path1"/>
            </animateMotion>
          </circle>
          <circle r="3" fill="#6366f1" opacity="0.8">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <mpath href="#path2"/>
            </animateMotion>
          </circle>
          <circle r="3" fill="#b24bf3" opacity="0.8">
            <animateMotion dur="4.5s" repeatCount="indefinite">
              <mpath href="#path3"/>
            </animateMotion>
          </circle>
        </g>

        {/* Hidden paths for particle animation */}
        <defs>
          <path id="path1" d="M 200,150 L 500,200 L 900,300" fill="none"/>
          <path id="path2" d="M 200,400 L 500,400 L 900,500" fill="none"/>
          <path id="path3" d="M 200,650 L 500,600 L 900,300" fill="none"/>
        </defs>
      </svg>
    </div>
  );
}
