import NavbarItem from './NavbarItem'

const items = [
  { title: 'Trending', param: 'fetchTrending' },
  { title: 'Top Rated', param: 'fetchTopRated' }
];

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-700 bg-amber-100 lg:text-lg p-4'>
        <NavbarItem items={items}/>
    </div>
  )
}