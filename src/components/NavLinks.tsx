import Link from "next/link";

export interface INav {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const NavLinks = async () => {

    const response = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`)
    }

    const data = await response.json();
    const nav: INav[] = data;

    return (
        <div className=" flex gap-8 justify-start mt-3 container mx-auto font-bold">
        <Link href={'/'}>হোম</Link>      
        {nav.map((items) => <Link key={items.id} href={`/category/${items.slug}`}>{items.icon}{items.nameBn}</Link>)}
        </div>
    );
};

export default NavLinks;