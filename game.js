//Score 64:
const frames = [
  [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
]
//
// Score 119:
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300:
// const frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]

function scoreFrame(frame, nextFrame) {
  let frameScore = 0
  if (frame[0] + frame[1] == 10 && frame[0] != 10) {
    frameScore = frame[0] + frame[1] + nextFrame[0]
  } else {
  frameScore = frame[0] + frame[1]
  } 
  return frameScore
}

function scoreGame(frames) {
  let total = 0
    frames.forEach((frame, i) => {
      const nextFrame = frames[i + 1]
      let frameScore = scoreFrame(frame, nextFrame)
      total = total + frameScore
    })
  return total
}


function scoreSpare(frame, nextFrame) {
  let score = frame[0] + frame[1];
  if (score == 10 && frame[0] != 10) {
    return score + nextFrame[0]
  }
}

function scoreStrike(frame, nextFrame) {
  const nextFrame = frames[i + 1]
    if ()
}