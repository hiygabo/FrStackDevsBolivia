import { useEffect, useState } from 'react';
import './CodeBackgroundInfo.css';

const CODE_SNIPPETS = [
  'class', 'function', 'const', 'let', 'var', 'import', 'export',
  'return', 'if', 'else', 'for', 'while', 'switch', 'case',
  '{ }', '[ ]', '( )', '=>', '===', '!==', '&&', '||',
  'async', 'await', 'try', 'catch', 'throw', 'new',
  'React', 'useState', 'useEffect', 'Spring', 'Boot',
  'API', 'REST', 'HTTP', 'JSON', 'SQL', 'NoSQL',
  'Git', 'Docker', 'Linux', 'AWS', 'Azure',
  '<div>', '</div>', '<Component/>', 'props', 'state',
  'map()', 'filter()', 'reduce()', 'forEach()',
  'public', 'private', 'static', 'void', 'int',
  'String', 'Boolean', 'Array', 'Object', 'null',
  'SELECT * FROM', 'DROP TABLE', 'StackDevsBolivia', 'true', 'false', 'undefined'
];

function CodeBackgroundInfo() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generar partículas aleatorias
    const generateParticles = () => {
      const count = 25; // Número de partículas
      const newParticles = [];
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          x: Math.random() * 100, // Posición X en %
          y: Math.random() * 100, // Posición Y en %
          duration: 15 + Math.random() * 15, // 15-30 segundos
          delay: Math.random() * -20, // Delay negativo para que no empiecen todos juntos
          size: 10 + Math.random() * 8, // Tamaño de fuente variable
          opacity: 0.03 + Math.random() * 0.07, // Opacidad muy sutil
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="code-background-info">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="code-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.text}
        </span>
      ))}
    </div>
  );
}

export default CodeBackgroundInfo;
