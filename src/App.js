import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [triangles, setTriangles] = useState([]);

  useEffect(() => {
    const generateTriangles = () => {
      const trianglesArray = [];
      for (let i = 0; i < 50; i++) {
        trianglesArray.push({
          left: Math.random() * 100 + "vw",
          top: Math.random() * 100 + "vh",
          size: Math.random() * 50 + 30,
          rotation: Math.random() * 360,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Random neon color
        });
      }
      setTriangles(trianglesArray);
    };
    generateTriangles();
  }, []);

  return (
    <div>
      {triangles.map((triangle, index) => (
        <div
          key={index}
          className="triangle"
          style={{
            left: triangle.left,
            top: triangle.top,
            transform: `rotate(${triangle.rotation}deg)`,
            borderLeftWidth: `${triangle.size / 2}px`,
            borderRightWidth: `${triangle.size / 2}px`,
            borderBottomWidth: `${triangle.size}px`,
            filter: `drop-shadow(0 0 10px ${triangle.color}) 
                     drop-shadow(0 0 20px ${triangle.color}) 
                     drop-shadow(0 0 30px ${triangle.color})`,
          }}
        ></div>
      ))}

    </div>
  );
}
export default App;
