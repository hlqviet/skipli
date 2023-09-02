'use client'

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren, useMemo } from 'react'

const StyledComponentsRegistry = ({ children }: PropsWithChildren<{}>) => {
  const cache = useMemo(() => createCache(), [createCache])
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ))
  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
