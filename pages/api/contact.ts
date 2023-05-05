// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Contact from "../../modal/contactSchema";
import connectDB from "../../utils/dbConnect";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      let contact = new Contact({
        name: name,
        email: email,
        message: message,
      });

      let contactCreated = await contact.save();
      return res.status(200).json(contactCreated);
    } catch (error) {
      return res.status(500).json({
        err: "Something Went Wrong",
      });
    }
  }
}

export default connectDB(handler);
