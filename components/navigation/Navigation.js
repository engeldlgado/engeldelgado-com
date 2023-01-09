/* This example requires Tailwind CSS v2.0+ */
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import Logo from '../svg/Logo'

export default function Navigation ({ setTheme, theme }) {
  return (
    <div className='fixed z-40 navbar bg-base-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
          </label>
          <ul tabIndex={0} className='p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a className='justify-between'>
                Parent
                <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>
              </a>
              <ul className='p-2'>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Logo className='hidden w-56 dark:fill-white fill-black md:ml-20 lg:block' />
      </div>
      <div className='flex navbar-center lg:hidden'>
        <Logo className='dark:fill-white w-44' />
      </div>
      <div className='hidden navbar-center lg:flex'>
        <ul className='px-1 menu menu-horizontal'>
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
            </a>
            <ul className='p-2'>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className='navbar-end'>
        {/* Dark/Light button */}
        <button
          type='button'
          className='btn btn-ghost rounded-btn'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <SunIcon className='w-5 h-5' /> : <MoonIcon className='w-5 h-5' />}
        </button>

      </div>
    </div>
  )
}
