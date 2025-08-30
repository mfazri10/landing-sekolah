import nodemailer from 'nodemailer'

interface EmailData {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailData) {
  // Create a test account for development
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: '"FAZ School" <noreply@fazschool.ac.id>',
    to,
    subject,
    html,
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  return info
}

export function createContactEmailTemplate(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0d9488; color: white; padding: 20px; text-align: center; }
        .content { background: #f9fafb; padding: 20px; }
        .footer { background: #e5e7eb; padding: 20px; text-align: center; font-size: 14px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #374151; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Pesan Kontak Baru</h1>
        </div>
        <div class="content">
          <p>Anda menerima pesan kontak baru dari website FAZ School:</p>
          
          <div class="field">
            <span class="field-label">Nama:</span> ${firstName} ${lastName}
          </div>
          
          <div class="field">
            <span class="field-label">Email:</span> ${email}
          </div>
          
          <div class="field">
            <span class="field-label">Telepon:</span> ${phone || 'Tidak diisi'}
          </div>
          
          <div class="field">
            <span class="field-label">Subjek:</span> ${subject}
          </div>
          
          <div class="field">
            <span class="field-label">Pesan:</span>
            <p>${message}</p>
          </div>
        </div>
        <div class="footer">
          <p>Pesan ini dikirim dari formulir kontak website FAZ School</p>
          <p>© ${new Date().getFullYear()} FAZ School. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
