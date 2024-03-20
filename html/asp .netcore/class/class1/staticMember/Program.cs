internal class Program
{
    private static void Main(string[] args)
    {
        var s1 = new Student("Çınar", 100);
        var s2 = new Student("Sena", 101);
        var s3 = new Student("Yiğit", 102);

        Student.DisplaySchoolDetails();

        s1.DisplayStudentDetails();
        s2.DisplayStudentDetails();
        s3.DisplayStudentDetails();

        //static class
        string str = "ölçme ve değerlendirme";
        var result = HelperMethods.KarakterDuzel(str);
        Console.WriteLine(result);

        Math.Sqrt(9); // STATİC SINIF
    }
    class Student
    {
        public string Name { get; set; }
        public int StudentNumber { get; set; }

        public static string School = "My school";

        public static string Address = "My school address";

        public Student(string name, int studentNumber)
        {
            Name = name;
            StudentNumber = studentNumber;
        }

        public void DisplayStudentDetails()
        {
            Console.WriteLine($"name: {this.Name} number : {this.StudentNumber}");


        }

        public static void DisplaySchoolDetails()
        {
            Console.WriteLine($"school name: {School} address: {Address}");
        }
    }

    static class HelperMethods
    {
        public static string KarakterDuzel(string str)
        {
            return str.Replace("ö", "o")
                .Replace("ü", "u")
                .Replace("ç", "c")
                .Replace(" ", "-")
                .Replace("ğ", "g");

        }
    }
}
