# NodeJS Email sender using nodemailer

Send Emails automatically from your own projects.

## Setting up

Create a gmail account and turn 2FA on, Create a new app password and use that as your password for nodemailer. Edit your email and password inside the sendEmail.js file inside of the functions folder (Line 8 & 9)

## Npm packages used:

[Nodemailer](https://www.npmjs.com/package/nodemailer)

```bash
npm i nodemailer
```

## Usage

```nodejs
sendEmail("Recipent","Subject","Content/Html",false)
```
If you'd like to send HTML code inside the email instead of plain text, change the last argument to true.

## Issues?
Feel free to reach out for help, My discord is `rasp.pi` 
