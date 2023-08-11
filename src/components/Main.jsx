import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' class='relative'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src='https://i.pinimg.com/originals/4d/4d/4e/4d4d4edd4ed19b58b3534db2a1719e85.jpg'
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1> Portofolio de Rémi </h1>
          <h2 className=''>
            Je suis un
            <TypeAnimation
              sequence={[
                'Developpeur web',
                1000,
                'Et je cherche une alternance',
                2000,
              ]}
              wrapper='div'
              cursor='true'
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <FaTwitter className='cursoer-pointer size' />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
