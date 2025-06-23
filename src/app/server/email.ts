"use client";

const emailjs = require('@emailjs/browser');

export async function sendEmail(formData: FormData) {

  const formName = formData.get('name') as string;
  const formEmail = formData.get('email') as string;
  const formMessage = formData.get('message') as string;

  var data = {
    name: formName,
    email: formEmail,
    message: formMessage
  };

  emailjs.init('ThLSkjztY61pM6Fz7');

  emailjs.send('service_tdm', 'template_tdm', data)
  .then((response: { status: any; text: any; }) => {
    console.log('Email sent successfully!', response.status, response.text);
  }) .catch((error: any) => {
    console.error('Failed to send email:', error);
  });
}