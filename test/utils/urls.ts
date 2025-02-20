import { env } from "./env";

export const urls = {
    PET: `${env.apiBaseUrl}/v2/pet`,
    PET_FIND_BY_STATUS: `${env.apiBaseUrl}/v2/pet/findByStatus`,
};