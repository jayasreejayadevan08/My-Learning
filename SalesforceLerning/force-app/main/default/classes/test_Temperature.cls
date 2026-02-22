@isTest
public class test_Temperature {
    @isTest
    private static void warmTempTest(){
        Decimal res = Temperature.FtoC(68);
        System.assertEquals(20, res); // asserts are used to check if the output is correct or not
    }
    @isTest
    private static void coldTempTest(){
        Decimal res = Temperature.FtoC(0);
        System.assertEquals(-17.78, res);
    }

}