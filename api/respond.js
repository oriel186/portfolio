const { verifyLead } = require("./_leadToken");

module.exports = async (req, res) => {
  let nodemailer;
  try {
    nodemailer = require("nodemailer");
  } catch (_error) {
    return res.status(500).json({ error: "Missing dependency: nodemailer" });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || emailUser;
  const leadTokenSecret = process.env.LEAD_TOKEN_SECRET;

  if (!emailUser || !emailPass || !leadTokenSecret) {
    return res.status(500).json({ error: "Server email configuration missing" });
  }

  const input = req.method === "GET" ? req.query || {} : req.body || {};
  const token = typeof input.token === "string" ? input.token : "";
  const action = typeof input.action === "string" ? input.action : "custom";
  const customMessage = typeof input.message === "string" ? input.message.trim() : "";
  const extraQuestions = typeof input.questions === "string" ? input.questions.trim() : "";
  const proposedPrice = typeof input.price === "string" ? input.price.trim() : "";

  const lead = verifyLead(token, leadTokenSecret);
  if (!lead) {
    return res.status(400).json({ error: "Invalid token" });
  }

  let subject = "Reponse a votre demande";
  let intro = "";
  if (action === "accept") {
    subject = "Votre demande est acceptee";
    intro = "Merci pour votre demande. Je suis partant pour avancer avec vous sur ce projet.";
  } else if (action === "refuse") {
    subject = "Retour sur votre demande";
    intro = "Merci pour votre demande. Je ne pourrai pas la prendre en charge dans de bonnes conditions actuellement.";
  } else {
    subject = "Suite a votre demande de projet";
    intro = customMessage || "Merci pour votre demande. Voici mon retour pour la suite.";
  }

  const sections = [
    `Bonjour ${lead.nom},`,
    "",
    intro
  ];

  if (proposedPrice) {
    sections.push("", `Proposition budgetaire: ${proposedPrice}`);
  }
  if (extraQuestions) {
    sections.push("", "Questions complementaires:", extraQuestions);
  }
  sections.push("", "Cordialement,", "Oriel Studio");

  const text = sections.join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6;max-width:700px;margin:0 auto;padding:22px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
      <p style="margin-top:0;">Bonjour ${lead.nom},</p>
      <p>${intro}</p>
      ${proposedPrice ? `<p><strong>Proposition budgetaire:</strong> ${proposedPrice}</p>` : ""}
      ${extraQuestions ? `<p><strong>Questions complementaires:</strong><br>${extraQuestions.replace(/\n/g, "<br>")}</p>` : ""}
      <p style="margin-bottom:0;">Cordialement,<br>Oriel Studio</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    await transporter.sendMail({
      from: fromEmail,
      to: lead.email,
      subject,
      text,
      html
    });

    if (req.method === "GET") {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send("<h3>Email client envoye avec succes.</h3>");
    }
    return res.status(200).json({ ok: true });
  } catch (_error) {
    return res.status(500).json({ error: "Unexpected server error" });
  }
};

