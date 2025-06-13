
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  stats: string;
}

const DashboardCard = ({ title, description, icon: Icon, color, stats }: DashboardCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50/50">
      {/* Gradient Background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300",
        color
      )} />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div className={cn(
            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
            color
          )}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
            {stats}
          </span>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-muted/50 transition-colors"
        >
          <span>Buka {title}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
