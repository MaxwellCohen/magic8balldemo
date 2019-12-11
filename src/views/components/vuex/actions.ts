import { ActionTree } from 'vuex'
import { CommonState, answer } from './types'

export const actions: ActionTree<CommonState, any> = {
    getAnwser({state}): answer {
        const ansList = state.answers;
        const answer = ansList[Math.floor(Math.random() * ansList.length)];
        return answer;
      },
    getAllAnswers({state}): answer[] {
      return state.answers;
    }
}