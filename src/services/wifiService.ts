import { Wifi, User } from "@prisma/client";
import { decrypt, encrypt } from "../utils/cripto.js";
import { failNotFound } from "../utils/errorUtils.js";
import { getAll , createWifiFunction ,deleteWifiFunction , getWifiFunction} from "../repositories/wifiRepository.js";


export type    CreateWifiSchema = Omit<Wifi, "id">;
export type CreateUserSchema= Omit <User , "id">


export async function getAllWifi(userId: number) {
  const wifi = await getAll(userId);
  return wifi.map(wifi => {
    return {...wifi, password: decrypt(wifi.password) }
  });
}

export async function getOneWifiFunction(userId:number, wifiId: number) {
  const wifi = await getWifiFunction(userId, wifiId);
  if(!wifi) throw failNotFound("Network doesn't exist");

  return {
    ...wifi,
    password: decrypt(wifi.password)
  }
}

export async function createWifiService(user: User, network: CreateWifiSchema) {
  console.log("cheguei")
  const networkInfos = {...network, password: encrypt(network.password)};
  await  createWifiFunction(user.id, networkInfos);
}

export async function deleteWifiService(user: User, networkId: number) {
  await getWifiFunction(user.id, networkId);
  await deleteWifiFunction(networkId);
}

