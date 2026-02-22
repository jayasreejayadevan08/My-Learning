public class TaskHandler {
 public static void updateOppStage(List<Task> newList, Map<Id,Task> oldMap){
 List<Opportunity> oppToUpdate = new List<Opportunity>(); // hold all the opportunity record to update
 Set<Id> oppIds = new Set<Id>();// has unique values, which are ids of opportunity which we need to update
 for(Task t : newList){
 if(t.Status == 'Completed' &&
 oldMap.get(t.Id).Status != 'Completed' &&
 t.WhatId != null &&
 String.valueOf(t.WhatId).startsWith('006')){
 oppIds.add(t.WhatId);
 }
 }
 List <Opportunity> oppList = [SELECT Id, StageName FROM Opportunity WHERE Id IN :oppIds ];
 for(Opportunity opp : oppList){
 opp.StageName = 'Qualification';
 oppToUpdate.add(opp);
 }
 if(!oppToUpdate.isEmpty()) 
 {
    update oppToUpdate;
 }
 }

    }