@isTest
public class AccountTriggerTest {
    
    @isTest
    public static void create200accounts(){
        List<Account> accts = new List<Account>();
        
        for(Integer i=0; i < 200; i++) {
            Account acct = new Account(Name='Test Account ' + i, BillingState = 'CA');
            accts.add(acct);
            
            Test.startTest();
            insert acct;
            Test.stopTest();
            
            for (Account a:accts){
                
                System.assertEquals('CA', a.ShippingState, 'ERROR');
            }
        }
    }
}