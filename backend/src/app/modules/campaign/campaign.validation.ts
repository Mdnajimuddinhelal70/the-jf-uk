import { z } from "zod";

export const createCampaignValidation = z.object({
  title: z.string().min(1, "Campaign title is required").trim(),

  slug: z.string().min(1, "Campaign slug is required").trim().toLowerCase(),

  shortDescription: z.string().min(1, "Short description is required").trim(),

  description: z.string().min(1, "Campaign description is required").trim(),

  image: z.string().min(1, "Campaign image is required").trim(),

  targetAmount: z.number().nonnegative("Target amount cannot be negative"),

  currency: z.enum(["GBP"]).optional().default("GBP"),

  startDate: z.coerce.date(),

  endDate: z.coerce.date(),

  status: z
    .enum(["UPCOMING", "ONGOING", "COMPLETED"])
    .optional()
    .default("UPCOMING"),

  isFeatured: z.boolean().optional().default(false),

  isActive: z.boolean().optional().default(true),
});

export const updateCampaignValidation = z.object({
  title: z.string().min(1, "Campaign title cannot be empty").trim().optional(),

  slug: z
    .string()
    .min(1, "Campaign slug cannot be empty")
    .trim()
    .toLowerCase()
    .optional(),

  shortDescription: z
    .string()
    .min(1, "Short description cannot be empty")
    .trim()
    .optional(),

  description: z
    .string()
    .min(1, "Campaign description cannot be empty")
    .trim()
    .optional(),

  image: z.string().min(1, "Campaign image cannot be empty").trim().optional(),

  targetAmount: z
    .number()
    .nonnegative("Target amount cannot be negative")
    .optional(),

  currency: z.enum(["GBP"]).optional(),

  startDate: z.coerce.date().optional(),

  endDate: z.coerce.date().optional(),

  status: z.enum(["UPCOMING", "ONGOING", "COMPLETED"]).optional(),

  isFeatured: z.boolean().optional(),

  isActive: z.boolean().optional(),
});
