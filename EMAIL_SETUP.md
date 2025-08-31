# Resume Request Email Setup

## Formspree (Recommended - Free and Easy)

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Set the form to send emails to: `YOUR_EMAIL@mail.com`
5. Copy your form ID (looks like: `xpzgkqyw`)
6. In `app/about/page.js`, replace `YOUR_FORM_ID` with your actual form ID:
   ```javascript
   const formspreeUrl = "https://formspree.io/f/xpzgkqyw"; // Replace with your form ID
   ```