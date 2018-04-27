$(function () {
 
    $.ajax({

        //Logistic
        type: "GET",
        url: "http://logisticsservice20180425040234.azurewebsites.net/api/Logistics",

    }).then(function (data) {

        addNewRow(data);
        console.log(data);
        console.log(data.Array.length);
     
        
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td>' + data[i].Address + '</td><td>' + data[i].Amount + '</td><td>' + data[i].Delivery_Date + '</a></td><td>' + data[i].Delivery_status + '</td><td>' + data[i].Delivery_type + '</td><td>'+ 
            data[i].Expected_date+'</td> <td>' + data[i].Logistic_id + '</td><td>' + data[i].Order_id + '</td><td>' + data[i].Payment_id + '</td><td>' + data[i].Price + '</td><td>' + data[i].User_id + '</td> </tr>';

            $('#importLogistic').append(row);
        }
        
    }

    


});


