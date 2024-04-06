import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-900 bg-amber-100 p-4 justify-center gap-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
