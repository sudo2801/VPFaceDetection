import { apiService } from "@services/base-api";
import { getErrorAndStatusFromErr } from "@utils/handle-error";

export interface checkpointsQuery {
  keys?: string;
}

const getCheckpoints = async (props: checkpointsQuery) => {
  const endPoint = ``;
 
  const response = await apiService
    .get({ url: endPoint })
    .catch((err: any) => getErrorAndStatusFromErr(err));
  return response;
};

export default {
  getCheckpoints,

};
