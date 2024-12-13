export const getLimitedElements = <T>(arr: T[], limit: number) => {
  return arr.slice(0, limit);
};
