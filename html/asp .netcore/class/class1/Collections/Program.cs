using System.Collections;

internal class Program
{
    private static void Main(string[] args)
    {
        // Array  => fixed size
        String[] dizi = {"a","b","c"};
        dizi[0] = "d";
        Console.WriteLine(dizi[0]);

        int[] dizi2 = {1,2,3};
        dizi2[1] = 4;
        Console.WriteLine(dizi2[1]);


        //Collections
        // ** non-generic
        //   ** Arraylist, SortedList    

        ArrayList mylist = new ArrayList();
        mylist.Add(10);
        mylist.Add("20");
        mylist.Add(10.5);  //add : en sona ekler

        
        ArrayList mylist2 = new ArrayList() { 10, "10", "abc", 10.5 };
        ;
        mylist2.Insert(1, 20); // 1.indexe 20 ekle
        mylist2.InsertRange(3, mylist); // 3.indexten sonraya mylist ekle


        //Remove items
        mylist.Remove(10);
        mylist.RemoveAt(2);
        mylist.RemoveRange(0, 2);

        //Accesing items
        Console.WriteLine(mylist[0]);
        int sayi = (int)mylist[0];

        foreach(var item in mylist)
        {
            Console.WriteLine(item);
        }

        Console.WriteLine(mylist.Contains(10)); // listede 10 var mı


        ArrayList sayilar = new ArrayList() { 10, 5,4,60 };
        foreach(var item in sayilar)
        {
            Console.WriteLine(item);
        }

        sayilar.Sort(); // listeyi sırala küçükten büyüğe
        foreach (var item in sayilar)
        {
            Console.WriteLine(item);
        }




        //** generic
        //  ** int,string,Product

        //Generic List  önce tip belirt liste belirle
        List<int> sayilar2 = new List<int>();
        sayilar2.Add(10);
        sayilar2.Add(20);
        sayilar2.Add(30);


        List<string> isimler = new List<string>();
        isimler.Add("Kenan");
        isimler.Add("Arda");
        isimler.Add("Enes");
        isimler.Add(null);


        List<Product> urunler = new List<Product>()
        {
            new Product(){Name="s6"},
            new Product(){Name="s7"},
            new Product(){Name="s8"},
            new Product(){Name="s9"}

        };

        List<Product> urunler2 = new List<Product>()
        {
            new Product(){Name="Iphone 6"},
            new Product(){Name="Iphone 7"},
            new Product(){Name="Iphone 8"},
            new Product(){Name="Iphone 10"}

        };
        // add items
        urunler.AddRange(urunler2);

        //Accesing items
        foreach (var sayi1 in sayilar) 
        {
            Console.WriteLine(sayi1);
        }

        foreach(var item in urunler)
        {
            Console.WriteLine(item);
        }

        urunler.ForEach(p =>
        {
            Console.WriteLine(p.Name);
        });

        int count = urunler.Count(); // kaç eleman var
        Console.WriteLine(count);
        Console.WriteLine(urunler2[0]);

        for (int i = 0; i < urunler2.Count;i++)
        {
            Console.WriteLine(urunler2[i].Name);
        }


        //insert items
        sayilar.Insert(1, 100); // 1.indexe 
        sayilar.Insert(sayilar.Count, 1000); // son indexe
        foreach (var sayi3 in sayilar)
        {
            Console.WriteLine(sayi3);
        }

        urunler.InsertRange(1, urunler2); // LİSTE OLARAK EKLE
        for(int i = 0;i < urunler.Count; i++)
        {
            Console.WriteLine(urunler[i].Name);
        }

        sayilar.Remove(10); // silme listeden
        sayilar.RemoveAt(1); //1.indexte elemanı sil
        sayilar.RemoveAt(sayilar.Count); // son elemanı sil


        //Dictionary <TKey , TValue>

        // plaka => (34:istanbuk) , (46:Kahramanmaraş)

        Dictionary<int, string> plakalar = new Dictionary<int, string>();

        plakalar.Add(46, "Kahramanmaraş");
        plakalar.Add(34, "İstanbul");

        Console.WriteLine(plakalar[34]);

        Dictionary<int, string> sayilar4 = new Dictionary<int, string>()
        {
            {1,"Bir" },
            {2,"İki" },
            {3,"Üç" }
        };

        Console.WriteLine(sayilar4[1]);

        foreach(var plaka in plakalar)
        {
            Console.WriteLine($"{plaka.Key} {plaka.Value}");
        }

        for(int i = 0; i < urunler.Count; i++)
        {
            Console.WriteLine($"{plakalar.Keys.ElementAt(i)} {plakalar[plakalar.Keys.ElementAt(i)]}");
        }

        Console.WriteLine(plakalar.ContainsKey(34)); //34 sözlükte varmı
        Console.WriteLine(plakalar.Contains(new KeyValuePair<int, string>(46,"Kahramanmaraş")));

        plakalar.Remove(34); //silme işlemi


        Hashtable ht = new Hashtable()
        {

        };

        ht.Add(1, "a");
        ht.Add(2, "b");
        ht.Add(3, "c");


    }
}

class Product
{
   public string Name { get; set; }

}