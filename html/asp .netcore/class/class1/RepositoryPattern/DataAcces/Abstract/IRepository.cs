using RepositoryPattern.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryPattern.DataAcces.Abstract
{
    public interface IRepository <TEntity>
    {
        TEntity GetById(int id);


        void Update(TEntity entity);


        void Create(TEntity entity);


        void Delete(int id);
    }
}
