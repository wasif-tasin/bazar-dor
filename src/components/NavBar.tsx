import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

const NavBar = () => {
    const date = new Date().toLocaleDateString
        (
            "bn-BD", {
            dateStyle: "full"
        }
        )
    return (
            <div>
            <div className='border-b-2 border-gray-200 pt-3 pb-2'>
                    <Link href={'/'}>
                        <div className='relative flex justify-start items-center gap-3 container mx-auto'>
                            <Image
                                src="/logo-icon.png"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                            <div>
                                <h1 className='text-3xl font-bold'>বাজার দর</h1>
                                <p className='text-gray-400 text-lg'>{date}</p>
                            </div>
                            <h1 className='absolute right-0 flex justify-end'>Profile</h1>
                        </div>
                    </Link>
                </div>
                <NavLinks></NavLinks>
            </div>
        );
};

export default NavBar;