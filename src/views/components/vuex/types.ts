export interface CommonState {
    answers: answer[]
  }

export interface answer {
  text: string;
  answerType:AnswerType;
}

export enum AnswerType {
  AFFIRMATIVE = 'affirmative',
  NON_COMMITTAL = 'non-committal',
  NEGATIVE = 'negative',
}
  