<template>
    <div class="container">
        <input
                type="checkbox"
                id="checkbox"
                v-model="isChecked"
        > <span
            :class="{'is-checked': isChecked}"
    >{{ task }}</span>
        <button
            @click="deleteTask"
        >X</button>
    </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: '',
    index: null
  },
  data () {
    return {
      isChecked: false
    }
  },
  methods: {
    deleteTask () {
      this.$emit('deleteTask', this.task)
    }
  }

}
</script>

<style scoped>
.is-checked {
    background: red;
}
</style>
