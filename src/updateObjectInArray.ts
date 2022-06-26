export default function updateObjectInArray<T>(
  initialArray: Array<T>,
  key: keyof T,
  value: T[typeof key],
  patch: Partial<T>,
): Array<T> {
  const updated = initialArray.map((obj) => {
    if (obj[key] === value) {
      return Object.assign(obj, patch);
    }
    return obj;
  });
  return updated;
}
