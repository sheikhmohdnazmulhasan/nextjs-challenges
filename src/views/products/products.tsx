"use client";

import React from "react";
import { Product } from "@/types";
import { ProductModal } from "@/views/products/productModal/productModal";
import { BackToHome } from "@/components/backToHome/backToHome";
import { ProductList } from "@/views/products/productList/productList";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_DATA } from "@/data/productsData";
import { useSearchParams } from "next/navigation";

export const Products: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const selectedProduct = PRODUCTS_DATA.find((productId: Product) => productId.id === id);

  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    handlePageChange,
  } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });


  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts} />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} />
      )}
    </div>
  );
};
