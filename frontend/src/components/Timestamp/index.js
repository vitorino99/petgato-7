import { useEffect, useState } from "react"

const timestampConverter = (timestampStr) => {
  const timestamp = new Date(timestampStr)

  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  const formatIntNumber = num => ("0" + num).slice(-2)

  const detailedDate = {
    year: timestamp.getFullYear(),
    month: months[timestamp.getMonth()],
    day: formatIntNumber(timestamp.getDate()),
    hours: formatIntNumber(timestamp.getHours()),
    minutes: formatIntNumber(timestamp.getMinutes())
  }

  return {
    date: `${detailedDate.day} de ${detailedDate.month} de ${detailedDate.year}`,
    time: `${detailedDate.hours}h${detailedDate.minutes}`
  }
}

const Timestamp = ({ timestamp, publishedOn, hasTime, ...props }) => {
  const [response, setResponse] = useState(timestamp)
  useEffect(() => setResponse(timestampConverter(timestamp)), [timestamp])

  return (<p {...props} style={{
    color: '#707070',
    fontWeight: 300,
    fontStyle: 'italic',
    ...props.style
  }}>
    {(publishedOn ? 'Publicado em ' : '') + response.date + (hasTime ? ` às ${response.time}` : '')}
  </p>);
}

export default Timestamp;