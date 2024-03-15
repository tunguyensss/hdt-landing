export const get = <T, DefaultValue = undefined>(
  obj: Record<string, any>,
  path: string,
  defaultValue: DefaultValue = undefined as DefaultValue
): T | DefaultValue => {
  const travel = (regexp: RegExp): any =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
