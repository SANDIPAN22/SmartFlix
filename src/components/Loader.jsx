import { MutatingDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        
<MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#c20808"
  secondaryColor="#8b1111"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />


    </div>
  )
}

export default Loader