import crypto from "crypto";

const generateVerificationToken = () => {
  const buffer = crypto.randomBytes(20);
  return buffer.toString("hex");
};

export default generateVerificationToken;
