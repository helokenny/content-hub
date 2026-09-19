import { LoginForm } from '@/features/auth/components/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-medium text-blue-600">ContentHub</p>

            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>

            <p className="text-sm text-gray-600">
              Sign in to access your content dashboard.
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
