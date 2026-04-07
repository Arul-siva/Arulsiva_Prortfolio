import React from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = "" }) => {
  const words = text.split(' ');
  
  if (words.length < 2) {
    return <span className={className}>{text}</span>;
  }


  const firstTwo = words.slice(0, 2).join(' ');
  const rest = words.slice(2).join(' ');

  return (
    <span className={className}>
      <span 
        className="bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-right"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 0%, #bef264 50%, #ffffff 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {firstTwo}
      </span>
      {' '}{rest}
    </span>
  );
};

export default GradientText;
