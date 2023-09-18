import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true"

export const loader = async () => {
   const request = await customFetch(url)
   const products = request.data.data
   return { products }
}

function Landing() {

   return (
      <>
         <section className="py-20">
            <Hero />
            <FeaturedProducts />
         </section>
      </>
   )
}

export default Landing