import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";

const Form = () => {
  const { changeLanguage } = useAppContext();
  const [getClientEmail, setGetClientEmail] = useState('');
  const [getMessage, setGetMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [emailSended, setEmailSended] = useState(false);

  const user = {
    from: '',
    to: 'luciogastellu.dev@gmail.com',
    subject: 'Wants connect',
    message: ''
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    user.from = getClientEmail
    user.message = getMessage
    
    try {
        const response = await fetch('https://personal-portfoliolucio.up.railway.app/sendEmail', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "developer-id": 19072001
            }
        })        
        const data = await response.json()
        if (data.message === '') {}
    } catch (error) {
        console.error(error);
    }
  }

  const handleOnChange = (e) => {
    setGetClientEmail(e.target.value)

    const regEx =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    if (regEx.test(getClientEmail)) setValidEmail(true)
    else setValidEmail(false)
  }

  return (
    <form className="w-[100%] flex flex-col form-animation relative -left-[1000px]" onSubmit={handleSubmit}>
      <input
        name="from"
        type="text"
        placeholder="Email"
        className="w-[100%] mt-5 p-2 bg-[#282a41] outline-none placeholder:text-[#6f728f] text-[#b7b9c7]"
        onChange={handleOnChange}
      />
      {validEmail ? '' : <p className="font-paragraph text-[#ff4a57] text-sm">Invalid email.</p>}
      <textarea
        name="message"
        cols="30"
        rows="1"
        placeholder={changeLanguage ? "Message" : "Mensaje"}
        className="w-[100%] mt-5 p-2 bg-[#282a41] outline-none placeholder:text-[#6f728f] text-[#b7b9c7]"
        onChange={(e) => setGetMessage(e.target.value)}
      ></textarea>

      <div className="flex justify-end w-full mt-5">
        <button
          className={`${validEmail ? 'bg-[#ff4a57]' : 'bg-[#ff4a56ba]'} p-2 ${changeLanguage ? "w-[70%]" : "w-[50%]"} flex font-paragraph font-medium transition-all ease-in duration-200`}
          disabled={validEmail ? false : true}
          >
          <p className="ml-1">
            {changeLanguage ? "Stay connected" : "Conecta"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mt-0.5 ml-2"
          >
            <path
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

    </form>
  );
};

export default Form;
