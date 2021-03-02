function sendMail(contactForm) {
    emailjs.send("Rosie Test Resume - CI","template_whww1zs", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "project_request":contactForm.projectsummary.value  
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }); 
        return false;
}