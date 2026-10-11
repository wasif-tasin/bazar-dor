
import Link from "next/link";

export interface INav {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
    );
    const data = await response.json();
    const nav: INav[] = data;

    return (
        <nav className="container mx-auto mt-3 mb-4 px-4 font-bold">
            <div className="dropdown md:hidden">
                <button
                    type="button"
                    tabIndex={0}
                    className="btn btn-ghost btn-sm"
                >
                    ☰ Categories
                </button>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content z-50 mt-2 w-52 rounded-box bg-white p-2 shadow-lg"
                >
                    <li>
                        <Link href="/">হোম</Link>
                    </li>
                    {
                        nav.map((item) => (
                            <li key={item.id}>
                                <Link href={`/category/${item.slug}`}>
                                    {item.icon} {item.nameBn}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="hidden items-center justify-start gap-8 md:flex">
                <Link href="/">হোম</Link>

                {nav.map((item) => (
                    <Link key={item.id} href={`/category/${item.slug}`}>
                        {item.icon} {item.nameBn}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLinks;
