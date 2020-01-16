const truncate = (text) => {
  let output = text
  if (text.length > 100) {
    output = output.substring(0, 100) + '...'
  }
  return output
}

const datetimeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

export { truncate, datetimeTag }
