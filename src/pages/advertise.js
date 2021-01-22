import React from 'react'
import AdvertiseForm from '../components/advertiseForm'
export default () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="text-6xl">nathanchu.com</span>
        <svg
          className="max-w-screen w-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
        >
          <path
            fill="#DD2E44"
            d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
          />
        </svg>
        <span className="text-6xl">open source</span>
      </div>
      <br />
      <span className="text-3xl text-center">
        If your project is open source and needs advertising,
        <br />
        fill out the form below to advertise on my website for free
      </span>
      <br />
      <AdvertiseForm />
    </div>
  )
}
