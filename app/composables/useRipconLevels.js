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

  const condition = ref(5);

  const level = computed(() =>
    levels.value.find((l) => l.id === condition.value)
  );

  const link = computed(() => ({
    url: "https://www.npr.org/2026/01/13/nx-s1-5413219/scott-adams-dilbert-dies",
    text: "Scott Adams, the controversial cartoonist behind 'Dilbert', dies at 68",
  }));

  return {
    levels,
    condition,
    link,
    level,
  };
};
