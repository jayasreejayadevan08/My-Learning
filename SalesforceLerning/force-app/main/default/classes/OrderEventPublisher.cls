public class OrderEventPublisher {
public static void publishOrderEvent(Order order) {
        // Create platform event instance
        Order_Event__e orderEvent = new Order_Event__e(
            Order_Id__c = order.Id,          // Custom field of Platform Event Order_Event__e
            Order_Status__c = order.Status,
            Order_Amount__c = order.TotalAmount);
        // Publish all events at once (max 2000 per transaction)
    List<Database.SaveResult> results = EventBus.publish(new List<Order_Event__e>{ orderEvent });
    // Handle results
    for (Database.SaveResult result : results) {
        if (!result.isSuccess()) {
            System.debug('Event publish failed');
        }
    }
   }
}