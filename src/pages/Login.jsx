import React from 'react';

import GoogleAuthButton from '@/components/auth/GoogleAuthButton';



const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col items-center justify-center px-4">
      {/* School Logo/Badge */}
      <div className="mb-12">
        <img 
          src="/src/assets/Woodcreek.png" 
          alt="School Badge" 
          className="h-32 w-auto mx-auto"
        />
      </div>

      {/* Sign In Form Container */}
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h2 className="text-[#9D1C21] text-2xl font-medium mb-8">Sign In</h2>
        </div>

        
        <div className="space-y-4">
          <GoogleAuthButton/>
          
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-12 space-y-2">
        <button className="text-gray-[#9D1C21] hover:text-[#9D1C21] text-sm underline block mx-auto">
          Help
        </button>
      </div>
    </div>
  );
};

export default LoginPage;