import Ticket from "models/ticket";

const allTicket = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Succesfully Get All Ticket",
  });
};

const newTicket = async (req, res) => {
  try {
    // const ticket = await Ticket.create(req.body);

    await res.status(200).json({
      success: true,
      request: req.body,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allTicket, newTicket };
