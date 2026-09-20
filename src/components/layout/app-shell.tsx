import { AppHeader } from './app-header';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main>{children}</main>
    </div>
  );
}
