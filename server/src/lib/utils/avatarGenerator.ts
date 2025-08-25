// Array of avatar image filenames
export const avatarFilenames = [
  "blue-neutral.png",
  "glassguy-happy.png",
  "green-happy.png",
  "hatguy-yellow-happy.png",
  "purpl-neutral.png",
  "purple-happy.png",
  "robo-blue.png",
  "robo-cyan.png",
  "robo-green.png",
  "robo-red-neutral.png",
  "robo-sky.png",
];

// Function to randomly select an avatar filename
export function getRandomAvatarFilename() {
  const idx = Math.floor(Math.random() * avatarFilenames.length);
  return `/images/avatars/${avatarFilenames[idx]}`;
}
