public class Temperature {
    public static Decimal FtoC(Decimal fh)
    {
        Decimal res = (fh - 32)*5/9;// F to C
        System.debug(res);
        return res.setScale(2);
    }
}