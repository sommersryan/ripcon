import * as configcat from "@configcat/sdk";

export const useConfig = () => {
  const runtimeConfig = useRuntimeConfig();

  const client = configcat.getClient(
    runtimeConfig.public.configKey,
    configcat.PollingMode.ManualPoll
  );

  const config = useState("config", () => ({
    condition: null,
    linkUrl: null,
    linkText: null,
  }));

  const refreshConfig = async () => {
    try {
      await client.forceRefreshAsync();

      const data = (await client.getAllValuesAsync()).reduce(
        (acc, curr) => ({
          ...acc,
          [curr.settingKey]: curr.settingValue,
        }),
        {}
      );

      config.value = {
        condition: parseInt(data.ripcondition),
        linkUrl: data.riplinkurl,
        linkText: data.riplinktext,
      };
    } catch (error) {
      console.error(error);
    }
  };

  refreshConfig();

  return {
    config,
    refreshConfig,
  };
};
