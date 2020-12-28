const fs = require('fs')
const path = require('path')

const data = fs.readFileSync('./01.简单题目MD格式转换.md', { encoding: 'utf-8' })
// * 获取全部 data
// * 按照 # 类型进行分组
const group = {}

data.replace(/\n?#\s([\u4e00-\u9fa5]+)[^#]+\n/g, (content, $1) => {
  group[$1] = content
})

let index = 1
let keyIndex = 1

const regExp = /\|\s(\d+|([\u4e00-\u9fa5]+)\s.+)\s\|\s+\[([\u4e00-\u9fa5]+)\]\((.+)\)\s+\|\s\[(\d+)\]\((.+)\)/g

for (let key in group) {
  const da = group[key]
  const dir = `../src/${keyIndex >= 10 ? keyIndex++ : keyIndex++}.${key}`
  const isExist = fs.existsSync(dir) 
  if (isExist) {
    da.replace(regExp, (content, $1, $2, $3, $4) => {
      // console.log($1, $2, $3, $4)
      // return
      fs.writeFile(path.join(dir, `/${index >= 10 ? index++ : `0${index++}`}.[ ${$1} ] ${$3}.js`), `/**
 * * 题目名称：${$3}
 * * 题目地址：${$4}
 */

// * 思路：



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');`, (err) => {
        if (err) {
          console.log(err, '写入文件失败');
        }
      })
    })
  } else {
    // 创建文件夹
    fs.mkdir(dir, (err) => {
      if (err) {
        console.log('创建文件夹失败', err);
      // eslint-disable-next-line no-empty
      } else {

      }
    })
  }
  index = 1
}