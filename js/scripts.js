$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work_responses").show();
    $("input:checkbox[name=work_transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work_responses').append(workTransportationMode + "<br>");
    });
    $("#fun_responses").show();
    $("input:checkbox[name=fun_transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun_responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
