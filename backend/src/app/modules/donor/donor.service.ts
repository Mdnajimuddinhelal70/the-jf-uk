import Donor from "./donor.model";

const createDonor = async (payload: {
  name: string;
  image: string;
  shortBio?: string;
  location?: string;
  country?: string;
  donorType?: "LIFETIME" | "REGULAR";
  isFeatured?: boolean;
  isActive?: boolean;
}) => {
  const donor = await Donor.create(payload);

  return donor;
};

const getAllDonors = async () => {
  const donors = await Donor.find({
    isActive: true,
  }).sort({
    createdAt: -1,
  });

  return donors;
};

const getDonorById = async (id: string) => {
  const donor = await Donor.findById(id);

  if (!donor) {
    throw new Error("Donor not found");
  }

  return donor;
};

const updateDonor = async (
  id: string,
  payload: Partial<{
    name: string;
    image: string;
    shortBio: string;
    location: string;
    country: string;
    donorType: "LIFETIME" | "REGULAR";
    isFeatured: boolean;
    isActive: boolean;
  }>,
) => {
  const donor = await Donor.findById(id);

  if (!donor) {
    throw new Error("Donor not found");
  }

  const updatedDonor = await Donor.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updatedDonor;
};

const deleteDonor = async (id: string) => {
  const donor = await Donor.findById(id);

  if (!donor) {
    throw new Error("Donor not found");
  }

  await Donor.findByIdAndDelete(id);

  return null;
};

export const donorService = {
  createDonor,
  getAllDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
};
