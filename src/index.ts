/**
 * Generate a list of potemtial email address based on the provided
 * domain and user's first/last name.
 */

export default (
  domain: string,
  firstName: string,
  lastName: string
): { pattern: string; value: string }[] => {
  const first = firstName.toLowerCase();
  const last = lastName.toLowerCase();
  const f = first.charAt(0);
  const l = last.charAt(0);
  return [
    { pattern: "firstlast", value: `${first}${last}@${domain}` },
    { pattern: "first.last", value: `${first}.${last}@${domain}` },
    { pattern: "flast", value: `${f}${last}@${domain}` },
    { pattern: "f.last", value: `${f}.${last}@${domain}` },
    { pattern: "first", value: `${first}@${domain}` },
    { pattern: "first_last", value: `${first}_${last}@${domain}` },
    { pattern: "last.first", value: `${last}.${first}@${domain}` },
    { pattern: "lastfirst", value: `${last}${first}@${domain}` },
    { pattern: "firstl", value: `${first}${l}@${domain}` },
    { pattern: "first.l", value: `${first}.${l}@${domain}` },
    { pattern: "lastf", value: `${last}${f}@${domain}` },
    { pattern: "last.f", value: `${last}.${f}@${domain}` },
    { pattern: "last", value: `${last}@${domain}` },
    { pattern: "f.l", value: `${f}.${l}@${domain}` },
    { pattern: "f_last", value: `${f}_${last}@${domain}` },
    { pattern: "first_l", value: `${first}_${l}@${domain}` },
    { pattern: "f_l", value: `${f}_${l}@${domain}` },
    { pattern: "last_first", value: `${last}_${first}@${domain}` },
    { pattern: "last_f", value: `${last}_${f}@${domain}` },
    { pattern: "l_first", value: `${l}_${first}@${domain}` },
    { pattern: "lfirst", value: `${l}${first}@${domain}` },
    { pattern: "l.first", value: `${l}.${first}@${domain}` },
    { pattern: "lf", value: `${l}${f}@${domain}` },
    { pattern: "l.f", value: `${l}.${f}@${domain}` },
    { pattern: "first-last", value: `${first}-${last}@${domain}` },
    { pattern: "f-last", value: `${f}-${last}@${domain}` },
    { pattern: "first-l", value: `${first}-${l}@${domain}` },
    { pattern: "f-l", value: `${f}-${l}@${domain}` },
    { pattern: "last-first", value: `${last}-${first}@${domain}` },
    { pattern: "last-f", value: `${last}-${f}@${domain}` },
    { pattern: "l-first", value: `${l}-${first}@${domain}` },
    { pattern: "l-f", value: `${l}-${f}@${domain}` },
    { pattern: "l_f", value: `${l}_${f}@${domain}` },
  ];
};
