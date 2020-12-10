var invoices = require('./modules/invoices');
var myOrders = require('./modules/oders')


// invoices();
invoices.invoices();

var o = new myOrders.Orders() ;
o.setOrderId(12) ;



