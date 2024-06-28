import { BASE_URL, DEVICE_ID } from "../constants/services";

export const createOrder = async () => {
  const url = `${BASE_URL}/orders_create`;
  const headers = new Headers({
    //   'Authorization': 'Basic ' + btoa('your-username:your-password'),
    "X-Device-Id": DEVICE_ID,
  });

  const formData = new FormData();
  formData.append("expected_output_amount", "1000");
  formData.append("input_currency", "BTC");
  formData.append("merchant_urlko", "https://merchant.com/urlko");
  formData.append("merchant_urlok", "https://merchant.com/urlok");
  formData.append("merchant_url_standby", "https://merchant.com/urlstandby");
  formData.append("notes", "Payment for services");
  formData.append("reference", "REF123456");
  formData.append("fiat", "EUR");
  formData.append("language", "ES");
  formData.append("home_address", "123 Main Street");
  formData.append("address_additional", "Apt 4B");
  formData.append("email_client", "client@example.com");
  formData.append("full_name", "John Doe");
  formData.append("address_number", "123");
  formData.append("zip_code", "12345");
  formData.append("city", "Madrid");
  formData.append("province", "Madrid");
  formData.append("country", "ES");
  formData.append("phone_number", "+34123456789");
  formData.append("nif", "12345678Z");
  formData.append("internal_data", "Internal info about the payment");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};
