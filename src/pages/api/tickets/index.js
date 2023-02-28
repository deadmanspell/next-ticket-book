import nc from "next-connect";
import { allTicket, newTicket } from "controllers/ticketController";
import dbConnect from "config/dbConnect";

const handler = nc();

dbConnect();

handler.get(allTicket);
handler.post(newTicket);

export default handler;
