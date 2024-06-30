import axios from "axios";
import { CreateOrderResponseType } from "../types";

type Props = {
  amount: number;
  reference?: string;
  fiat: string;
};

export async function postOrder({
  amount,
  reference,
  fiat,
}: Props): Promise<CreateOrderResponseType> {
  const data = {
    expected_output_amount: amount,
    reference: reference,
    fiat: fiat,
  };

  try {
    const response = await axios.post(
      "https://payments.pre-bnvo.com/api/v1/orders/",
      data,
      {
        headers: {
          "X-Device-Id": "ec8eccef-f2d1-40f4-82e1-c6c52eee92e6",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
