import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' className=''>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src='https://i.pinimg.com/originals/4d/4d/4e/4d4d4edd4ed19b58b3534db2a1719e85.jpg'
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font bold text gray-800 '> Portofolio de Rémi </h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text gray-800'>
            Je suis 
            <TypeAnimation
              sequence={[
                'un developpeur web',
                1000,
                "a la recherche d'une alternance",
                2000,
              ]}
              wrapper='div'
              cursor='true'
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer 'size={20}/>
            <FaLinkedin className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
