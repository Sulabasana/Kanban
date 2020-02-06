// $(document).ready(function (){
//     let inputs = $('input')
//     let leng= inputs.length
    
//     $("form[name='registration']").validate({
//         // Specify validation rules
//         rules: {
//           // The key name on the left side is the name attribute
//           // of an input field. Validation rules are defined
//           // on the right side
//           status: "required",
//           text: "required",
//           tags: 'required',
//           color: 'required',

//         },
//         // Specify validation error messages
//         messages: {
//           status: "Select between: new, work, done",
//           text: "What are you working on",
//           tags: "Tag related to the task",
//           color: "Low, Medium, High"
//         },
//         // Make sure the form is submitted to the destination defined
//         // in the "action" attribute of the form when valid
//         submitHandler: function(form) {
//           form.submit();
//         }
//       });
//     });

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
