
    $("#to-do").click(function(){
        $.getJSON("https://jsonplaceholder.typicode.com/todos",function(jdata){
            //hiding the instructions
            // $("#Site-msg").hide();
            // $("table").show(2000, "linear");

            var data ="";
            $.each(jdata, function(key,tabledata){
               
                data += "<tr>";
               
                data += "<td>"+tabledata.id+"</td>";
                data += "<td>"+tabledata.title+"</td>";
                
                if (tabledata.completed == true){
                    console.log(tabledata)

                    data += "<td>"+'<input type="checkbox" disabled=true name="checkbox-' + tabledata + 'id ="checkbox"' + tabledata + '" value="' + tabledata + '" class="custom" />' +"</td>";
                }else {
                    data += '<td>' + '<input type="checkbox" name="checkbox-' + tabledata + 'id ="checkbox"' + tabledata + '" value="' + tabledata + '" class="custom" />' + '  </td>';
                }
                data += '</tr>';
            });
            $("#table").append(data);
            $('input[type="checkbox"]').click(function(){

                if (check = $("input:checkbox:checked").length) {
                    if (check == 5) {
                        alert(" 5 task is completed");
                    }
                } else {

                    alert("less than 5 task is completed");
                    // alert("5 task not completed");
                }

            });
        });
    });
    var tasknum = 0;
    function myfun(y){
        var promise = new Promise(function (resolve){
            if(y == true){
                tasknum++;
                if(tasknum == 5){
                    resolve();
                }
            }
            else{
                tasknum--;
            }
        });
        promise
        .then(function(){
            alert("Congrats! You completed five Tasks.");
        })
    }
    
