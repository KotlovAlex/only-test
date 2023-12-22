export const getPointsOnCircle = (r: number, n: number) => {
  var angle = 360 / n;
  var res = [];
  for (let i = 0; i < n; i++) {
    res.push([r * Math.cos(angle * i * 0.0174533), r * Math.sin(angle * i * 0.0174533)]);
  }
  const el = res.pop();
  if (el) res.unshift(el);
  return res;
}

export const shiftNum = (num: number, shift: number, limit: number): number => {
  return (num - shift + limit) % limit
}