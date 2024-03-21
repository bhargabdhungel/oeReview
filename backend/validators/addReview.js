import z from "zod";

const validateReviewBody = (body) => {
  const registerSchema = z.object({
    details: z.string(),
    stars: z.number().int().min(1).max(5),
  });

  try {
    registerSchema.parse(body);
    return true;
  } catch (err) {
    return false;
  }
};

export default validateReviewBody;