import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        console.log({
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_USER: process.env.SMTP_USER,
            SMTP_PASSWORD: process.env.SMTP_PASSWORD,
            SMTP_RECIPIENT: process.env.SMTP_RECIPIENT
        });


        // Configure the transporter with your SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for port 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // Your email address
                pass: process.env.SMTP_PASSWORD, // Your email password or app-specific password
            },
        });

        // Configure the email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Your SMTP email as sender
            to: process.env.SMTP_RECIPIENT, // Recipient's email address
            replyTo: email, // Reply-to the person who submitted the form
            subject: `New Contact Form Submission from ${name}`,
            text: message, // Plain text body
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `, // HTML body
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}