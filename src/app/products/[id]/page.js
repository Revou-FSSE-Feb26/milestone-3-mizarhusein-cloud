import Navigation from "@/components/Navigation";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }) {

  const resolvedParams = await params;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <ProductDetail productId={resolvedParams.id} />
    </div>
  );
}