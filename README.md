# guess-email

Generate a list of potential email addresses from a user’s first and last name.

## Installation

```sh
npm install @bredele/guess-email
```

## Usage

```ts
import guess from "@bredele/guess-email";

quess("example.com", "john", "doe");
// => [{ pattern: 'firstlast', value: 'johndoe@example.com }, ...]
```

## Notes

Here are the most common patterns by prevalence in B2B datasets.

- first.last
- firstlast
- flast
- f.last
- first
- first_last
- last.first
- lastfirst
- firstl
- first.l
- lastf
- last.f
- last
- f.l
- f_last
- first_l
- f_l
- last_first
- last_f
- l_first
- lfirst
- l.first
- lf
- l.f
- first-last
- f-last
- first-l
- f-l
- last-first
- last-f
- l-first
- l-f
- l_f
