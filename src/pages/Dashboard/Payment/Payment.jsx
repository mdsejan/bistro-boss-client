import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        Heading={"Payment"}
        subHeading={"---Please pay to eat---"}
      ></SectionTitle>
      <div className="max-w-screen-md mx-auto">
        <Elements stripe={stripePromise}>
          <CheackoutForm></CheackoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
