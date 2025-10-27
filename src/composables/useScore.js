import { ref } from 'vue'

const score = ref(0)

const useScore = () => {
    const changeScore = (value) => {
        ScreenOrientation.value += value
    }
    
    return {score, changeScore}
}

export default useScore