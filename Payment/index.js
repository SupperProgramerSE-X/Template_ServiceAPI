$(function () {
   var proxy = 'https://cors-anywhere.herokuapp.com/';
    var urlPayment ='https://api-payment.herokuapp.com/api/payment';
    
    
    
    
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
                        var row = '<tr><td>' + data[i]._id + '</td><td>' + data[i].userId + '</td><td>' + data[i].orderId + '</td><td>' + data[i].webName + '</td><td>' + data[i].price + '</td><td>'+ 
                        data[i].dateTime+'</td></tr>';
            
                        $('#importPayment2').append(row);
                    }
                    
                }

var urlUserPayment ="https://api-payment.herokuapp.com/api/user";

$.ajax({
    
            //Payment
            type: "GET",
            url: proxy + urlUserPayment
    
        }).then(function (data) {
    
            addNewRow(data);
            console.log(data);
            
         
            
        });
    
        function addNewRow(data) {
    
            for (var i = 0; i < data.length; i++) {
                var row = '<tr><td>' + data[i]._id + '</td><td>' + data[i].userId + '</td><td>' + data[i].userName + '</td><td>' + data[i].balance + '</td> </tr>';
    
                $('#importPayment1').append(row);
            }
            
        }

    
    });
    