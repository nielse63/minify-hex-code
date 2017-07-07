
export function isString(object) {
  return typeof object === 'string';
}

export default function minifyHexCode(string) {
  if (!isString(string)) {
    throw new TypeError('Invalid hex code string provided');
  }

  const hex = string.replace(/#/g, '');
  const regexp = /^([a-f0-9])\1([a-f0-9])\2([a-f0-9])\3$/gi;
  const res = regexp.exec(hex);
  let color = hex;
  let r;
  let g;
  let b;
  if (res) {
    [color, r, g, b] = res;
    color = (r + g + b).toLowerCase();
  }
  return `#${color}`;
}
