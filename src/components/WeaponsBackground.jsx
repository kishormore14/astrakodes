import { useEffect, useRef, useState } from 'react';

export default function WeaponsBackground() {
  const canvasRef = useRef(null);
  const weaponsRef = useRef([]);

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
    </>
  );
}
