import useAppContext from "../../hooks/useAppContext"

const ScrollDownButton = () => {
    const { changeLanguage } = useAppContext();

    return (
    <div className="rotate-180 ">
        <a href={changeLanguage ? '#about' : '#acerca'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 tablet:w-9"
            color="#ff4a57"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
    </div>
  )
}

export default ScrollDownButton