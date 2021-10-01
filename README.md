# 03_SecurityCypher

---
Índice

    1. Description
    2. User Definition & User Stories (UX)
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes
---

## 1. Description

Application to perform a cipher and decipher process, built with JavaScript, HTML 5 & CSS3.

---

## 2. User Definition:
**User: Security Chief of a Club**

## User Stories:

- The user wants to hide the meaning of a message and encrypt it.

- The user wants to share the application to selected people to be able to decript the messages

- The user wants to encrypt and decript message with strings 

## 3. Acceptance Criteria

This applications should allow the user to encrypt messages and also allow to decrypt the message. Should be responsive and in a ulr to share it and be used from a cellphone to other dispositive screen like a desktop.

---

## 4. Technical Requeriments /

- Pair work and allowed peer programming between teams
- Fork this repository
- Follow the folder structures dividing per languages: JS, CSS, HTML5
- Make a full responsive website consider at least 2 types of dispositives, cellphone and desktop.
- Follow up Semantic HTML rules, have title, footer, center content and visual alignment.
- If required, create an Assets folder
- Document every Agile SDLC on ReadMe.md 
- Fork this repository with the st up of the project to run testing on the _boilerplate_
- Plan and execute Unit Testing
- Install dependencies with ` npm install `
- Run Unit testing with ` npm test `

The _boilerplate_ contains a file structure as a starting point like thisas all the sample dependencies and tests configuration:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

### Scripts / Files

* `README.md`: should explain how to download, install and run the application
  as well as an introduction to the application, its functionality and decisions about
  design they took.
* `src / index.html`: this is the entry point to your application. This file
  it must contain to _markup_ (HTML) and include the necessary CSS and JavaScript.
* `src / cipher.js`: here you must implement the cipher object, which must be
  _exported_ in the global object (`window`). This object (`cipher`) must
  contain two methods:
  - `cipher.encode (offset, string)`: `offset` is the number of positions to
    we want to move to the right in the alphabet and `string` the message (text)
    that we want to encrypt.
  - `cipher.decode (offset, string)`: `offset` is the number of positions to
    we want to move left in the alphabet and `string` the message
    (text) that we want to decipher.
* `src / index.js`: here you must listen to DOM events, invoke` cipher.encode () `
  or `cipher.decode ()` as needed and update the result in the UI.
* `test / cipher.spec.js`: this file contains some sample tests and here
  you will have to implement the tests for `cipher.encode ()` and `cipher.decode ()`.

**CLUES:**

- `charCodeAt()` method of Strings
- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- Use the Caesar Cipher like was used before in ancient times to substitute one lettet to another pushed from the position number of their code.
- Emperor Julius Caesar used it to send orders to his generals in the battlefields, is one of the simplest and most widely used techniques to encrypt
a message.
- For example if we used an offset of 3:

* Clear alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Encrypted alphabet: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

 ![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Currently all simple alphabetic substitution ciphers are decrypted easily and in practice does not offer much security in communication, but Caesar encryption can often be part of more complex systems encryption, such as Vigenère encryption, and even has application in the ROT13 system.

**Additional Resources**
- Follow Michelle [![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)
- [Learn more `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
- [Learn about  `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
- [Find about `ASCII`](http://conceptodefinicion.de/ascii/)
- [Documentación de NPM](https://docs.npmjs.com/)

These are some tips that can help you in organizing and carrying out your project, taking into account the development of your _soft skills_:

* To start an organization of your project, see with what resources
  accounts and the time you have to complete it.
* If there is something that you do not know, ask and try to solve it; you can start with
  a google search, then consulting your squad and finally your coach. 
  If there is something that I do not know, someone else can help me. Learning is a
  collaborative process.
* Once you start to move forward ask for feedback, your colleagues may have
  excellent ideas or ways to solve the project that can help you.
* When you run into a problem, look for alternatives, and for that, consult
  different sources.
* If you already see yourself investing a lot of time in details, you should know how to prioritize and
  stick with the most important, projects have limited time and you must
  know how to manage it.
* Work as a team, ask questions and try to complete the project without giving up.
* Prepare your presentation, if I cannot communicate my ideas to others I do not know
  You will appreciate all the effort and work you put into it.

---

## 5. Hacker Edition

---

You are not limited to implementing only the mandatory part. We suggest you create also a `cipher.createCipherWithOffset ()` function that receives an `offset` and
return a new object with two methods (`encode` and` decode`) that only receive the string and use the `offset` that was passed to` createCipherWithOffset` at the time
creating the object.

---
##  6. Expected Learning Outcomes

---

- [ ] window object 
- [ ] Functions 
- [ ] Objects
- [ ] String methods to get codes
- [ ] My first team collaboration project using Continuous Integration Tools: Git & GitHub
- [ ] My first Unitary Testing

---
# ReadMe

---

> This Readme should be replaced with the project documentation following the SDLC procedures for Agile Software Development Lyfe Cycle.

