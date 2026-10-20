---
layout: page
title: Style guide excerpt
---

- ***Scenario:*** A working excerpt from the style guide developed for Cascade Mobility 
documentation, a fictional transportation technology company. Covers the rules writers
and engineers ask about most often.
- ***Audience:*** Technical writers, editors, and engineers contributing to product docs.
- ***Demonstrates:*** Standards ownership, editorial judgment, consistency, and accessibility.

---

## Voice and Tone

**1. Second person, present tense, active voice.**

> **Write:** The gateway logs each read.<br>
> **Not:** Each read will be logged by the gateway.

**2. Address the reader as "you."** Use "the user" only in reference material about
permissions or roles.

**3. One idea per sentence.** Split anything over about 25 words.

**4. Contractions are fine**, except in legal, contractual, or compliance text.

**5. Cut hedge words.** Delete *simply*, *just*, *obviously*, *easy*, and *user friendly*
unless they are doing real work.

## Capitalization and Headings

- Title case for every heading, including H2 and H3.
- Capitalize all words except articles (a, an, the), coordinating conjunctions (and, but,
  or, nor, for, so, yet), and prepositions of four letters or fewer (at, by, for, in, of,
  on, to, with).
- Always capitalize the first and last word in a heading, whatever part of speech it is.
- Capitalize the first word after a colon.
- Capitalize both parts of a hyphenated compound: Read-Only Mode.
- Capitalize a short preposition when it forms part of a phrasal verb: Set Up, Log In,
  Sign Off, Roll Out.
- Capitalize proper nouns wherever they fall.
- Headings are noun phrases, not questions, and take no end punctuation.
- Never skip a level. H1 to H2 to H3, in order.
- One H1 per page.
- Applies to table column headers.
- Inline labels remain sentence case.

> **Write:** Configuring the Reader<br>
> **Not:** Configuring the reader

> **Write:** Data Flows Between Systems<br>
> **Not:** Data flows between systems

## Terminology

One concept gets one term. Do not alternate between synonyms for the same thing.

| Use | Avoid | Why |
|---|---|---|
| log in (verb), login (noun) | "login" as a verb, "log into" | Verb and noun take different forms |
| set up (verb), setup (noun) | "setup" as a verb | Same reason |
| email | e-mail | Current usage |
| back office (noun), back-office (adjective) | "backoffice" | Compound modifier takes a hyphen |
| toll tag | transponder, tag reader, reader (interchangeably) | Pick one per concept |
| select | click on | "Select" works across input methods |
| Section 508 | "508 compliance" | Cite the standard by name |

## Numbers and Units

- Spell out one through nine. Use numerals for 10 and above.
- Always use numerals with a unit: 5 km, 3 s, 128 MB.
- Insert a nonbreaking space between the number and the unit.
- Currency: symbol plus amount, no decimals on whole amounts. $25, not $25.00.
- Dates in prose: October 19, 2026. Dates in logs: 2026-10-19.
- Time: 24 hour clock in logs, 12 hour with AM or PM in the interface.
- Ranges: use "to" in prose, an en dash in tables.

## Interface Elements

- Bold the label a reader interacts with, and nothing else. Select **Save**.
- Menu paths use the angle bracket: **File > Export > CSV**.
- Keyboard shortcuts: **Ctrl+S**.
- Code, filenames, paths, and variables use monospace.
- Placeholders use angle brackets: `<filename>`.
- Do not wrap labels in quotation marks.

## Accessibility

- **Alt text** describes purpose, not appearance. "Diagram showing the read moving from
  reader to gateway," not "a diagram." Decorative images take empty alt text.
- **Link text** is descriptive and stands alone out of context. Never "click here" or
  "read more."
- **Heading order** is sequential with no skipped levels, so screen reader users can
  navigate by structure.
- **Tables** include a header row with column scope and a short caption.
- **Never rely on color alone.** Pair color with text or an icon.
- **Expand every abbreviation** on first use, then use the short form.
- Run the accessibility checklist before publishing, not after.

## Word List

| Use | Instead of |
|---|---|
| use | utilize, leverage |
| because | due to the fact that |
| now | at this point in time |
| can | is able to |
| about | approximately |
| allow | enable (unless referring to a setting) |
| and | and/or |

## Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.2 | October 19, 2026 | Added accessibility section and terminology table | K. Vollweiler |
| 1.1 | September 2026 | Added numbers and units rules | K. Vollweiler |
| 1.0 | August 2026 | Initial excerpt | K. Vollweiler |
