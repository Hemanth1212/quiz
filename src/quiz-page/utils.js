export const getScore = (wordList, userRes) => {
  let score = 0;
  userRes.forEach((e) => {
    let isCorrect = wordList.find(
      (x) => x.word === e.word.toLowerCase() && x.pos === e.option
    );
    score = isCorrect ? score + 10 : score;
  });
  return score;
};

export const getWord = (wordList) => {
  let index = Math.floor(Math.random() * 18) + 1;
  if (wordList.length) {
    return wordList[index].word.toUpperCase();
  }
};
