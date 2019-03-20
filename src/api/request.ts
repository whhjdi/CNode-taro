import Taro from "@tarojs/taro";

export default async function request(
  url: string,
  method: any = "GET",
  data?: any
): Promise<Taro.request.Promised<any>> {
  return new Promise((resolve, reject) => {
    Taro.request({ url, method, data })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
