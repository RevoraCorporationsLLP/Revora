 function postToGoogle() {
     var fname = $("[name='fname']").val();
     var lname = $("[name='lname']").val();
     var email = $("[name='email']").val();
     var phone = $("[name='phone']").val();
     var subject = $("[name='subject']").val();
     var message = $("[name='message']").val();
     $.ajax({
         url: "https://docs.google.com/forms/d/e/1FAIpQLSeMKEHp4mZph-Pgx47OOG8ylMznYVdlqXXCSJ8Rb4Zqz61O_Q/formResponse",
         data: {
             "entry.1665063239": fname,
             "entry.949658059": lname,
             "entry.149074556": email,
             "entry.755424024": phone,
             "entry.1892987173": subject,
             "entry.380552319": message
         },
         type: "POST",
         dataType: "xml",
         statusCode: {
             0: function() {
                 alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY. WE WILL GET IN TOUCH WITH YOU SHORTLY!");
             },
             200: function() {
                 alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY. WE WILL GET IN TOUCH WITH YOU SHORTLY!");
             }
         }
     });
 }