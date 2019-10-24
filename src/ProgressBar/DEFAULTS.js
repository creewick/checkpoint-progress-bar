export const COLORS = [
  '#2c73d2',
  '#845ec2',
  '#d65db1',
  '#ff6f91',
  '#ff9671',
  '#ffc75f',
  '#f9f871',
  '#fefedf',
];

export const GRAY = '#cccccc';

export const getLineColor = (i) => COLORS[i % COLORS.length];

export const getPointColor = (parts, part) => {
    let sum = 0;
    let i = 0;
    while (i < parts.length && sum < part) sum += parts[i++];

    return sum < part
        ? GRAY
        : getLineColor(i-1);
};
