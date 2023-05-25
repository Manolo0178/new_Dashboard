import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const BarChartComponent = () => {
    const data = [
        { name: 'Enero', ventas: 20 },
        { name: 'Febrero', ventas: 30 },
        { name: 'Marzo', ventas: 15 },
        { name: 'Abril', ventas: 25 },
      ];
    
      return (
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#8884d8" />
        </BarChart>
      );
};

export default BarChartComponent;
