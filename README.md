# Running Tests via JavaScript


## Setup

```shell
npm i
```


## Running the Tests

Execute the tests via

```shell
npm run test
```


## TODO
Create automated tests using nodejs + selenium in teams of two or three
students.

Use selenium webdriver for firefox to run (test) the tests

- webmail.bulme.at + login incl. verification + https://lehrer.bulme.at/ +
  https://lehrer.bulme.at/~sg/autotest.txt
- mymail.bulme.at + login incl. verification + https://schueler.bulme.at/ +
  https://schueler.bulme.at/~sg.test/autotest.txt
- wiki.bulme.at + login incl. verification +
  https://microforge.bulme.at/lokwi-1.5/
- https://letto.bulme.at + login incl. verification
  + sandbox.bulme.at (www redirect)
  + https://sandbox.bulme.at/~sg/autotest.txt
- moodle.bulme.at + login incl. verification + www.bulme.at
- nextcloud.bulme.at + login incl. verification +
  https://pectine.bulme.at (www redirect) +
  https://pectine.bulme.at/~sg/autotest.txt
- https://gwp.bulme.at + login incl. verification + https://tools.bulme.at/

Use $STUDENT_USER, $STUDENT_PASS, $TEACHER_USER and $TEACHER_PASS before
creating a PR.

All tests should run headless by default. Bonus: make your tests switch to
non-headless using an environment variable.
