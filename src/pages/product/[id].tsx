import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>T-Shirt X</h1>
        <span>$79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
          nisl eget tincidunt luctus, nunc nisl aliquet nisl, vitae aliquet nisl
          nunc et nunc. Sed euismod, nisl a tincidunt luctus, nunc nisl aliquet
          nisl, vitae aliquet nisl nunc et nunc. Sed euismod, nisl a tincidunt
          luctus, nunc nisl aliquet nisl, vitae aliquet nisl nunc et nunc.
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
