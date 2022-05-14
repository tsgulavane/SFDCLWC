trigger OrderEventTrigger on Order_Event__e (after insert) {
	
    List<Task> tasks = new List<Task>();
    String usr = UserInfo.getUserId();  
    // Iterate through each notification.
    for (Order_Event__e event : Trigger.New) {
        if (event.Has_Shipped__c == true) {
            // Create Task to dispatch new team.
            Task ts = new Task();
            ts.Priority = 'Medium';
            ts.Status = 'New';
            ts.Subject = 'Follow up on shipped order ' + event.Order_Number__c;
            ts.OwnerId = usr;//queue.Id;
            tasks.add(ts);
        }
   }
    
    // Insert all tasks corresponding to events received.
    insert tasks;

    
    
    
}