import globalConfig from "../config/globalConfig";
import axios from "axios";
import { promisify } from "util";
import { client } from "../config/redis";

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

export const getCommunes = async (nombre) => {
  const cacheKey = `farmacias-comuna-${nombre.toLowerCase()}`;

  try {
    const replyCommunes = await GET_ASYNC(cacheKey);
    /**RESPONSE FROM CACHE */
    if (replyCommunes) {
      return JSON.parse(replyCommunes);
    }

    const { data } = await axios.get(`${globalConfig.URL_SERVICE}`);
    const farmacias = filterData(data, nombre);

    if (farmacias.length > 0) {
      await SET_ASYNC(
        cacheKey,
        JSON.stringify(farmacias),
        "EX",
        globalConfig.REDIS_TIME
      );
    }

    return farmacias;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const filterData = (data, nombre) => {
  const farmacias = data
    .filter((farmacia) => {
      return farmacia.comuna_nombre
        .toLowerCase()
        .includes(nombre.toLowerCase());
    })
    .map((farmacia) => {
      return {
        local_nombre: farmacia.local_nombre,
        local_direccion: farmacia.local_direccion,
        local_telefono: farmacia.local_telefono,
        local_lat: farmacia.local_lat,
        local_lng: farmacia.local_lng,
      };
    });
  return farmacias;
};
