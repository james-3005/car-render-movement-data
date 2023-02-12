// trajections thoi diem t=1 co vi tri la point 11

const { cloneObject } = require("./utilities");

// noisy trajection để tạo các trajection rác (k tạo frequent)
const trajections1 = new Array(12).fill(null);

trajections1[4] = 30;
trajections1[5] = 37;
trajections1[6] = 45;
trajections1[7] = 51;
trajections1[8] = 60;

const noisyTrajection1_1 = new Array(12).fill(null);
noisyTrajection1_1[4] = 30;
noisyTrajection1_1[5] = 37;

const noisyTrajection1_2 = new Array(12).fill(null);
// trajections1[7] = 51;
noisyTrajection1_2[8] = 60;

const trajections2 = new Array(12).fill(null);
trajections2[4] = 30;
trajections2[5] = 37;
trajections2[6] = 45;
trajections2[7] = 51;
trajections2[8] = 60;

const noisyTrajection2_1 = new Array(12).fill(null);
// trajections1[4] = 30;
noisyTrajection2_1[5] = 37;

const noisyTrajection2_2 = new Array(12).fill(null);
// trajections1[7] = 51;
noisyTrajection2_2[7] = 51;

const trajections3 = new Array(12).fill(null);
trajections3[4] = 28;
trajections3[5] = 36;
trajections3[6] = 44;
trajections3[7] = 50;

const noisyTrajection3_1 = new Array(12).fill(null);
noisyTrajection3_1[5] = 36;
noisyTrajection3_1[6] = 44;

const trajections4 = new Array(12).fill(null);
trajections4[4] = 28;
trajections4[5] = 36;
trajections4[6] = 43;
trajections4[7] = 50;
trajections4[8] = 55;

const noisyTrajection4_1 = new Array(12).fill(null);
noisyTrajection4_1[5] = 36;

const trajections5 = new Array(12).fill(null);
trajections5[5] = 36;
trajections5[6] = 43;
trajections5[7] = 50;
trajections5[8] = 55;

const noisyTrajection5_1 = new Array(12).fill(null);
noisyTrajection5_1[6] = 43;

module.exports = {
  allTrajections: [
    {
      trajection: trajections1,
      noisyTranjection: [noisyTrajection1_1, noisyTrajection1_2],
      userId: 1,
    },
    {
      trajection: trajections2,
      noisyTranjection: [noisyTrajection2_1, noisyTrajection2_2],
      userId: 2,
    },
    {
      trajection: trajections3,
      noisyTranjection: [noisyTrajection3_1],
      userId: 3,
    },
    {
      trajection: trajections4,
      noisyTranjection: [noisyTrajection4_1],
      userId: 4,
    },
    {
      trajection: trajections5,
      noisyTranjection: [noisyTrajection5_1, noisyTrajection4_1],
      userId: 5,
    },
  ],
};
