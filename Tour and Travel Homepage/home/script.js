// let isSignUp = false;

// function toggleMode(e) {
//   e.preventDefault();
//   isSignUp = !isSignUp;

//   const formTitle = document.getElementById("formTitle");
//   const formSubtitle = document.getElementById("formSubtitle");
//   const submitBtn = document.getElementById("submitBtn");
//   const toggleText = document.getElementById("toggleText");
//   const toggleBtn = document.getElementById("toggleBtn");

//   if (isSignUp) {
//     formTitle.textContent = "Start Your Journey";
//     formSubtitle.textContent =
//       "Create an account to explore amazing destinations";
//     submitBtn.textContent = "Sign Up";
//     toggleText.textContent = "Already have an account?";
//     toggleBtn.textContent = "Sign In";
//   } else {
//     formTitle.textContent = "Welcome to Roamers";
//     formSubtitle.textContent = "Sign in to start your journey";
//     submitBtn.textContent = "Sign In";
//     toggleText.textContent = "Need an account?";
//     toggleBtn.textContent = "Sign Up";
//   }
// }

// function showToast(message, isError = false) {
//   const toast = document.getElementById("toast");
//   toast.textContent = message;
//   toast.className = "toast show" + (isError ? " error" : "");

//   setTimeout(() => {
//     toast.className = "toast";
//   }, 3000);
// }

// function handleSubmit(e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Simple validation
//   if (password.length < 6) {
//     showToast("Password must be at least 6 characters long", true);
//     return;
//   }

//   // In a real application, you would handle authentication here
//   // For this demo, we'll just show a success message and redirect
//   if (isSignUp) {
//     showToast("Account created successfully!");
//     setTimeout(() => {
//       window.location.href = "main.html";
//     }, 1500);
//   } else {
//     showToast("Welcome back!");
//     setTimeout(() => {
//       window.location.href = "main.html";
//     }, 1500);
//   }
// }
