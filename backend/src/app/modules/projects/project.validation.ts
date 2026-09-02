import { z } from "zod";

const createProjectValidation = z.object({
  title: z.string().min(1, "Project title is required").trim(),

  slug: z.string().min(1, "Project slug is required").trim().toLowerCase(),

  shortDescription: z.string().min(1, "Short description is required").trim(),

  description: z.string().min(1, "Project description is required").trim(),

  image: z.string().min(1, "Project image is required").trim(),

  location: z.string().trim().optional(),

  startDate: z.coerce.date(),

  endDate: z.coerce.date().optional(),

  status: z
    .enum(["UPCOMING", "ONGOING", "COMPLETED"])
    .optional()
    .default("ONGOING"),

  isFeatured: z.boolean().optional().default(false),

  isActive: z.boolean().optional().default(true),
});

const updateProjectValidation = z.object({
  title: z.string().min(1, "Project title cannot be empty").trim().optional(),

  slug: z
    .string()
    .min(1, "Project slug cannot be empty")
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
    .min(1, "Project description cannot be empty")
    .trim()
    .optional(),

  image: z.string().min(1, "Project image cannot be empty").trim().optional(),

  location: z.string().trim().optional(),

  startDate: z.coerce.date().optional(),

  endDate: z.coerce.date().optional(),

  status: z.enum(["UPCOMING", "ONGOING", "COMPLETED"]).optional(),

  isFeatured: z.boolean().optional(),

  isActive: z.boolean().optional(),
});

export { createProjectValidation, updateProjectValidation };
