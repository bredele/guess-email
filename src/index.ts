/**
 * Generate a list of potemtial email address based on the provided
 * domain and user's first/last name.
 */

export default (
  domain: string,
  firstName: string,
  lastName: string
): string[] => {
  const first = firstName.toLowerCase();
  const last = lastName.toLowerCase();
  const f = first.charAt(0);
  const l = last.charAt(0);
  return [
    `${first}${last}`,
    `${first}.${last}`,
    `${f}${last}`,
    `${f}.${last}`,
    first,
    `${first}_${last}`,
    `${last}.${first}`,
    `${last}${first}`,
    `${first}${l}`,
    `${first}.${l}`,
    `${last}${f}`,
    `${last}.${f}`,
    last,
    `${f}.${l}`,
    `${f}_${last}`,
    `${first}_${l}`,
    `${f}_${l}`,
    `${last}_${first}`,
    `${last}_${f}`,
    `${l}_${first}`,
    `${l}${first}`,
    `${l}.${first}`,
    `${l}${f}`,
    `${l}.${f}`,
    `${first}-${last}`,
    `${f}-${last}`,
    `${first}-${l}`,
    `${f}-${l}`,
    `${last}-${first}`,
    `${last}-${f}`,
    `${l}-${first}`,
    `${l}-${f}`,
    `${l}_${f}`,
  ].map((email) => `${email}@${domain}`);
};
