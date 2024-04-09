using MySql.Data.MySqlClient;
using System.Data.SqlClient;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        GetSqlConnection();
        GetMYSqlConnection();
    }

    static void GetSqlConnection()
    {
        string connectionString = @"Data Source=DESKTOP-BC3LOP2\SELM;Initial Catalog=one;Integrated Security=SSPI;";
    
        
        using(var connection = new SqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Bağlantı sağlandı");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                connection.Close();
            }
        }

    }

    static void GetMYSqlConnection()
    {
        string connectionString = @"server=localhost;port=3306;database=db_prd;user=root;password=419293A23.m";


        using (var connection = new MySqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Bağlantı sağlandı mysql");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                connection.Close();
            }
        }

    }
}