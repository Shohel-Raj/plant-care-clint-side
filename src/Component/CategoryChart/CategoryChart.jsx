// CategoryChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#34D399', '#60A5FA', '#FBBF24', '#F87171', '#A78BFA', '#38BDF8'];

const CategoryChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 max-w-full md:max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-green-700">
        Plant Count by Category
      </h2>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              dataKey="count"
              nameKey="category"
              label={({ category, percent }) =>
                `${category} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryChart;
