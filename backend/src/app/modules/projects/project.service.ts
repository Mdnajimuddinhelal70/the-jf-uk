import Project from "./project.model";

const createProject = async (payload: {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  status?: "UPCOMING" | "ONGOING" | "COMPLETED";
  isFeatured?: boolean;
  isActive?: boolean;
}) => {
  const existingProject = await Project.findOne({
    slug: payload.slug,
  });

  if (existingProject) {
    throw new Error("Project with this slug already exists");
  }

  const project = await Project.create(payload);

  return project;
};

const getAllProjects = async () => {
  const projects = await Project.find({
    isActive: true,
  }).sort({ createdAt: -1 });

  return projects;
};

const getProjectById = async (id: string) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

const updateProject = async (
  id: string,
  payload: Partial<{
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    location: string;
    startDate: Date;
    endDate: Date;
    status: "UPCOMING" | "ONGOING" | "COMPLETED";
    isFeatured: boolean;
    isActive: boolean;
  }>,
) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (payload.slug && payload.slug !== project.slug) {
    const existingProject = await Project.findOne({
      slug: payload.slug,
      _id: { $ne: id },
    });

    if (existingProject) {
      throw new Error("Project with this slug already exists");
    }
  }

  const updatedProject = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updatedProject;
};

const deleteProject = async (id: string) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  await Project.findByIdAndDelete(id);

  return null;
};

export const projectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
