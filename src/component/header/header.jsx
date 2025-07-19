import boy from '../../assets/images/boy1.png'

const Header = () => {
    return (
        <div className='mx-10 my-5 flex justify-between items-center border-b-2 p-2'>
           <h3 className='text-2xl'>Knowledge Cafe</h3>
           <img src={boy} className='h-15' alt="" />
        </div>
        
    );
};

export default Header;