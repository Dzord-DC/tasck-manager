<template>
  <div class="container">
    <section class="title-box">
    <h1>Список задачь</h1>
    </section>
    <section>
    <button 
      class="v-btn v1"
      @click="goTo('home')"
    >
      На главную
    </button>
  </section>
  <section class="boby-box">
    <button 
      class="v-btn v2"
      @click="showNew = !showNew"
    >
      Создать задачу
    </button>
    <div v-if="showNew">
      <input 
        v-model="tasck.name"
        type="text" 
        name="name" 
        id="name" 
        placeholder="Название"
        class="input input-text"
        >
      <input 
        v-model="tasck.value"
        type="number"
        placeholder="Оценка"
        class="input input-number"
      >
      <select 
        v-model="tasck.priority" 
        name="priority" 
        id="priority-select"
        class="input"
      >
          <option 
            v-for="item in selectAr" 
            :key="item.value" 
            :value="item.value"
            >
              {{ item.name }}
          </option>
      </select>
        <button 
            class="v-btn v3"
            @click="seve"
          >
            Создать
      </button>
    </div>
  </section>
  <section v-if="tascks.length" >
    <h1>Активные задач:</h1>
    <div>
      <div v-for="(item, i) in tascks" :key="`tasck-${i}`" class="flex">
        <div class="text-box">{{ i }}</div>
        <input  v-if="editID == i"
        v-model="edit.name"
        type="text" 
        name="name" 
        id="name" 
        placeholder="Название"
        class="input input-text"
        :disabled="editID != i"
        >
        <div v-else class="text-box">
          {{ item.name }}
        </div>
      <input v-if="editID == i"
        v-model="edit.value"
        type="number"
        placeholder="Оценка"
        class="input input-number"
        :disabled="editID != i"
      >
      <div v-else class="text-box">
          {{ item.value }}
        </div>
      <div v-if="!edit && !editID"
        class="text-box"
        >{{ item.priority }}
        </div>
      <select 
        v-if="editID == i"
        v-model="edit.priority" 
        name="priority" 
        id="priority-select"
        class="input"
      >    <option 
            v-for="item in selectAr" 
            :key="item.value" 
            :value="item.value"
            >
              {{ item.name }}
          </option>
      </select>
      <button v-if="editID != i && !edit" @click="setEditId(item,i)" class="v-btn v3">Изменить</button>
      <button 
          v-if="editID != i && !edit"
            class="v-btn v3 red"
            @click="deleteTasck(i)"
          >
            Удалить
      </button>
      <button v-if="editID == i"
            class="v-btn v3"
            @click="conformEdit(i, edit)"
          >
            Сохранить
      </button>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import helper from "../js/helper.js";
import { mapActions, mapGetters } from 'vuex'
export default {
  name:"tasck-list",
  mixins: [helper],
  data() {
    return {
      showNew: false,
      tasck: {
        name: null,
        value: null,
        priority: "average",
      },
      edit: false,
      editID: null,
      selectAr: [
        {
          value: "low",
          name: "Низкий"
        },
        {
          value: "average",
          name: "Средний"
        },
        {
          value: "high",
          name: "Высокий"
        },
    ]
    }
  },
  computed: {
    tascks() {
      return this.getTascks();
    }
  }, 
  mounted() {
    this.loadTascks()
  },  
  methods: {
      ...mapGetters([
          "getTascks",
      ]),
      ...mapActions([
        "saveTasck",
        "deleteTasck",
        "editTasck",
        "loadTascks",
      ]),
    seve()  {
      if(this.tasck.name && this.tasck.value) {
        this.saveTasck(this.tasck);
        this.clearCreated();
      }
    },
    setEditId(item, i){
      this.edit = item;
      this.editID = i;
    },
    conformEdit(i, item) {
      this.editTasck({i:i, payload:item});
      this.edit = null;
      this.editID = null;
    },
    clearCreated() {
      this.tasck = {
        name: null,
        value: null,
        priority: "average",
      };
      this.showNew = false;
    }
  }
}
</script>

<style  scoped>
.container{
  max-width: 1034px;
  margin: auto;
}
.header-page{
  margin: 36px auto;
}
.card-box{
  
    display: flex;
    flex-wrap: wrap;
}

.cart-work {
  margin: 16px;
  display: flex;
  width: 300px;
  height: 400px;
  position: relative;
  border: 1px solid #000;
  flex-direction: column;
  justify-content: space-around;
  color: #000;
  text-decoration: none;
  transition: 00.5s;
}
.cart-work:hover{
  box-shadow: 0px 0px 15px #000;
}
.work-box{
  
}
.work-img{
  height: 60%;
    width: 100%;
    object-fit: cover;        
}
@media screen and (max-width: 800px) {
  .card-box{
    justify-content: center;
  }
}
</style>