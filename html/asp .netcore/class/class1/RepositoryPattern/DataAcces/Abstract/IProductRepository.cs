using RepositoryPattern.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryPattern.DataAcces.Abstract
{
    public interface IProductRepository : IRepository<Product>
    {

        Product[] GetProductsByCategory(int id);
        Product[] GetPopularProducts();
    }
}
