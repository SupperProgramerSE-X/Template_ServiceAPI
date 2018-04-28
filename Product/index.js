
$(function () {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var urlProduct = 'https://pacific-peak-27279.herokuapp.com/api/ProductReview/?format=json';    
       $.ajax({
   
           //Logistic
           type: "GET",
           url: proxy + urlProduct,
   
       }).then(function (data) {
   
           addNewRow(data);
           console.log(data);
           
        
           
       });
   
       function addNewRow(data) {
   
           for (var i = 0; i < data.length; i++) {
               var row = '<tr><td>' + data[i].id + '</td><td>' + data[i].productID + '</td><td>' + data[i].rating + '</a></td><td>' + data[i].comment + '</td><td>' + data[i].date + '</td><td>'+ 
               data[i].reviewer+ '</td> </tr>';
   
               $('#importProduct').append(row);
           }
           
       }
   
       
   
   
   });