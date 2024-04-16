using MySql.Data.MySqlClient;
using SqlDatabaseIntegratıon;
using System.Data.SqlClient;


interface IProductDal
{
    List<Product> GetAllProducts();    
    Product GetProductById(int id);

    void Create(Product p);
    void Update(Product p);
    void Delete(int productId);
}
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
       var products= GetAllProducts();

        foreach (var product in products)
        {
            Console.WriteLine($"name {product.Name} price : {product.Price}");
        }
    }

    static List<Product> GetAllProducts()
    {
        List<Product> products = null;
        using (var connection = GetMYSqlConnection())
        {
            try
            {
                connection.Open();
                string sql = "Select * from product";
              //  SqlCommand command = new SqlCommand(sql,connection);
                
                MySqlCommand command = new MySqlCommand(sql, connection);   
                

                MySqlDataReader reader = command.ExecuteReader();
                

             products  = new List<Product>();


                while (reader.Read())
                {
                    products.Add(new Product
                    {
                        ProductId = int.Parse(reader[1].ToString()),
                        Name = reader["name"].ToString(),
                        Price = double.Parse(reader["price"].ToString()),

                    }) ;

            
                }
                reader.Close();
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
        return products;
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

    static MySqlConnection  GetMYSqlConnection()
    {
        string connectionString = @"server=localhost;port=3306;database=db_prd;user=root;password=419293A23.m";


        return new MySqlConnection(connectionString);
       
         
        }

    }

