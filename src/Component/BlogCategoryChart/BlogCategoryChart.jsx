import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Optional blog-specific color palette
const COLORS = ['#60A5FA', '#34D399', '#FBBF24', '#A78BFA', '#F87171', '#38BDF8'];

const BlogCategoryChart = ({ data, title = "Blog Count by Category" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 max-w-full w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-blue-700">
        {title}
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: '12px',
                paddingTop: '10px',
                lineHeight: '1.4',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlogCategoryChart;
