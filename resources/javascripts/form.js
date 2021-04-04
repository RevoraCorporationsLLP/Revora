 function postToGoogle() {
     var fname = $("[name='fname']").val();
     var lname = $("[name='lname']").val();
     var email = $("[name='email']").val();
     var phone = $("[name='phone']").val();
     var subject = $("[name='subject']").val();
     var message = $("[name='message']").val();
     $.ajax({
         url: "https://docs.google.com/forms/d/e/1FAIpQLSfP2EJnbphNq6s-HuAWIr7XHFLUG4oJ9zwto0MEpHSJCdvQeA/formResponse",
         data: {
             "entry.227649294": fname,
             "entry.491522101": lname,
             "entry.1503863940": email,
             "entry.842699778": phone,
             "entry.224739943": subject,
             "entry.1693096447": message
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