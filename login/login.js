const login = document.getElementById('login');
const razor = document.getElementById('razorpay');


login.addEventListener('click',loginUser);


async function loginUser(event){
    try {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const loginDetails = {
            email,password
        }
       const userLogin =  await axios.post('http://localhost:4400/login',loginDetails);
       localStorage.setItem('token',userLogin.data.token);
      alert(userLogin.data.message);
      window.location.href="../expense/expense.html";
    } catch (err) {
     alert(err.response.data.message)
    }
} 


