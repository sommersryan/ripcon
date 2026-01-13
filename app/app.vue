<script setup lang="js">
const {
  levels,
  condition,
  level,
  link
} = useRipconLevels()

const classes = computed(() => ({
  5: ['bg-blue-700', 'text-white'],
  4: ['bg-emerald-500', 'text-white'],
  3: ['bg-yellow-300', 'text-black'],
  2: ['bg-red-600', 'text-white']
}))

const classId = ref(2)

const incrementClassId = () => {
  if(classId.value === 5) {
    classId.value = 2
  }

  classId.value++
}

if(condition.value === 1) {
  setInterval(incrementClassId, 100)
}

const currentClass = computed(() => {
  if(condition.value === 1) {
    return classes.value[classId.value]
  }
  return classes.value[condition.value]
})
</script>

<template>
  <div
    class="hidden bg-blue-700 text-white text-black bg-emerald-500 bg-yellow-300 bg-red-600"
  ></div>
  <div
    :class="[
      'flex justify-center items-center h-screen w-screen px-2',
      ...currentClass,
    ]"
  >
    <div class="flex flex-col items-center">
      <h1 class="text-9xl text-center">RIPCON {{ condition }}</h1>
      <h2
        :class="['text-3xl text-center mb-8', { 'text-8xl': condition === 1 }]"
      >
        {{ level.actions }}
      </h2>
      <a class="text-center" :href="link.url" target="_blank">
        🔗 {{ link.text }}
      </a>
    </div>
    <div class="fixed bottom-5 right-5">
      <a
        target="_blank"
        href="https://bsky.app/profile/tgk.bsky.social/post/3mcd24dkq2k2b"
        >ORIGIN</a
      >
    </div>
  </div>
</template>
