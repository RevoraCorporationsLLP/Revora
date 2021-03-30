 function postToGoogle() {
     var fname = $("[name='fname']").val();
     var lname = $("[name='lname']").val();
     var email = $("[name='email']").val();
     var phone = $("[name='phone']").val();
     var subject = $("[name='subject']").val();
     var message = $("[name='message']").val();
     $.ajax({ url: "https://docs.google.com/forms/d/e/1FAIpQLSe0-0J7pE8Cv-s247AQpRqerCONFENSajhhRBvRKNyhrHmEHQ/formResponse", data: { "entry.2005620554": fname, "entry.1637468121": lname, "entry.1045781291": email, "entry.1166974658": phone, "entry.1065046570": subject, "entry.839337160": message }, type: "POST", dataType: "xml", statusCode: { 0: function() { alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY."); }, 200: function() { alert("THANK YOU! YOUR RESPONSE IS RECORDED SUCESSFULLY."); } } });
 }