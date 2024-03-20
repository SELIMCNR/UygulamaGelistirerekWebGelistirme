internal class Program
{
    private static void Main(string[] args)
    {
        // OOP: QUİZ UYGULAMASI
        var q1 = new Question("En iyi programlama dili hangisidir ? ", new string[] { "Java", "Python", "Java", "C++" }, "Java");
        var q2 = new Question("En popüler programlama dili hangisidir ? ", new string[] { "Python", "C#", "Java", "C++" }, "Python");
        var q3 = new Question("En çok kazandıran programlama dili hangisidir ? ", new string[] { "C#", "Python", "Java", "C++" }, "C#");


        var questions = new Question[] { q1, q2, q3 };
        
        //sorular
        var quiz = new Quiz(questions);
        quiz.DisplayQuestion();




        }
    }

    class Quiz
    {
        public Quiz(Question[] questions)
        {
            this.Questions = questions;
            this.QuestionIndex = 0;
        this.Score = 0;
        }
        private Question[] Questions {  get; set; }  
        private int QuestionIndex { get; set; }
        private int Score { get; set; }


        public Question GetQuestion()
        {
            return this.Questions[this.QuestionIndex];
        }
    public void DisplayQuestion()
    {
        var question = this.GetQuestion();
        this.DisplayProgress();
        Console.WriteLine($"soru {this.QuestionIndex++} :  ${question.Text}");
        foreach (var c in question.Choices)
        {
            Console.WriteLine($"-{c}");
        }

        Console.Write("cevap : ");
        var cevap = Console.ReadLine();
        this.Guess(cevap);
    }      
        public void Guess  (string answer)
        {
            var question = this.GetQuestion();
        if (question.checkAnswer(answer))
        {
            this.Score++;
        }
            this.QuestionIndex++;
        if(this.Questions.Length == this.QuestionIndex)
        {
            this.DisplayScore();
        }
        else
        {
            this.DisplayQuestion();
        }
  
        }

           private void DisplayScore()
            {
            Console.WriteLine($"Scores: {this.Score}");
            }

           private void DisplayProgress()
        {
            int totalQuestion = this.Questions.Length;
            int questionNumber = this.QuestionIndex +1;
                if (totalQuestion >= questionNumber)
            {
                Console.WriteLine($"Question {questionNumber} of {totalQuestion}");
             }
        }
    }
    

    class Question
    {
        public Question(string text, string[] choices, string answer)
        {
            this.Text = text;
            this.Choices = choices;
            this.Answer = answer;
        }
        public string Text { get; set; }
        public string[] Choices { get; set; }

        private string Answer { get; set; }


        //cevap verme
        public bool checkAnswer(string answer)
        {
            return this.Answer.ToLower() == answer.ToLower();
        }


    }
