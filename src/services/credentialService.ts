import { User, Credential } from "@prisma/client";
import { getAll ,getCredential  ,getCredentialByTitle , insertCredential, deleteCredentialRepo} from "../repositories/credentialRepository.js";
import { decrypt, encrypt } from "../utils/cripto.js";
import { failsConflict, failNotFound } from "../utils/errorUtils.js";

export type CreateCredentialSchema = Omit<Credential, "id">;

export async function getAllCredentials(userId: number) {
  const credentials = await getAll(userId);
  return credentials.map(credential => {
    const { password } = credential;
    return {...credential, password: decrypt(password)}
  })
}

export async function getJustOneCredential(userId: number, credentialId: number) {
    const credential = await getCredential(userId, credentialId);
    if(!credential) throw failNotFound("Credential doesn't exist")
  
    return {
      ...credential,
      password: decrypt(credential.password)
    }
  }

export async function createCredential(user: User, credential: CreateCredentialSchema) {
   
    const existingCredential = await getCredentialByTitle(user.id, credential.title);
    if(existingCredential) throw failsConflict("Title already in use");
  
    const credencialPassword = credential.password;
    const credentialInfos = {...credential, password: encrypt(credencialPassword)}
  
    await insertCredential(user.id, credentialInfos);
  }

export async function deleteCredential(user: User, credentialId: number) {
    await getCredential(user.id, credentialId);
    await deleteCredentialRepo(credentialId);
  }