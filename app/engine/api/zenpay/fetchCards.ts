import axios from "axios";
import * as t from "io-ts";
import { zenPayEndpoint } from "../../corp/ZenPayProduct";
import { Address } from "ton";
import { AppConfig } from "../../../AppConfig";

export const cardListCodec = t.union([
  t.type({
    ok: t.literal(true),
    accounts: t.array(
      t.type({
        id: t.string,
        address: t.string,
        state: t.string,
        balance: t.string,
        card: t.type({
          lastFourDigits: t.union([t.string, t.undefined, t.null]),
        }),
        contract: t.string
      })
    ),
  }),
  t.type({
    ok: t.literal(false),
    error: t.string,
  }),
]);

export async function fetchCards(address: Address) {
  let res = await axios.post(
    'https://' + zenPayEndpoint + '/public/cards',
    {
      walletKind: 'tonhub',
      network: AppConfig.isTestnet ? 'ton:testnet' : 'ton:mainnet',
      address: address.toFriendly({ testOnly: AppConfig.isTestnet })
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      }
    }
  );


  if (res.status === 401) {
    return null;
  }

  if (!cardListCodec.is(res.data)) {
    throw Error("Invalid card list response");
  }

  if (!res.data.ok) {
    throw Error(`Error fetching card list: ${res.data.error}`);
  }

  return res.data.accounts;
}