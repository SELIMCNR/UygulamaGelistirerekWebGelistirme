internal class Program
{
    private static void Main(string[] args)
    {

        //Exception

        // Unhadled exception. System.FormatException  : Farklı format
        // Unhadled exception. System.DivideByZeroException // 0'a eşit
        //Unhadled exception. System.IndexOutOfRangeException // indexi aştı değerler
        //Unhadled exception. System.NullReferenceException  // boş referans






        //Exception Handling


     

        try
        {
            Console.Write("1. sayı: ");
            int sayi = int.Parse(Console.ReadLine());


            Console.Write("2. sayı: ");
            int sayi2 = int.Parse(Console.ReadLine());

            var sonuc = sayi / sayi2;
            Console.WriteLine($"{0} / {1} ={2}", sayi, sayi2, sonuc);
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine(" sayı 0 olamaz");
            Console.WriteLine(ex.Message);
        }
        catch (FormatException ex)
        {
            Console.WriteLine(" sayısal değer girmelisin");
            Console.WriteLine(ex.Message);
        }

        catch(Exception ex)
        {
            Console.WriteLine(" bir hata oluştu.");
            Console.WriteLine(ex.Message);
        }

        finally 
        {
            Console.WriteLine("Finally bloğu çalıştı.");
        }


        int a = 10;
        if (a >15)
        {
            throw new Exception("sayi 5'den büyük olamaz.");
        }

        string parola = "1234567a";

        try
        {
            check_password(parola);
            Console.WriteLine("parola geçerli.");
        }
        catch (System.Exception ex)
        {
            Console.WriteLine(ex.Message);
        }

        try
        {
            var p = new Person();
            p.Name2 = "selim";
        }
        catch(System.Exception ex)
        {
            Console.WriteLine(ex.Message);
            throw;
        }
    }
    static void check_password(string password)
    {
        if(password.Length<8 || password.Length > 15)
        {
            throw new Exception("Parola 7-15 karakter arasında olmalıdır.");
        }

        if (!password.Any(char.IsDigit))
        {
            throw new Exception("Parola en az bir rakam içermelidir.");
        }
        if (!password.Any(char.IsLetter))
        {
            throw new Exception("parola en bir harf içermelidir");
        }
    }
}

class Product
{
    public string Name { get; set; }
}

class Person
{
    string _Name;
    public string Name2
    {
        get
        {
            return _Name;
        }
        set
        {
            if (value.Length > 15)
            {
                throw new Exception("Name için en fazla 15 karakter girmelisiniz.");
            _Name = value;

            }
        }
    }
}