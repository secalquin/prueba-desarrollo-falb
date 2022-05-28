import { getCommunes } from "../services/communeService";

export const getCommuneById = async (req, resp) => {
  try {
    const { nombre } = req.params;
    const communesFetched = await getCommunes(nombre);

    if (!communesFetched) return resp.status(204).json();

    return resp.json(communesFetched);
  } catch (error) {
    throw new Error(error);
  }
};
