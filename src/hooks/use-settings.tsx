import { $api_key, setApiKey } from "@/store/settings";
import { $host_url, setHostUrl } from "@/store/settings";
import { useStore } from "@nanostores/react";

export const useSettings = () => {
  const apiKey = useStore($api_key);
  const hostUrl = useStore($host_url);

  return {
    apiKey,
    setApiKey,
    hostUrl,
    setHostUrl,
  };
};
