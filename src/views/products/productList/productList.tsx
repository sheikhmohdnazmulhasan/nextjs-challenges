import React from "react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
}) => {
  const router = useRouter();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex border p-2 justify-between">
          <div className="flex">
            <div>{product.id}</div>. {product.name}
          </div>
          <button onClick={() => router.push(`/products?id=${product.id}`)}>Details</button>
        </div>
      ))}
    </div>
  )
}