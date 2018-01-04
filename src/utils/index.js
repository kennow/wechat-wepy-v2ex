import wepy from 'wepy'

// V2EX API
export const API = 'https://www.v2ex.com/api/'

// 错误提示
export const showErrorToast = () => {
  wepy.showToast({
    title: '请求失败',
    icon: 'loading',
    duration: 2000,
    mask: true
  })
}

// 发起请求
export const showLoading = () => {
  wepy.showLoading({
    title: '请求数据中',
    mask: true
  })
}

// 获取到的图片地址为默认时，则替换为默认图片
export const imageReset = url => {
  const key = '/static/img/node_large.png'
  const defaultImage = '../assets/image/default.jpg'
  const prefix = 'https:'
  return url === key ? defaultImage : `${prefix}${url}`
}

// 从全文获取内容简介
export const getIntro = content => {
  const precision = 60
  if (content.length > precision) {
    return `${content.slice(0, precision)}......`
  } else {
    return content
  }
}

// 抽象出 reset panelData 的公共方法
export const panelDataReset = item => {
  item.avatarSrc = imageReset(item.member.avatar_large)
  item.contentIntro = getIntro(item.content)
  item.username = item.member.username
  item.subTitle = item.username
  return item
}

// 抽象出 reset memberData 的公共方法
export const memberDataReset = item => {
  item.avatarSrc = imageReset(item.avatar_large)
  item.title = item.username
  item.subTitle = `@${item.id}`
  return item
}

// 抽象出 reset commentData 的公共方法
export const commentDataReset = item => {
  item.avatarSrc = imageReset(item.member.avatar_large)
  item.title = item.member.username
  return item
}
