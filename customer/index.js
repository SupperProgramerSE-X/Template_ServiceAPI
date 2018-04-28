$(function () {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
     var urlPayment ='https://customer-api-shopping.herokuapp.com/api/customers';
     
     
     
     
         $.ajax({
             
                     //Payment
                     type: "GET",
                     url: proxy + urlPayment,
             
                 }).then(function (data) {
             
                     addNewRow(data);
                     console.log(data);
                     
                  
                     
                 });
             
                 function addNewRow(data) {
             
                     for (var i = 0; i < data.length; i++) {
                         var row = '<tr><td>' + data[i].id + '</td><td>' + data[i].address + '</td><td>' + data[i].email + '</td><td>' + data[i].lastname + '</td><td>' + data[i].name +'</td><td>' + data[i].password + '</td><td>' + data[i].telno + '</td></tr>';
             
                         $('#importCustomer').append(row);
                     }
                     
                 }
}); 