import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Badge } from "@/components/ui/badge";

const data = [
  { month: 'Jan', actual: 2400, predicted: 2200, budget: 3000 },
  { month: 'Feb', actual: 2210, predicted: 2400, budget: 3000 },
  { month: 'Mar', actual: 2890, predicted: 2600, budget: 3000 },
  { month: 'Apr', actual: 2780, predicted: 2800, budget: 3000 },
  { month: 'May', actual: 3250, predicted: 3000, budget: 3000 },
  { month: 'Jun', actual: null, predicted: 3200, budget: 3000 },
  { month: 'Jul', actual: null, predicted: 3400, budget: 3000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: ${entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ExpenseChart = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="text-primary">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          Actual Spending
        </Badge>
        <Badge variant="outline" className="text-accent">
          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
          AI Prediction
        </Badge>
        <Badge variant="outline" className="text-muted-foreground">
          <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
          Budget Limit
        </Badge>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="text-xs"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              className="text-xs"
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Budget line */}
            <Line
              type="monotone"
              dataKey="budget"
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={false}
            />
            
            {/* Actual spending area */}
            <Area
              type="monotone"
              dataKey="actual"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              fill="hsl(var(--primary) / 0.1)"
              connectNulls={false}
            />
            
            {/* Predicted spending line */}
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-gradient-primary/10 p-4 rounded-lg">
        <h4 className="font-medium text-sm mb-2">AI Insights</h4>
        <p className="text-xs text-muted-foreground">
          Based on your spending patterns, you're likely to exceed your budget by $200 this month. 
          Consider reducing dining out expenses by 15% to stay on track.
        </p>
      </div>
    </div>
  );
};