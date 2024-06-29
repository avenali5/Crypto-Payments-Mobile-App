export async function orders_list(deviceId: string) {
  const url = `https://payments.pre-bnvo.com/api/v1/orders/`;
  const headers = {
    "X-Device-Id": deviceId,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}
