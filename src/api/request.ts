import Taro from "@tarojs/taro";

export default async function request(
  url: string,
  method: any,
  data?: any
): Promise<Taro.request.Promised<any>> {
  console.log(data, "data");

  return new Promise((resolve, reject) => {
    Taro.showLoading();
    Taro.request({
      url,
      method,
      data,
      header: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        Taro.hideLoading();
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
