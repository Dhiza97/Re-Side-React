import axios from 'axios';

export const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${token}`;

  const emailData = {
    sender: {
      name: 'Re-Side',
      email: process.env.SENDER_EMAIL,
    },
    to: [
      {
        email: email,
        name: email,
      },
    ],
    subject: 'Verify Your Email - Re-Side',
    htmlContent: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="color: #333; text-align: center;">Welcome to ReSide!</h1>
      <p style="color: #666; font-size: 16px; text-align: center;">Please verify your email address to complete your registration.</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${verificationUrl}" style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Verify Email</a>
      </div>
      <p style="color: #999; font-size: 14px; text-align: center;">This link will expire in 24 hours. If you didn't request this, please ignore this email.</p>
    </div>
  </div>
`,
  };

  try {
    const response = await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
    throw error;
  }
};