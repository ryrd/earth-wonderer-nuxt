import {defineStore} from 'pinia'

const getModeStorage = () => {
    let darkModeStorage = false;

    if(process.client && localStorage.getItem('darkModeStorage')) {
        darkModeStorage = JSON.parse(localStorage.getItem('darkModeStorage'));
        if(darkModeStorage === true) window.document.documentElement.classList.add('dark');
    }

    return darkModeStorage;
}

export const useModeStore = defineStore('mode', {
    state: () => ({
        darkMode : getModeStorage(),
    }),
    actions:  {
        toggleMode() {
            this.darkMode === true ? this.darkMode = false : this.darkMode = true;
        }
    }
})