import axios, { AxiosInstance } from 'axios'
import {
  BASE_API_URL,
  BASE_API_TIMEOUT,
} from '../utils'
import { GetAdsByWalletResponse } from '../utils/types'

interface SpellAPIParams {
  url: string
  timeout?: number
}

export class SpellApi {
  private apiInstance: AxiosInstance

  /**
   * Constructor of the SpellApi class
   *
   *
   * @returns the class instance with methods for api requests.
   * @param props
   */
  constructor(props?: SpellAPIParams) {
    this.apiInstance = axios.create({
      baseURL: props?.url || BASE_API_URL,
      timeout: props?.timeout || BASE_API_TIMEOUT,
    })
  }

  async getAdsByWallet(wallets: string[]): Promise<GetAdsByWalletResponse> {
    const data = {
      jsonrpc: '2.0',
      id: 1,
      method: 'getAdsByWallet',
      params: [wallets],
    }

    try {
      const response = await this.apiInstance.post('', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`HTTP error: ${error.response?.status}`, error.message)
      } else {
        console.error('Error fetching data:', error)
      }
      throw error

    }
  }
}

export default SpellApi