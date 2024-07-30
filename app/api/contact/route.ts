import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: Request) {
  const formData = await request.json();

  if (!formData.name || !formData.email || !formData.message) {
    return NextResponse.json(
      { error: "Lütfen tüm alanları doldurunuz." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || '465', 10),
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    to: "denizgokbudak@gmail.com", 
    replyTo:formData.email,
    subject: `Yeni mesaj: ${formData.name}`,
    text: formData.message,
    html: `<p>${formData.message}</p>`

  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi." },
      { status: 500 }
    );
  }
}
