<template>
  <div class="question-container">
    <div class="question">
      <div><label for="questionCount">Select number of questions</label></div>
      <div>
        <input
          type="number"
          min="1"
          max="20"
          step="1"
          value="5"
          id="questionCount"
          v-model="limit"
        />
      </div>
    </div>
    <div class="question">
      <FilterDropdown label="Select difficulty level" :options="difficultyLevel" />
    </div>
    <div class="question">
      <FilterDropdown label="Select technology" :options="technology" />
    </div>
    <div class="question">
      <FilterDropdown label="Select tags" :options="tags" />
    </div>
    <div>
      <ul>
        <li v-for="tag in tags" :key="tag.id">
          <input type="checkbox" v-model="checkedTags" @click="onClick" />
          <span>{{ tag.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FilterDropdown from './FilterDropdown.vue'

const checkedTags = ref('')
const limit = ref(1)
const difficultyLevel = reactive([
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'Hard' }
])
const technology = reactive([
  {
    id: 1,
    name: 'Linux'
  },
  {
    id: 2,
    name: 'bash'
  },
  {
    id: 3,
    name: 'uncategorized'
  }
])
const tags = reactive([
  {
    id: 1,
    name: 'Linux'
  },
  {
    id: 2,
    name: 'BASH'
  },
  {
    id: 3,
    name: 'PHP'
  }
])

const onClick = () => {
  console.log(checkedTags)
}
</script>

<style lang="scss">
.question-container {
  display: flex;
  flex-direction: column;

  .question {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
