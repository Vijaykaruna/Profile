import guestie from "../assets/image/guestie-img.png";
import tempGuestie from "../assets/image/img-attandance.jpg";
import todo from "../assets/image/ToDo_image.png";
import tempToDo from "../assets/image/img-todo.jpg";
import calculator from "../assets/image/Calculator-img.png";
import TempCalculate from "../assets/image/img-calculator.jpg";
import currency from "../assets/image/Currency-img.png";
import tempCurrency from "../assets/image/img-currency.jpg";
import book from "../assets/image/Book-img.png";
import tempBook from "../assets/image/img-book.jpg";
import quiz from "../assets/image/Quiz-img.png";
import tempQuiz from "../assets/image/img-quiz.jpg";

  
  export const listProject = [
    {
      id: "guestie",
      name: "Ecommerce - Guestie",
      type: "MERN Stack",
      template: tempGuestie,
      img: guestie,
      desc: "This website organizated for hotel management system. By using time reduce and order the foods also track the foods details. The Rating system to knows the review in the hotel management.",
      link: "none",
      repo: "https://github.com/Vijaykaruna/Ecom_Guestie",
    },
    {
      id: "todo",
      name: "To-Do List",
      type: "MERN Stack",
      template: tempToDo,
      img: todo,
      desc: "A to-do list is just a list of things you have to-do. That means basically anything and everything can be on your to-do list—but just because you've written your to-dos down doesn't mean your to-do list is actually useful.",
      link: "https://calm-rugelach-a198b4.netlify.app/",
      repo: "https://github.com/Vijaykaruna/ToDo_List",
    },
    {
      id: "currency",
      name: "Currency Converter",
      type: "HTML, CSS, JavaScript",
      template: tempCurrency,
      img: currency,
      desc: "A universal currency converter is a website that provides for the easy conversion of currency values based on present-day exchange rates. Such currency converters can easily be found for free on the Internet, and can quickly convert the value of currency.",
      link: "https://vijaykaruna.github.io/Currency-Converter/",
      repo: "https://github.com/Vijaykaruna/Currency-Converter",
    },

    {
      id: "bookstore",
      name: "Online Book Store",
      type: "HTML, CSS",
      template: tempBook,
      img: book,
      desc: "An online book store is a web application that allows customers to buy books online. Customers can search for a book by title or author using a web browser, add it to their shopping cart, and then purchased.",
      link: "https://vijaykaruna.github.io/OnlineBookStore/",
      repo: "https://github.com/Vijaykaruna/OnlineBookStore",
    },

    {
      id: "quiz",
      name: "Online Quiz",
      type: "HTML, CSS, Java Script",
      template: tempQuiz,
      img: quiz,
      desc: "An online quiz, you can provide individual feedback to participants for both correct answers and incorrect ones. For example, by showing the correct answers or by providing instructive content and facts",
      link: "https://vijaykaruna.github.io/Quiz_page/",
      repo: "https://github.com/Vijaykaruna/Quiz_page",
    },

    {
      id: "calculator",
      name: "Sample Calculator",
      type: "HTML, CSS, Java Script",
      template: TempCalculate,
      img: calculator,
      desc: "This sample calculator allows you to calculate the required responding sample size, standard error, RSE, and a confidence interval (95% or 99%) for a proportio estimate, using just one of these criteria as an input.",
      link: "https://vijaykaruna.github.io/Calculator/",
      repo: "https://github.com/Vijaykaruna/Calculator",
    },
  ];