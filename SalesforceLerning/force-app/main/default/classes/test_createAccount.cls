@isTest
public class test_createAccount {
    
    @isTest
    public static void testAccount(){
        Account acc = new Account(Name = 'test1');
      
       Account acc1 = createAccount.createAcc(acc);
    }
    @isTest
    public static void testAccountexp(){
        Account acc2 = new Account(Name = 'test2');
      	insert acc2;
       Account acc3 = createAccount.createAcc(acc2);
    }
    

}