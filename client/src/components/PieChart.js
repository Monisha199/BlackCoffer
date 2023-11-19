import React from 'react';

const PieChart = ({ data, width, height ,lineColor}) => {
    const maxValue = Math.max(...data);
    const xScale = width / (data.length - 1);
    const yScale = height / maxValue;
  
    const points = data.map((value, index) => `${index * xScale},${height - value * yScale}`);
  
    const pathData = `M${points.join(' L')}`;
  
    return (
        
      <svg width={width} height={height}>
        <path d={pathData} fill="none" stroke={lineColor} strokeWidth="2" />
      </svg>
    );
};

export default PieChart;