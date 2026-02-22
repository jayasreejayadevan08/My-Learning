@isTest
public class test_TaskHandler {
    
    @testSetup
    
    static void setupData(){
        
        Opportunity opp = new Opportunity();
        opp.Name = 'Test opportunity 1';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.today().addDays(30);
        
        insert opp;
        
        Task t = new Task();
        t.Status = 'Not Started';
        t.OwnerId = UserInfo.getUserId();
        t.Subject = 'Email';
        t.Priority = 'Normal';
        t.WhatId = opp.id;
        
        insert t;
        
    }
    
    @isTest
    public static void test_taskCompleted(){
        
        Task t = [Select Id, Status, WhatId From Task Limit 1];
        t.Status = 'Completed';
        update t;
        
    }
    

}