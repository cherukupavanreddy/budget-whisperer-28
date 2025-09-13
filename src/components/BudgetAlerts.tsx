import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Calendar, ShoppingCart } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "overspend",
    category: "Dining Out",
    amount: 45,
    icon: ShoppingCart,
    severity: "high",
    message: "Exceeded dining budget by $45 this week"
  },
  {
    id: 2,
    type: "trending",
    category: "Shopping",
    amount: 120,
    icon: TrendingUp,
    severity: "medium",
    message: "Shopping expenses trending 30% above normal"
  },
  {
    id: 3,
    type: "upcoming",
    category: "Utilities",
    amount: 180,
    icon: Calendar,
    severity: "low",
    message: "Utility bill due in 3 days"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive";
    case "medium":
      return "warning";
    case "low":
      return "secondary";
    default:
      return "secondary";
  }
};

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "high":
      return "High Priority";
    case "medium":
      return "Medium";
    case "low":
      return "Low";
    default:
      return "Info";
  }
};

export const BudgetAlerts = () => {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => {
        const Icon = alert.icon;
        const severityColor = getSeverityColor(alert.severity);
        
        return (
          <div 
            key={alert.id} 
            className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors"
          >
            <div className={`p-2 rounded-full bg-${severityColor}/10`}>
              <Icon className={`w-4 h-4 text-${severityColor}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm font-medium truncate">
                  {alert.category}
                </p>
                <Badge 
                  variant="outline" 
                  className={`text-${severityColor} border-${severityColor}/20 text-xs ml-2`}
                >
                  {getSeverityBadge(alert.severity)}
                </Badge>
              </div>
              
              <p className="text-xs text-muted-foreground mb-2">
                {alert.message}
              </p>
              
              {alert.amount && (
                <p className={`text-xs font-medium text-${severityColor}`}>
                  ${alert.amount}
                </p>
              )}
            </div>
          </div>
        );
      })}
      
      <div className="mt-4 p-3 bg-primary/5 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Smart Tip</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Set up automatic savings transfers to avoid overspending in discretionary categories.
        </p>
      </div>
    </div>
  );
};