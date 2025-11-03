import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.href = '/petcrew/privacy.html';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <p className="text-gray-600">Redirecting to Privacy Policy...</p>
    </div>
  );
}
