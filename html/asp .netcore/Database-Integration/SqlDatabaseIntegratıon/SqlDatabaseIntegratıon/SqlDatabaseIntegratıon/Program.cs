using MySql.Data.MySqlClient;
using SqlDatabaseIntegratıon;
using System.Data.SqlClient;
using System.Net.NetworkInformation;


interface IProductDal
{
    List<Product> GetAllProducts();    
    Product GetProductById(int id);

    void Create(Product p);
    void Update(Product p);
    void Delete(int productId);
}

class MySqlProductDal : IProductDal
{
    private MySqlConnection GetMYSqlConnection()
    {
        string connectionString = @"server=localhost;port=3306;database=db_prd;user=root;";


        return new MySqlConnection(connectionString);


    }



public void Create(Product p)
    {
        throw new NotImplementedException();
    }

    public void Delete(int productId)
    {
        throw new NotImplementedException();
    }

    public List<Product> GetAllProducts()
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


                products = new List<Product>();


                while (reader.Read())
                {
                    products.Add(new Product
                    {
                        ProductId = int.Parse(reader[1].ToString()),
                        Name = reader["name"].ToString(),
                        Price = double.Parse(reader["price"].ToString()),

                    });


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

    public Product GetProductById(int id)
    {
        throw new NotImplementedException();
    }

    public void Update(Product p)
    {
        throw new NotImplementedException();
    }
}
class SqlProductDal : IProductDal
{
    private SqlConnection GetMsSqlConnection()
    {

       String connectionString = @"Data Source=DESKTOP-BC3LOP2\SELM;Initial Catalog=one;Integrated Security=SSPI;";
        return new SqlConnection(connectionString);


    }



    public void Create(Product p)
    {
        throw new NotImplementedException();
    }

    public void Delete(int productId)
    {
        throw new NotImplementedException();
    }

    public List<Product> GetAllProducts()
    {
        List<Product> products = null;
        using (var connection =  GetMsSqlConnection())
        {
            try
            {
                connection.Open();
                string sql = "Select * from product";
                //  SqlCommand command = new SqlCommand(sql,connection);

                SqlCommand command = new SqlCommand(sql, connection);


                SqlDataReader reader = command.ExecuteReader();


                products = new List<Product>();


                while (reader.Read())
                {
                    products.Add(new Product
                    {
                        ProductId = int.Parse(reader[1].ToString()),
                        Name = reader["name"].ToString(),
                        Price = double.Parse(reader["price"].ToString()),

                    });


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

    public Product GetProductById(int id)
    {
        throw new NotImplementedException();
    }

    public void Update(Product p)
    {
        throw new NotImplementedException();
    }
}

internal class Program
{
    private static void Main(string[] args)
    {

        var productDal = new MySqlProductDal();
        var products = productDal.GetAllProducts();

        foreach(var item in products)
        {
            Console.WriteLine($"{item.Name}");
        }

    }

    /*static List<Product> GetAllProducts()
    {
     
    } */

    static void GetSqlConnection()
    {
        string connectionString = @"Data Source=DESKTOP-BC3LOP2\SELM;Initial Catalog=one;Integrated Security=SSPI;";


        using (var connection = new SqlConnection(connectionString))
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
}


 
