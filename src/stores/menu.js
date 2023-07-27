import { defineStore } from 'pinia'

const MenuState = () => ({
  stretched: false
})

export const useMenuStore = defineStore('menu', {
  state: MenuState,
  actions: {
    toggleMenu(){
      this.stretched = !this.stretched;
    }
  }
})
