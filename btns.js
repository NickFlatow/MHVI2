$(document).ready(function(){
  $('#driverDropOff').click(function() {
    //check if driver form meets validation rules
    if ($('#driver').valid()) {
      let item = $('#list').find(":selected").text();
      let quantity = $('#driverTxtUpdate').val();
      updateDatabase(item,(-1 * quantity));
    }
  });
  $('#driverPickUp').click(function() {
    //check if driver form meets validation rules
    if ($('#driver').valid()) {
      let item = $('#list').find(":selected").text();
      let quantity = $('#driverTxtUpdate').val();
      updateDatabase(item,quantity);
    }
  });
  $('#tableBody').on('click','.update',function(){
    let $row = $(this).closest("tr");   // Find the row
    let $nextRow = $row.next("tr"); // Find the next row down
    $nextRow.toggle(); //show hide hidden row
  });
  $('#tableBody').on('click','.submit',function(){
    let $row = $(this).closest("tr"); // get the row where the button was pushed
    let $prevRow = $row.prev(); // get the previous row
    let item = $prevRow.find(".item").text(); // Find the item we are upadting
    let cost = $row.find("input[name = 'costTR']").val(); //Find textbox for Cost
    let quantity = $row.find("input[name = 'quantityTR']").val(); //Find textbox for Quantity

    if ($('#table').valid()) { //check if row meet validation requirments
      adminUpdateDatabase(item,quantity,cost);
    }
  });
  $('#tableBody').on('click','.delete',function(){
    let $row = $(this).closest('tr');
    let item = $row.prev().find(".item").text();
    const dbItem = firebase.database().ref(item);

    if (confirm("Are you sure you want to delete " + item + "?")){
      dbItem.remove();
    }
  });
});
