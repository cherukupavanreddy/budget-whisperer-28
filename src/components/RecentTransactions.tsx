import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  ShoppingBag, 
  Car, 
  Home, 
  Utensils,
  Gamepad2,
  Heart,
  Briefcase 
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -5.75,
    category: "Dining Out",
    icon: Coffee,
    date: "Today, 9:30 AM",
    aiCategory: "auto",
    confidence: 95
  },
  {
    id: 2,
    description: "Amazon Purchase",
    amount: -89.99,
    category: "Shopping",
    icon: ShoppingBag,
    date: "Yesterday, 2:15 PM",
    aiCategory: "auto",
    confidence: 88
  },
  {
    id: 3,
    description: "Shell Gas Station",
    amount: -45.20,
    category: "Transportation",
    icon: Car,
    date: "Yesterday, 8:45 AM",
    aiCategory: "auto",
    confidence: 98
  },
  {
    id: 4,
    description: "Netflix Subscription",
    amount: -15.99,
    category: "Entertainment",
    icon: Gamepad2,
    date: "Dec 5, 11:00 PM",
    aiCategory: "auto",
    confidence: 100
  },
  {
    id: 5,
    description: "Paycheck Deposit",
    amount: 3200.00,
    category: "Income",
    icon: Briefcase,
    date: "Dec 5, 12:00 AM",
    aiCategory: "auto",
    confidence: 100
  },
  {
    id: 6,
    description: "Whole Foods",
    amount: -127.45,
    category: "Groceries",
    icon: ShoppingBag,
    date: "Dec 4, 6:30 PM",
    aiCategory: "auto",
    confidence: 92
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Income":
      return "success";
    case "Dining Out":
      return "warning";
    case "Transportation":
      return "primary";
    case "Entertainment":
      return "accent";
    case "Groceries":
      return "secondary";
    default:
      return "secondary";
  }
};

export const RecentTransactions = () => {
  return (
    <div className="space-y-3">
      {transactions.map((transaction) => {
        const Icon = transaction.icon;
        const isIncome = transaction.amount > 0;
        const categoryColor = getCategoryColor(transaction.category);
        
        return (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full bg-${categoryColor}/10`}>
                <Icon className={`w-4 h-4 text-${categoryColor}`} />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium">
                    {transaction.description}
                  </p>
                  {transaction.aiCategory === "auto" && (
                    <Badge 
                      variant="outline" 
                      className="text-xs text-primary border-primary/20"
                    >
                      AI: {transaction.confidence}%
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline" 
                    className={`text-${categoryColor} border-${categoryColor}/20 text-xs`}
                  >
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {transaction.date}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-medium ${isIncome ? 'text-success' : 'text-foreground'}`}>
                {isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
      
      <div className="mt-4 p-3 bg-accent/5 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-accent">AI Categorization</span>
          <span className="text-xs text-muted-foreground">96% accuracy this month</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Transactions are automatically categorized using AI. You can adjust categories anytime.
        </p>
      </div>
    </div>
  );
};