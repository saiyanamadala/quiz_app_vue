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
          class="question-count"
        />
      </div>
    </div>
    <div class="question">
      <FilterDropdown
        label="Select difficulty level"
        :options="difficultyLevel"
        @selected-option="selectedDifficulty = $event"
      />
    </div>
    <div class="question">
      <FilterDropdown
        label="Select technology"
        :options="technology"
        @selected-option="selectedTechnology = $event"
      />
    </div>
    <div class="question">
      <div><button @click="onClick">Start Quiz</button></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FilterDropdown from './FilterDropdown.vue'

const limit = ref(1)
const selectedDifficulty = ref('')
const selectedTechnology = ref('')
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
const onClick = () => {
  console.log(selectedDifficulty.value)
}
</script>

<style lang="scss">
.question-container {
  background-color: var(--form-background);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;

  .question {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .question-count,
  button {
    max-width: 150px;
    min-width: 150px;
    height: 20px;
  }

  .filter-dropdown {
    max-width: 150px;
    min-width: 150px;
    height: 20px;
  }

  button {
    background-color: rgb(107, 115, 112);
    color: whitesmoke;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: black;
    }
  }
}
</style>
