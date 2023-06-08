import { View, Text } from '@tarojs/components'
import { useLoad,  } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const [state, setState] = useState('Hello world!')
  useEffect(() => {
    setTimeout(() => {
      setState('changed')
    }, 2000)
  }, [])

  return (
    <View className='index'>
      <Text onClick={() => {
        window.location.href = 'https://www.baidu.com'
      }}>{state}</Text>
    </View>
  )
}
