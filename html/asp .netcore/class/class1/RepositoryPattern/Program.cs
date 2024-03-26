using RepositoryPattern.DataAcces.Abstract;
using RepositoryPattern.DataAcces.Concrete;
using RepositoryPattern.Entity;

internal class Program
{
   

    private static void Main(string[] args)
    {
        //        var productDal = new EfProductDal();
        //  var productDal = new MySQLProductDal();
        // productDal.Create(new Product());

        var productDal = new ProductManager(new EfProductDal());
        productDal.Create(new Product());


        // injection =>
    }
}
class ProductManager : IProductRepository
{
    IProductRepository _repositoriy;
    public ProductManager(IProductRepository repository)
    {
        _repositoriy = repository;
    }
    public void Create(Product entity)
    {
        _repositoriy.Create(entity);
    }

    public void Delete(int id)
    {
        throw new NotImplementedException();
    }

    public Product GetById(int id)
    {
        throw new NotImplementedException();
    }

    public Product[] GetPopularProducts()
    {
        throw new NotImplementedException();
    }

    public Product[] GetProductsByCategory(int id)
    {
        throw new NotImplementedException();
    }

    public void Update(Product entity)
    {
        throw new NotImplementedException();
    }
}
