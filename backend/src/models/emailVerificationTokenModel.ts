import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface EmailVerificationTokenDocument extends mongoose.Document {
  owner: mongoose.Schema.Types.ObjectId;
  token: string;
  expiresAt: Date;
  compareToken(candidateToken: string): Promise<boolean>;
}

const EmailVerificationTokenSchema =
  new mongoose.Schema<EmailVerificationTokenDocument>(
    {
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      expiresAt: {
        type: Date,
        default: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
      },
    },
    {
      timestamps: true,
    }
  );

// Encrypt token using bcrypt
EmailVerificationTokenSchema.pre("save", async function (next) {
  let _token = this as EmailVerificationTokenDocument;

  if (!_token.isModified("token")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(_token.token, salt);

  _token.token = hash;
  next();
});

// Compare token
EmailVerificationTokenSchema.methods.compareToken = async function (
  token: string
) {
  let _token = this as EmailVerificationTokenDocument;

  return bcrypt.compare(token, _token.token).catch((e) => false);
};

const EmailVerificationTokenModel =
  mongoose.model<EmailVerificationTokenDocument>(
    "EmailVerificationToken",
    EmailVerificationTokenSchema
  );

export default EmailVerificationTokenModel;
