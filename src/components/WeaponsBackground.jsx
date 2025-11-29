import { useEffect, useRef, useState } from 'react';

export default function WeaponsBackground() {
  const canvasRef = useRef(null);
  const weaponsRef = useRef([]);
  const [lightningFlashes, setLightningFlashes] = useState([]);

  const weapons = [
    { src: '/images/trishul.png', className: 'weapon-1' },
    { src: '/images/chakra.png', className: 'weapon-2' },
    { src: '/images/gada.png', className: 'weapon-3' },
    { src: '/images/sward.png', className: 'weapon-4' },
    { src: '/images/brahmastra.png', className: 'weapon-5' },
    { src: '/images/chakra.png', className: 'weapon-6' },
    { src: '/images/trishul.png', className: 'weapon-7' },
    { src: '/images/sward.png', className: 'weapon-8' },
    { src: '/images/gada.png', className: 'weapon-9' },
    { src: '/images/brahmastra.png', className: 'weapon-10' },
  ];

  useEffect(() => {
    const checkCollisions = () => {
      const weaponElements = document.querySelectorAll('.weapon');
      const newFlashes = [];

      for (let i = 0; i < weaponElements.length; i++) {
        for (let j = i + 1; j < weaponElements.length; j++) {
          const rect1 = weaponElements[i].getBoundingClientRect();
          const rect2 = weaponElements[j].getBoundingClientRect();

          // Check if weapons are close (within 200px)
          const distance = Math.sqrt(
            Math.pow(rect1.left + rect1.width / 2 - (rect2.left + rect2.width / 2), 2) +
            Math.pow(rect1.top + rect1.height / 2 - (rect2.top + rect2.height / 2), 2)
          );

          if (distance < 200) {
            // Calculate midpoint for explosion effect
            const x = (rect1.left + rect1.width / 2 + rect2.left + rect2.width / 2) / 2;
            const y = (rect1.top + rect1.height / 2 + rect2.top + rect2.height / 2) / 2;
            
            newFlashes.push({
              id: `${i}-${j}-${Date.now()}`,
              x,
              y,
              intensity: Math.max(0.3, 1 - distance / 200)
            });
          }
        }
      }

      if (newFlashes.length > 0) {
        setLightningFlashes(newFlashes);
        setTimeout(() => setLightningFlashes([]), 3000);
      }
    };

    const interval = setInterval(checkCollisions, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="weapons-background">
        {weapons.map((weapon, index) => (
          <img
            key={index}
            src={weapon.src}
            className={`weapon ${weapon.className}`}
            alt={`Weapon ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Lightning Effects */}
      {lightningFlashes.map((flash) => (
        <div
          key={flash.id}
          className="lightning-flash"
          style={{
            left: `${flash.x}px`,
            top: `${flash.y}px`,
            opacity: flash.intensity,
          }}
        >
          <div className="lightning-bolt"></div>
          <div className="lightning-glow"></div>
        </div>
      ))}
    </>
  );
}
