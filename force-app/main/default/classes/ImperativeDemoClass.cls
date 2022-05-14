public class ImperativeDemoClass {
    
    @AuraEnabled
    public static List<Customer1__c> getlistbyImperative(){
        List<Customer1__c> customers = [Select Id, FullName__c from Customer1__c];
        return customers;   
    }
}