internal class Program
{
    private static void Main(string[] args)
    {
        var liste = new List<string>()
        {

        };

        foreach (var item in liste)
        {
            try
            {
                int a = int.Parse(item);
                Console.WriteLine(a);
            }
            catch (Exception ex)
            {
                continue;
            }
        }


        while (true)
        {
            Console.Write("sayı: ");
            string input = Console.ReadLine();

            if (input == "q")
                break;

            try
            {
                int sayi = int.Parse(input);
                Console.WriteLine("girdiğiniz sayı : {0}", sayi);
            }
            catch(Exception ex)
            {
                Console.WriteLine("Geçersiz sayı");
                continue;
            }
        }


        Console.Write("parola :  ");
        string parola  = Console.ReadLine();

        try
        {
            CheckPassword(parola);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }



    }

    private static void CheckPassword(string? parola)
    {
        string turkce_karakterler = "ğ,Ğ,ç,Ç,ş,Ş,ü,Ü,ö,Ö,ı,İ";

        foreach(var karakter in parola)
        {
            if (turkce_karakterler.IndexOf(karakter) > -1)
            {
                throw new Exception("geçerli parola");
            }
        }

    }
}
class User
{
    public string UserName { get; set; }
    public  string Email { get; set; }
}