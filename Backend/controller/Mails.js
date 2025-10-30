import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Sender gmail address
        pass: process.env.EMAIL_PASS, // App password from Gmail account
    },
});

const mailBody = (to) => {
    return {
        from: {
            name: "Classy Shop",
            address: process.env.EMAIL_USER,
        },
        to,
        subject: " Welcome to Classy Shop! 🎉 Your Subscription is Confirmed !",
        text: "Hello world !",
        html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f7f7; padding: 40px;">
            <table align="center" width="600" style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); padding: 40px;">
                <tr>
                    <td align="center" style="padding-bottom: 20px;">
                        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/logo-1691412328.jpg" alt="Classy Shop" width="80" style="border-radius: 50%;"/>
                        <h2 style="color: #333; margin-top: 10px;">Classy Shop</h2>
                    </td>
                </tr>
                <tr>
                    <td style="color: #555; font-size: 16px; line-height: 1.6; text-align: center;">
                        <h3 style="color: #222; font-weight: 600;">Thank You for Subscribing! 🎉</h3>
                        <p>
                            We're thrilled to have you join our stylish community. You'll now receive the latest updates, exclusive offers, and the best deals — straight to your inbox.
                        </p>
                        <p style="margin-top: 10px;">Get ready to shop smart and stay classy!</p>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 30px 0;">
                        <a href="https://e-commerce-6nb9.vercel.app/" 
                            style="background-color: #111827; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 15px;">
                            Visit Our Store
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 13px; color: #999; text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
                        <p>
                            You’re receiving this email because you subscribed at 
                            <a href="https://e-commerce-6nb9.vercel.app/" style="color: #007bff; text-decoration: none;">ClassyShop.com</a>.
                        </p>
                        <p>© ${new Date().getFullYear()} Classy Shop. All rights reserved.</p>
                    </td>
                </tr>
            </table>
        </div>
        `,
    };
};


const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    }
    catch (error) {
        console.error(error);
    }
}


const subscribeMail = async (req, res) => {
    const { email } = req.body;
    try {
        console.log([email]);
        const mailOptions = mailBody([email]);
        await sendMail(transporter, mailOptions);
        console.log("Done");

        res.status(200).json({ success: true, message: "Subscription email sent successfully." });
    } catch (error) {
        console.error("Mailer Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }

}

export default subscribeMail;