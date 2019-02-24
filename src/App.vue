<template>

  <div id="app">
      <h1> Task Manager</h1>
    <p><input
            type="text"
            placeholder="Write task"
            v-model="taskInput"
    ></p>
    <form>
      <button @click="AddTask">Add Task </button>
    </form>
    <div class="task-list">
      <task v-for="(task, index) in tasks"
              :index="index"
              :task="task"
              :key="index"
              @deleteTask="deleteTask"
      />
    <button v-if="tasks.length" @click="DeleteAll">Delete All</button>
    </div>
    <button @click="openModal">OPEN MODAL</button>
    <Modal :modalOpened="modalOpened" @close="closeModal"/>
    </div>
</template>

<script>
import Task from '@/Task'
import Modal from '@/Modal'
export default {
  name: 'App',
  components: {
    Modal, Task},
  data () {
    return {
      taskInput: '',
      tasks: [],
      modalOpened: false,
      loginInput: ''
    }
  },
  methods: {
    AddTask () {
      if (this.taskInput) {
        this.tasks.push(this.taskInput)
      }
      this.taskInput = ''
    },
    DeleteAll () {
      if (this.tasks) {
        this.tasks = []
      }
    },
    deleteTask (task) {
      this.tasks = this.tasks.filter(x => x !== task)
    },
    openModal () {
      this.modalOpened = true
    },
    closeModal () {
      this.modalOpened = false
    }

  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
