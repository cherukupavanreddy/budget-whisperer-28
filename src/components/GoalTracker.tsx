import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Plane, Home, Car } from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    target: 10000,
    current: 7500,
    icon: Target,
    status: "on-track",
    deadline: "Dec 2024"
  },
  {
    id: 2,
    title: "Vacation to Japan",
    target: 5000,
    current: 2800,
    icon: Plane,
    status: "on-track",
    deadline: "Jun 2025"
  },
  {
    id: 3,
    title: "House Down Payment",
    target: 50000,
    current: 18500,
    icon: Home,
    status: "behind",
    deadline: "Dec 2025"
  },
  {
    id: 4,
    title: "New Car",
    target: 25000,
    current: 12000,
    icon: Car,
    status: "on-track",
    deadline: "Mar 2025"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "on-track":
      return "success";
    case "behind":
      return "destructive";
    case "completed":
      return "accent";
    default:
      return "secondary";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "on-track":
      return "On Track";
    case "behind":
      return "Behind";
    case "completed":
      return "Completed";
    default:
      return "Not Started";
  }
};

export const GoalTracker = () => {
  return (
    <div className="space-y-4">
      {goals.slice(0, 3).map((goal) => {
        const progress = (goal.current / goal.target) * 100;
        const Icon = goal.icon;
        
        return (
          <Card key={goal.id} className="border border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{goal.title}</h4>
                    <p className="text-xs text-muted-foreground">Due: {goal.deadline}</p>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-${getStatusColor(goal.status)} border-${getStatusColor(goal.status)}/20`}
                >
                  {getStatusText(goal.status)}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                  <span className="font-medium">
                    {progress.toFixed(1)}%
                  </span>
                </div>
                <Progress 
                  value={progress} 
                  className="h-2"
                />
              </div>
              
              {goal.status === "behind" && (
                <div className="mt-3 p-2 bg-destructive/10 rounded text-xs text-destructive">
                  Need to save $180 more per month to reach goal on time
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
      
      <div className="text-center pt-2">
        <button className="text-xs text-primary hover:underline">
          View all goals →
        </button>
      </div>
    </div>
  );
};