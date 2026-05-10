const { signLead } = require("./_leadToken");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let nodemailer;
  try {
    nodemailer = require("nodemailer");
  } catch (_error) {
    return res.status(500).json({ error: "Missing dependency: nodemailer" });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || emailUser;
  const appBaseUrl = process.env.APP_BASE_URL;
  const leadTokenSecret = process.env.LEAD_TOKEN_SECRET;

  if (!emailUser || !emailPass || !toEmail || !appBaseUrl || !leadTokenSecret) {
    return res.status(500).json({ error: "Server email configuration missing" });
  }

  const body = req.body || {};
  const payload = {
    nom: typeof body.nom === "string" ? body.nom.trim() : "",
    email: typeof body.email === "string" ? body.email.trim() : "",
    entreprise: typeof body.entreprise === "string" ? body.entreprise.trim() : "",
    typeProjet: typeof body.typeProjet === "string" ? body.typeProjet.trim() : "",
    budget: typeof body.budget === "string" ? body.budget.trim() : "",
    delai: typeof body.delai === "string" ? body.delai.trim() : "",
    description: typeof body.description === "string" ? body.description.trim() : ""
  };

  if (!payload.nom || !payload.email || !payload.typeProjet || !payload.budget || !payload.description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const leadToken = signLead(payload, leadTokenSecret);
  const replyPageUrl = `${appBaseUrl}/admin-reply.html?token=${encodeURIComponent(leadToken)}`;
  const acceptUrl = `${appBaseUrl}/api/respond?action=accept&token=${encodeURIComponent(leadToken)}`;
  const refuseUrl = `${appBaseUrl}/api/respond?action=refuse&token=${encodeURIComponent(leadToken)}`;

  const subject = `Nouveau projet - ${payload.nom}`;
  const text = [
    "Nouvelle demande depuis le portfolio",
    "",
    `Nom: ${payload.nom}`,
    `Email: ${payload.email}`,
    `Entreprise: ${payload.entreprise || "Non renseignee"}`,
    `Type de projet: ${payload.typeProjet}`,
    `Budget: ${payload.budget}`,
    `Delai souhaite: ${payload.delai || "Non precise"}`,
    "",
    "Description:",
    payload.description,
    "",
    "Actions:",
    `Accepter: ${acceptUrl}`,
    `Refuser: ${refuseUrl}`,
    `Reponse personnalisee (questions/prix/message): ${replyPageUrl}`
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6;max-width:760px;margin:0 auto;padding:24px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;">
      <h2 style="margin:0 0 8px;font-size:24px;">Nouvelle demande client</h2>
      <p style="margin:0 0 18px;color:#334155;">Une nouvelle demande a ete envoyee depuis ton portfolio.</p>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
        <tbody>
          <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><strong>Nom</strong></td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${payload.nom}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><strong>Email</strong></td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${payload.email}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><strong>Entreprise</strong></td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${payload.entreprise || "Non renseignee"}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><strong>Type de projet</strong></td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${payload.typeProjet}</td></tr>
          <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><strong>Budget</strong></td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${payload.budget}</td></tr>
          <tr><td style="padding:10px;"><strong>Delai</strong></td><td style="padding:10px;">${payload.delai || "Non precise"}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px;padding:12px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
        <strong>Description</strong>
        <p style="margin:8px 0 0;white-space:pre-wrap;">${payload.description}</p>
      </div>
      <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">
        <a href="${acceptUrl}" style="text-decoration:none;background:#16a34a;color:#ffffff;padding:10px 14px;border-radius:8px;font-weight:700;">Accepter</a>
        <a href="${refuseUrl}" style="text-decoration:none;background:#dc2626;color:#ffffff;padding:10px 14px;border-radius:8px;font-weight:700;">Refuser</a>
        <a href="${replyPageUrl}" style="text-decoration:none;background:#0f172a;color:#ffffff;padding:10px 14px;border-radius:8px;font-weight:700;">Reponse personnalisee</a>
      </div>
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
      to: toEmail,
      replyTo: payload.email,
      subject,
      text,
      html
    });

    return res.status(200).json({ ok: true });
  } catch (_error) {
    return res.status(500).json({ error: "Unexpected server error" });
  }
};
