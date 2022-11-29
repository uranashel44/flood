import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function getFloodData() {
  return apiClient.get(ApiConfig.FLOOD);
}
