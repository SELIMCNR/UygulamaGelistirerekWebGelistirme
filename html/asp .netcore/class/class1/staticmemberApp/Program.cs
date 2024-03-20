internal class Program
{
    private static void Main(string[] args)
    {
        var products = ProductManager.GetProducts();
        var productId = ProductManager.GetProductById(2);
        Console.WriteLine($"name: {productId.ProductName} price: {productId.Price}");

        foreach (var p in products)
        {
            Console.WriteLine($"name: {p.ProductName} price: {p.Price}");
        }
    }
}

class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }

    public double Price { get; set; }
    public bool IsAproved { get; set; }

}

static class ProductManager
{
    static Product[] Products;

    static ProductManager()
    {
        Products = new Product[5];
        Products[0] = new Product { ProductId = 1, ProductName = "Iphone 5", Price = 2000, IsAproved = false };
        Products[1] = new Product { ProductId = 2, ProductName = "Iphone 6", Price = 3000, IsAproved = false };
        Products[2] = new Product { ProductId = 3, ProductName = "Iphone 7", Price = 4000, IsAproved = false };
        Products[3] = new Product { ProductId = 4, ProductName = "Iphone 4", Price = 5000, IsAproved = false };
        Products[4] = new Product { ProductId = 5, ProductName = "Iphone 3", Price = 1000, IsAproved = false };
    }
    public static Product[] GetProducts()
    {
        return Products;
    }
    public static Product GetProductById(int id)
    {
        Product product = null;

        foreach (var p in Products)
        {
            if (p.ProductId== id)
            {
                product = p;
            }
        }
        return product;
    }
  
}