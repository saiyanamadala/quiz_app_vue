<template>
  <div>
    <label for="dropdown">{{ props.label }}</label>
  </div>
  <div>
    <select id="dropdown" v-model="selectedOption" @change="onClick" class="filter-dropdown">
      <option v-for="option in props.options" :key="option.id" :value="option.name">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

interface Options {
  id: number
  name: string
}

interface Props {
  label: string
  options: Options[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'selected-option', value: string): void
}>()

const selectedOption = ref(props.options[0].name)

const onClick = () => {
  console.log(selectedOption.value)
  emit('selected-option', selectedOption.value)
}
</script>
