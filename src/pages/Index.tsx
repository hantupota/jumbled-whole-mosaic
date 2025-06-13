
import Header from "@/components/Header";
import DashboardCard from "@/components/DashboardCard";
import StatsCard from "@/components/StatsCard";
import QuickActions from "@/components/QuickActions";
import { Calendar, BarChart3, CheckSquare, Users, Plus, Settings, Bell, Search } from "lucide-react";

const Index = () => {
  const dashboardItems = [
    {
      title: "Tasks",
      description: "Manage your daily tasks and priorities",
      icon: CheckSquare,
      color: "from-blue-500 to-blue-600",
      stats: "12 pending"
    },
    {
      title: "Analytics",
      description: "Track your productivity metrics",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
      stats: "+24% this week"
    },
    {
      title: "Projects",
      description: "Organize and monitor your projects",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      stats: "8 active"
    },
    {
      title: "Calendar",
      description: "Schedule and view your events",
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      stats: "3 meetings today"
    }
  ];

  const stats = [
    { label: "Total Tasks", value: "156", change: "+12%" },
    { label: "Completed", value: "89", change: "+8%" },
    { label: "In Progress", value: "45", change: "+15%" },
    { label: "Projects", value: "23", change: "+3%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Selamat Datang di Dashboard Anda
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kelola produktivitas Anda dengan tools yang powerful dan interface yang intuitif
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              label={stat.label}
              value={stat.value}
              change={stat.change}
            />
          ))}
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {dashboardItems.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              stats={item.stats}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  );
};

export default Index;
