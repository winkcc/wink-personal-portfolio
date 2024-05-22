'use client'
import { motion } from 'framer-motion'

function Header() {
  return (
    <header>
      <p>This is Header!!</p>

      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
          borderRadius: '20px'
        }}
        animate={{
          x: 50, // 向右移动50px
          y: 20, // 向下移动20px
          scale: 0.5, // 缩放至0.5倍
          rotate: 45, // 旋转45度
          opacity: 0.5 // 不透明度设置为0.5
        }}
      ></motion.div>
    </header>
  )
}

export default Header
