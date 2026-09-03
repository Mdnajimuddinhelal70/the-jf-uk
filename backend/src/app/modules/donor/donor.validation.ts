import { z } from "zod";

export const createDonorValidation = z.object({
  name: z.string().min(1, "Donor name is required").trim(),

  image: z.string().min(1, "Donor image is required").trim(),

  shortBio: z.string().trim().optional(),

  location: z.string().trim().optional(),

  country: z.string().trim().optional(),

  donorType: z.enum(["LIFETIME", "REGULAR"]).optional().default("LIFETIME"),

  isFeatured: z.boolean().optional().default(false),

  isActive: z.boolean().optional().default(true),
});

export const updateDonorValidation = z.object({
  name: z.string().min(1, "Donor name cannot be empty").trim().optional(),

  image: z.string().min(1, "Donor image cannot be empty").trim().optional(),

  shortBio: z.string().trim().optional(),

  location: z.string().trim().optional(),

  country: z.string().trim().optional(),

  donorType: z.enum(["LIFETIME", "REGULAR"]).optional(),

  isFeatured: z.boolean().optional(),

  isActive: z.boolean().optional(),
});
