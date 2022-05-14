public class wireDemoClass {
    
    @Auraenabled(cacheable=true)
    public static List<Customer1__c> getlistofcustomers(){
        List<Customer1__c> customers = [Select Id, fullName__c, Age__c from Customer1__c ];
        return customers;
    }

}