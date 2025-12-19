import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Verification = () => {
  const { token } = useParams();
  const { api } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await api.get(`/api/user/verify-email/${token}`);
        setMessage(response.data.message);
        toast.success('Email verified successfully!');
        // Redirect to login after a short delay
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Verification failed');
        toast.error('Verification failed');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token, api, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        {loading ? (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryColor mx-auto"></div>
            <p className="mt-4 text-gray-600">Verifying your email...</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {message.includes('successfully') ? 'Verification Successful!' : 'Verification Failed'}
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>
            {message.includes('successfully') && (
              <p className="text-sm text-gray-500">Redirecting to login...</p>
            )}
            <button
              onClick={() => navigate('/login')}
              className="bg-primaryColor text-white px-4 py-2 rounded hover:bg-primaryColor-dark"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;