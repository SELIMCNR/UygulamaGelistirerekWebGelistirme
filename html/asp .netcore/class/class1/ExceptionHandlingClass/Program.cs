public class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        try
        {
            Login("selim cinar", "123456");
            Console.WriteLine("Login başarılı");
        }
        catch(LoginException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

    static void Login(string username, string password)
    {
        if(username.Contains(" "))
        {
            throw new LoginException("username boşluk içeremez.");
           
        }
        if(password.Length<8)
        {
            throw new LoginException("Parola min 8 karakter olmalıdır.");
        }
    }
}
class LoginException:Exception
{

    public LoginException(string message):base(message)
    {
        
    }
}