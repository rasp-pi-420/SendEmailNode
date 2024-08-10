import sendEmail from './functions/sendEmail.js'


async function main() {
  try {
    const result = await sendEmail("Email","Subject","Content/Html",false) // Usage: String : Recipient, String : Subject, String : Content, Bool : IsHtmlCode | If you'd like to send html code instead of plain text just set isHtmlCode to true
    console.log(result); // Handle successful response
  } catch (err) {
    console.error("Failed to send email:", err); // Handle errors
  }
}
main()
