import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/petcrew/terms.html';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <p className="text-gray-600">Redirecting to Terms of Service...</p>
    </div>
  );
}
