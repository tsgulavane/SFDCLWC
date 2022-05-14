public class ContactListController {
    
   @AuraEnabled
    public static List<Contact> getContactList(){
        List<Contact> contactList = [Select FirstName, LastName, Email From Contact WHERE Email != null LIMIT 10];
        return contactList;
    }

}