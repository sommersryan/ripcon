export const useRipconLevels = () => {
  const levels = computed(() => [
    {
      id: 5,
      description:
        "Inconsequential or washed up ghouls who had little to no impact on humanity beyond being annoying or historically evil",
      actions: "Post packwatch.gif on social media and in your group chats",
    },
    {
      id: 4,
      description:
        "Minor demons who had a reduced impact on humanity as a whole but who nevertheless made some corner of the world a notably worse place",
      actions: "Celebratory shots next time you happen to be out with friends",
    },
    {
      id: 3,
      description:
        "Major demons who substantially harmed humanity in significant, high-profile ways but who are past their peak in evildoing",
      actions:
        "Specifically coordinate celebartory gathering with friends at soonest convenience",
    },
    {
      id: 2,
      description:
        "Devils, without whom the world would be an instantly, measurably better place",
      actions: "Run, don't walk, to your closest loved one and embrace them",
    },
    {
      id: 1,
      description: "It Happened",
      actions: "🍾 🍾 🍾 🍾 🍾 🍾",
    },
  ]);

  const { config } = useConfig();

  const condition = computed(() => config.value.condition);

  const level = computed(() =>
    levels.value.find((l) => l.id === condition.value)
  );

  const link = computed(() => ({
    url: config.value.linkUrl,
    text: config.value.linkText,
  }));

  return {
    levels,
    condition,
    link,
    level,
  };
};
