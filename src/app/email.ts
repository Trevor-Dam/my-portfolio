"use server";
const emailjs = require('@emailjs/browser');

export default async function sendEmail(formData: FormData) {
  const formName = formData.get('name') as string;
  const formEmail = formData.get('email') as string;
  const formMessage = formData.get('message') as string;

  emailjs.send('service_tdm', 'template_tdm', {
    name: formName,
    email: formEmail, 
    message: formMessage, 
  })
  .then((response: { status: any; text: any; }) => {
    console.log('Email sent successfully!', response.status, response.text);
    console.log(`Name: ${formName}, Email: ${formEmail}, Message: ${formMessage}`);
  }, (error: any) => {
    console.error('Failed to send email:', error);
  });
}