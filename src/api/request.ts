import Taro from "@tarojs/taro";

export default function request(url: string, method: any = "GET", data: any) {
  return Taro.request({ url, method, data });
}
