import { IoArrowBack } from 'react-icons/io5'

const Country = () => {
  return (
    <div>
      <button
        className='flex items-center gap-2 p-2 px-8 my-4 shadow-md'
        onClick={() => window.history.back()}
      >
        <IoArrowBack />
        Back
      </button>
    </div>
  )
}

export default Country
