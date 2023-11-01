import axios from "axios"

export const search = async (keyword: string, epNumber: string | number) => {
  const res = await axios.get(
    `https://my-api.oyyds.top/api/danmaku/search?keyword=${keyword}&epNumber=${epNumber}`,
  )
  const data = res.data
  const list = data.data.data.map((dmStr: string) => {
    const arr = dmStr.split(",")
    return {
      text: arr[3], // 弹幕文本
      time: Number(arr[0]), // 发送时间，单位秒
      color: arr[2], // 弹幕局部颜色
      border: false, // 是否显示描边
      mode: 0, // 弹幕模式: 0表示滚动, 1静止
    }
  })
  return {
    list,
    total: data.total,
  }
}

export default {
  search,
}
