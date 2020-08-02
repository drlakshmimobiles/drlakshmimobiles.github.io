$(document).ready(function () {
    $('#invoice').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                invoice: {
                    invoiceNumber: $('#invoiceNumber').val(),
                    date: Date($.now()),
                    modelName: $('#modelName').val(),
                    imeiNo: $('#imeiNo').val(),
                    finalPrice: $('#finalPrice').val(),
                    customerName: $('#customerName').val(),
                    customerNumber: $('#customerNumber').val(),
                    customerAddress: $('#customerAddress').val()
                }
            },
            success: function () {
                printbill();
            },
            error: function (xhr, res, text) {
                printbill();
            }
        });
    });
});

function printbill(){
    var invoiceNumber = $('#invoiceNumber').val();
    var modelName = $('#modelName').val();
    var imeiNo = $('#imeiNo').val();
    var finalPrice = $('#finalPrice').val();
    var customerName = $('#customerName').val();
    var customerNumber = $('#customerNumber').val();
    var customerAddress = $('#customerAddress').val();
    var price = finalPrice/1.18;
    var sgst = price*0.09;
    var cgst = price*0.09;

    localStorage.setItem("invoiceNumber",invoiceNumber);
    localStorage.setItem("finalPrice",finalPrice.toLocaleString('en-IN'));
    localStorage.setItem("customerName",customerName);
    localStorage.setItem("customerNumber",customerNumber);
    localStorage.setItem("customerAddress",customerAddress);
    localStorage.setItem("price",price.toFixed(2).toLocaleString('en-IN'));
    localStorage.setItem("imeiNo",imeiNo);
    localStorage.setItem("sgst",sgst.toFixed(2).toLocaleString('en-IN'));
    localStorage.setItem("cgst",cgst.toFixed(2).toLocaleString('en-IN'));
    localStorage.setItem("modelName",modelName);
    window.location.href="bill.html";
}