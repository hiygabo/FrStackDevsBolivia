import { useEffect, useMemo, useState } from 'react';
import './CodeBackground.css';

// Mover codeLines fuera del componente para que sea estable y no cause re-renders
const CODE_LINES = [
  // React/JavaScript básico
  'import React from "react";',
  'const [data, setData] = useState([]);',
  // Java/Spring
  'public class Curso {',
  '@GetMapping("/cursos")',
  // Python/Algoritmos
  'def binary_search(arr, target):',
  'def fib(n): return n if n<2 else fib(n-1)+fib(n-2)',
  // Bases de datos
  'SELECT * FROM users WHERE active = 1;',
  'UPDATE products SET price = 99.99;',
  // Git
  'git commit -m "fix: resolver bug crítico"',
  'git push origin main',
  // Docker/DevOps
  'docker build -t app:latest .',
  'kubectl apply -f deployment.yaml',
  // Node/Express
  'const express = require("express");',
  'app.listen(3000, () => console.log("Server"));',
  // Frameworks Python
  'from django.db import models',
  'app = Flask(__name__)',
  // Seguridad
  'const token = jwt.sign(payload, secret);',
  'bcrypt.hash(password, 10);',
  // Cloud
  'aws s3 cp file.zip s3://bucket/',
  'az webapp create --name app',
  // Testing
  'pytest tests/ --cov',
  'jest --coverage --verbose',
  // Comandos Unix
  'ssh user@server.com',
  'tail -f logs/app.log',
  // JavaScript Moderno
  'const { name, age } = user;',
  'arr.map(x => x * 2).filter(x > 10)',
  // Promesas/Async
  'async function fetchData() {',
  'Promise.all([p1, p2]).then(results)',
  // DOM/Browser
  'localStorage.setItem("key", value);',
  'document.querySelector(".class");',
];

function CodeBackground() {

  const ROWS = 8;
  const getColsForWidth = (width) => {
    if (width <= 640) return 1;
    if (width <= 900) return 2;
    return 4;
  };

  const [cols, setCols] = useState(() => {
    if (typeof window === 'undefined') return 4;
    return getColsForWidth(window.innerWidth);
  });

  useEffect(() => {
    const onResize = () => setCols(getColsForWidth(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const visibleLines = useMemo(() => {
    const count = Math.min(CODE_LINES.length, ROWS * cols);
    if (count === CODE_LINES.length) return CODE_LINES;

    // Pick evenly-spaced lines so we keep "variety" when count is smaller.
    const step = Math.ceil(CODE_LINES.length / count);
    const picked = [];
    for (let i = 0; i < CODE_LINES.length && picked.length < count; i += step) {
      picked.push(CODE_LINES[i]);
    }
    // Fill (if needed) from the start.
    for (let i = 0; picked.length < count; i += 1) {
      picked.push(CODE_LINES[i]);
    }
    return picked.slice(0, count);
  }, [cols]);

  return (
    <div className="code-background">
      <div className="code-lines" style={{ '--cols': cols }}>
        {visibleLines.map((line, index) => {
          const col = Math.floor(index / ROWS);
          const row = index % ROWS;
          const duration = 14 + (index % 5) * 2;

          // Negative delay avoids the "all start together" / flicker effect on reload.
          const delay = -((index * 3.1) % duration);

          return (
            <div
              key={`${col}-${row}-${line}`}
              className="code-line"
              style={{
                left: `${(col * 100) / cols}%`,
                top: `${(row * 100) / ROWS}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CodeBackground;
