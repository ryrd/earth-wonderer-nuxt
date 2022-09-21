import {defineStore} from 'pinia'

export const useModeStore = defineStore('mode', {
    state: () => ({
        darkMode : false
    }),
    actions:  {
        toggleMode() {
            this.darkMode === true ? this.darkMode = false : this.darkMode = true;
        }
    }
})