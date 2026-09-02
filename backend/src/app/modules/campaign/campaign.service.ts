import Campaign from "./campaign.model";

const createCampaign = async (payload: {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  targetAmount: number;
  currency?: "GBP";
  startDate: Date;
  endDate: Date;
  status?: "UPCOMING" | "ONGOING" | "COMPLETED";
  isFeatured?: boolean;
  isActive?: boolean;
}) => {
  const existingCampaign = await Campaign.findOne({
    slug: payload.slug,
  });

  if (existingCampaign) {
    throw new Error("Campaign with this slug already exists");
  }

  const campaign = await Campaign.create({
    ...payload,
    raisedAmount: 0,
  });

  return campaign;
};

const getAllCampaigns = async () => {
  const campaigns = await Campaign.find({
    isActive: true,
  }).sort({ createdAt: -1 });

  return campaigns;
};

const getCampaignById = async (id: string) => {
  const campaign = await Campaign.findById(id);

  if (!campaign) {
    throw new Error("Campaign not found");
  }

  return campaign;
};

const updateCampaign = async (
  id: string,
  payload: Partial<{
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    image: string;
    targetAmount: number;
    currency: "GBP";
    startDate: Date;
    endDate: Date;
    status: "UPCOMING" | "ONGOING" | "COMPLETED";
    isFeatured: boolean;
    isActive: boolean;
  }>,
) => {
  const campaign = await Campaign.findById(id);

  if (!campaign) {
    throw new Error("Campaign not found");
  }

  if (payload.slug && payload.slug !== campaign.slug) {
    const existingCampaign = await Campaign.findOne({
      slug: payload.slug,
      _id: { $ne: id },
    });

    if (existingCampaign) {
      throw new Error("Campaign with this slug already exists");
    }
  }

  const updatedCampaign = await Campaign.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updatedCampaign;
};

const deleteCampaign = async (id: string) => {
  const campaign = await Campaign.findById(id);

  if (!campaign) {
    throw new Error("Campaign not found");
  }

  await Campaign.findByIdAndDelete(id);

  return null;
};

export const campaignService = {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};
