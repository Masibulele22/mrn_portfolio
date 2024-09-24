// /* =============== EMAIL JS =============== */
// const contactForm = document.getElementById('contact-form');
// const contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
//     e.preventDefault()

//     //serviceID - templateID - #form - publicKey
//     emailjs.sendForm('service_sdrza8w','template_1pwq9t3','#contact-form','siH9Nck-etAhxus6h')
//         .then(function() {
//             //Show sent message
//             contactMessage.textContent = 'Message sent sucessfully ' 

//             // Remove message after five seconds
//             setTimeout(() => {
//                 contactMessage.textContent = ''
//             }, 5000)

//             // Clear input fields
//             contactForm.reset()

//         }, () => {
//             // Show error message
//             contactMessage.textContent = 'Message not sent (service error)'
//         })
// };

// contactForm.addEventListener('submit', sendEmail)

// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm').then(
//     (response) => {
//       console.log('SUCCESS!', response.status, response.text);
//     },
//     (error) => {
//       console.log('FAILED...', error);
//     },
//   );

// action="" method="POST" enctype="multipart/form-data"


// formcarry({
//     form: "https://formcarry.com/s/UaUjE9HD22X",
//     element: "#contact-form",
//     // Success callback, you can show alert messages
//     // or redirect the user in this function
//     onSuccess: function (response) {
//         // redirect the user to your thank you page after a successful form submit.
//         // replace the URL with your thank you page,
//         // Don't forget to add http:// or https:// before the URL.
//         window.location.href = "contact.html";
//     },

//     // Error callback, a good place to show errors 🗿
//     onError: function (error) {
//         alert(error)
//     }
// });
