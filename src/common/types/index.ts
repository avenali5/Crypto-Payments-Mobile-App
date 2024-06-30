export type CreateOrderResponseType = {
  fiat: string;
  identifier: string;
  language: string;
  need_dni: false;
  reference: string;
  web_url: string;
};

export type PaymentDataProps = {
  date: string;
  identifier: string;
  total: number;
  fiat: string;
  cripto: string;
  reference: string;
};
