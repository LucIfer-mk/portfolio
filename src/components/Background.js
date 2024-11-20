import React, { useEffect, useState } from "react";
import "./App.css";

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
            borderBottomWidth: `${triangle.size}px`,
            borderLeftWidth: `${triangle.size / 2}px`,
            borderRightWidth: `${triangle.size / 2}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
