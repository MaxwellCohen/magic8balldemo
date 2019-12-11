import { answer, AnswerType } from './types';

export const DEFAULTANSWERS: answer[] = [
  {text: "It is certain", answerType:AnswerType.AFFIRMATIVE},
  {text: "It is decidedly so", answerType:AnswerType.AFFIRMATIVE},
  {text: "Without a doubt", answerType:AnswerType.AFFIRMATIVE},
  {text: "Yes definitely", answerType:AnswerType.AFFIRMATIVE},
  {text: "You may rely on it", answerType:AnswerType.AFFIRMATIVE},
  {text: "As I see it, yes", answerType:AnswerType.AFFIRMATIVE},
  {text: "Most likely", answerType:AnswerType.AFFIRMATIVE},
  {text: "Outlook good", answerType:AnswerType.AFFIRMATIVE},
  {text: "Yes", answerType:AnswerType.AFFIRMATIVE},
  {text: "Signs point to yes", answerType:AnswerType.AFFIRMATIVE},
  {text: "Reply hazy try again", answerType:AnswerType.NON_COMMITTAL},
  {text: "Ask again later", answerType:AnswerType.NON_COMMITTAL},
  {text: "Better not tell you now", answerType:AnswerType.NON_COMMITTAL},
  {text: "Cannot predict now", answerType:AnswerType.NON_COMMITTAL},
  {text: "Concentrate and ask again", answerType:AnswerType.NON_COMMITTAL},
  {text: "Don't count on it", answerType:AnswerType.NEGATIVE},
  {text: "My reply is no", answerType:AnswerType.NEGATIVE},
  {text: "My sources say no", answerType:AnswerType.NEGATIVE},
  {text: "Outlook not so good", answerType:AnswerType.NEGATIVE},
  {text: "Very doubtful", answerType:AnswerType.NEGATIVE},
];
