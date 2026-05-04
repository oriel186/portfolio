const crypto = require("crypto");

function toBase64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(input) {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padLength = (4 - (normalized.length % 4)) % 4;
  return Buffer.from(normalized + "=".repeat(padLength), "base64").toString("utf8");
}

function signLead(lead, secret) {
  const payloadJson = JSON.stringify({
    lead,
    iat: Date.now()
  });
  const payload = toBase64Url(payloadJson);
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function verifyLead(token, secret) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return null;
  }
  const [payload, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  if (signature !== expected) {
    return null;
  }
  try {
    const data = JSON.parse(fromBase64Url(payload));
    return data && data.lead ? data.lead : null;
  } catch (_error) {
    return null;
  }
}

module.exports = {
  signLead,
  verifyLead
};

