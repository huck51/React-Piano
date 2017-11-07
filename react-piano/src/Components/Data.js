/******************************************************************
*
*******************************************************************/

const charr =[49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69,
  82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  186, 222, 13, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 32];

const soundPath = ['./piano/piano-ff-015.wav', './piano/piano-ff-016.wav',
    './piano/piano-ff-017.wav', './piano/piano-ff-018.wav',
    './piano/piano-ff-019.wav', './piano/piano-ff-020.wav',
    './piano/piano-ff-021.wav', './piano/piano-ff-022.wav',
    './piano/piano-ff-023.wav', './piano/piano-ff-024.wav',
    './piano/piano-ff-025.wav', './piano/piano-ff-026.wav',
    './piano/piano-ff-027.wav', './piano/piano-ff-028.wav',
    './piano/piano-ff-029.wav', './piano/piano-ff-030.wav',
    './piano/piano-ff-031.wav', './piano/piano-ff-032.wav',
    './piano/piano-ff-033.wav', './piano/piano-ff-034.wav',
    './piano/piano-ff-035.wav', './piano/piano-ff-036.wav',
    './piano/piano-ff-037.wav', './piano/piano-ff-038.wav',
    './piano/piano-ff-039.wav', './piano/piano-ff-040.wav',
    './piano/piano-ff-041.wav', './piano/piano-ff-042.wav',
    './piano/piano-ff-043.wav', './piano/piano-ff-044.wav',
    './piano/piano-ff-045.wav', './piano/piano-ff-046.wav',
    './piano/piano-ff-047.wav', './piano/piano-ff-048.wav',
    './piano/piano-ff-049.wav', './piano/piano-ff-050.wav',
    './piano/piano-ff-051.wav', './piano/piano-ff-052.wav',
    './piano/piano-ff-053.wav', './piano/piano-ff-054.wav',
    './piano/piano-ff-055.wav', './piano/piano-ff-056.wav',
    './piano/piano-ff-057.wav', './piano/piano-ff-058.wav',
    './piano/piano-ff-059.wav', './piano/piano-ff-060.wav',
    './piano/piano-ff-061.wav', './piano/piano-ff-062.wav'];

const ebony = [50, 52, 55, 57, 189, 87, 82, 85, 79, 219, 83, 70, 74, 76, 222, 88, 86, 77, 190, 16];

const board = [true, false, true, false, true, true, false, true, false, true, false,
  true, true, false, true, false, true, true, false, true, false, true, false, true,
  true, false, true, false, true, true, false, true, false, true, false, true, true,
  false, true, false, true, true, false, true, false, true, false, true];
/*
const board = [true, true, false, true, true, true, false, true, true, false, true,
  true, true, false, true, true, false, true, true, true, false, true, true, false,
  true, true, true, false];
  */
  const Data = {
    charr: charr,
    soundPath: soundPath,
    ebony: ebony,
    board: board
  };

  module.exports = Data;
