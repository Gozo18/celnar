import nodemailer from "nodemailer"
import { render } from "@react-email/components"
import { SENDER_EMAIL, APP_NAME } from "@/lib/constants"
import { Order } from "@/types"
import dotenv from "dotenv"
dotenv.config()

import OrderReceivedEmail from "./order-received"
import PaymentReceiptEmail from "./payment-receipt"
import PurchaseReceiptEmail from "./purchase-receipt"
import WelcomeEmail from "./welcome"
import PasswordResetEmail from "./password-reset"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})



export const sendPasswordResetEmail = async ({
  name,
  email,
  resetUrl,
}: {
  name: string
  email: string
  resetUrl: string
}) => {
  const html = await render(<PasswordResetEmail name={name} resetUrl={resetUrl} />)
  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: email,
    subject: `Obnova hesla – Vinařství Celnar`,
    html,
  })
}

export const sendWelcomeEmail = async ({
  name,
  email,
}: {
  name: string
  email: string
}) => {
  const html = await render(<WelcomeEmail name={name} />)
  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: email,
    subject: `Vítejte ve Vinařství Celnar`,
    html,
  })
}

export const sendOrderReceived = async ({ order }: { order: Order }) => {
  const html = await render(<OrderReceivedEmail order={order} />)

  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Objednávka přijata – ${order.id.toString().slice(-6)}`,
    html,
  })

  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: "info@vinarstvicelnar.cz",
    subject: `NOVÁ OBJEDNÁVKA – ${order.id.toString().slice(-6)}`,
    html,
  })
}

export const sendPaymentReceipt = async ({ order }: { order: Order }) => {
  const html = await render(<PaymentReceiptEmail order={order} />)
  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Platba přijata – objednávka ${order.id.toString().slice(-6)}`,
    html,
  })
}

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  const html = await render(<PurchaseReceiptEmail order={order} />)
  await transporter.sendMail({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Vaše objednávka byla odeslána – ${order.id.toString().slice(-6)}`,
    html,
  })
}
