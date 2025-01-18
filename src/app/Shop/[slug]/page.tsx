"use client"
import ProductBody from "@/components/ProductBody"

interface ProductDetailProps {
  params: {
    slug: string;
  };
}
export default function ProductDetailPage ({ params }: ProductDetailProps){
  
  return(
    <>
    <ProductBody params={params}/>
    </>
  )
}
