public class AccountUtils {
    
    public static List<Account> accountsByState(String stateName){
        List<Account> acclist = [Select Id, Name from Account where billingState =:stateName];
       
        return acclist;
    }

}