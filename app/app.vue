<script setup lang="js">
const {
  condition,
  level,
  link
} = useRipconLevels()

const { refreshConfig } = useConfig()



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

const classIdInterval = ref(null)

watch(condition, (val) => {
  if(val === 1) {
    classIdInterval.value = setInterval(incrementClassId, 100)
  }
  else {
    if (classIdInterval.value) {
      clearInterval(classIdInterval.value)
    }
  }
}, { immediate: true })

onWatcherCleanup(() => {
  if (classIdInterval.value) {
    clearInterval(classIdInterval.value)
  }
})

const currentClass = computed(() => {
  if(condition.value === 1) {
    return classes.value[classId.value]
  }
  return classes.value[condition.value]
})

const runtimeConfig = useRuntimeConfig()

onMounted(async () => {
  await refreshConfig()
  const refreshInterval = setInterval(refreshConfig, +runtimeConfig.public.refreshInterval)
  onBeforeUnmount(() => clearInterval(refreshInterval))
})
</script>

<template>
  <div
    class="hidden bg-blue-700 text-white text-black bg-emerald-500 bg-yellow-300 bg-red-600"
  ></div>
  <div
    v-if="condition !== null && condition !== undefined"
    :class="[
      'flex justify-center items-center h-screen w-screen px-2',
      ...currentClass,
    ]"
  >
    <div class="flex flex-col items-center">
      <h1
        class="text-7xl sm:text-9xl md:text-[180px] text-center font-bold mb-2"
      >
        RIPCON {{ condition }}
      </h1>
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
