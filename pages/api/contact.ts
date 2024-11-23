// Not used but for reference. Didn't work live
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");
import Content from "@/configs/content.json";

type Data = {
  name: string;
  contact: string;
  location: string;
  suppliers: boolean;
  customers: boolean;
  collab1: boolean;
  collab2: boolean;
};

type ResponseData = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { checkboxes } = Content["simsimau"].contact.formfields;

  if (req.method === "POST") {
    try {
      const {
        name,
        contact,
        location,
        suppliers,
        customers,
        collab1,
        collab2,
      }: Data = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.APP_EMAIL,
          pass: process.env.APP_EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.APP_NO_REPLY_EMAIL,
        to: process.env.APP_EMAIL,
        subject: "SimSimAu - Contact Form Submission",
        html: `
        <p>Name: ${name} </p>
        <p>Contact: ${contact} </p>
        <p>Location: ${location} </p>
        <p>${checkboxes[0].label} ${suppliers}</p>
        <p>${checkboxes[1].label} ${customers}</p>
        <p>${checkboxes[2].label} ${collab1}</p>
        <p>${checkboxes[3].label} ${collab2}</p>
        `,
      };

      transporter.sendMail(
        mailOptions,
        function (error: ResponseData, info: { response: string }) {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }
        }
      );

      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ status: `Error: ${error}` });
    }
  }
}
