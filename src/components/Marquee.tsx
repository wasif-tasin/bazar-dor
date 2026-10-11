import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Product = {
    id: number;
    nameBn: string;
    categoryIcon: string;
    today: number;
    change: {
        dir: "up" | "down";
        pct: number;
    };
};

export default async function Marquee() {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products",)
    const data = await res.json();
    const products: Product[] = data;

    return (
        <MarqueeText direction="right" duration={30}>
            {products.map((product) => (
                <span
                    key={product.id}
                    className="inline-flex items-center gap-3 border-r border-gray-200 px-5 py-3"
                >
                    <span>{product.categoryIcon}</span>
                    <span className="whitespace-nowrap">{product.nameBn}</span>
                    <span className="whitespace-nowrap">
                        {product.today} টাকা/কেজি
                    </span>
                    <span
                        className={
                            product.change.dir === "up"
                                ? "whitespace-nowrap font-bold text-red-500"
                                : "whitespace-nowrap font-bold text-green-600"
                        }
                    >
                        {product.change.dir === "up" ? "▲" : "▼"}{" "}
                        {Math.abs(product.change.pct)}%
                    </span>
                </span>
            ))}
        </MarqueeText>
    );
}