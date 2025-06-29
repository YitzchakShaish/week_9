const temps = [];
export function addTemperature(temp) {
  temps.push(temp);
  console.log(temp)
  let sum = 0;
  temps.forEach(t => sum += t);
  console.log(sum)
  const avg = sum / temps.length;
  console.log(`Average temperature: ${avg}`);
}
