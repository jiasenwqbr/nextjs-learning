export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setTimeout(() => {
    console.log("dashboard layout tinemout");
  }, 7000);
  return (
    <section>
      DashboardLayout
      {children}
    </section>
  );
}
