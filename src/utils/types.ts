interface Status {
  timestamp: string;
  error_code: number;
  error_message: null | string;
}

interface Wallet {
  wallet: string;
  amount: string | number;
}

interface Data {
  title: string;
  url: string;
  description: string;
  wallets: Wallet[];
}

interface GetAdsByWalletResponse {
  status: Status;
  data: Data;
}

export type {
  GetAdsByWalletResponse,
}
