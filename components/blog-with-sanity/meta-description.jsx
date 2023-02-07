import { toPlainText } from '@portabletext/react'

export default function MetaDescription({ value }) {
  return (
    <meta key="description" name="description" content={toPlainText(value)} />
  )
}
