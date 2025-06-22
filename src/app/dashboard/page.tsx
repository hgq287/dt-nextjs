
export default function DashboardPage() {
  return (
    <>
      <DashboardContent />
    </>
  );
}

function DashboardContent() {
  return (
    <div className="dashboard">
      <DashboardHeader />
    </div>
  );
}

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </header>
  );
}