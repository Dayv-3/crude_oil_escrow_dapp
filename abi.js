const contractABI = [
  {"inputs":[],"name":"autoRefundIfTimedOut","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"confirmDelivery","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_seller","type":"address"},{"internalType":"address","name":"_inspector","type":"address"}],"stateMutability":"payable","type":"constructor"},
  {"anonymous":false,"inputs":[],"name":"ContractFinalized","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"confirmer","type":"address"}],"name":"DeliveryConfirmed","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},
  {"inputs":[],"name":"refundBuyer","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refunded","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum EnhancedCrudeOilEscrow.Status","name":"status","type":"uint8"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ShipmentUpdated","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransactionInitiated","type":"event"},
  {"inputs":[{"internalType":"string","name":"message","type":"string"}],"name":"updateShipmentStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"getShipmentStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}
];
