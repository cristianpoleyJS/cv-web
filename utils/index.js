import Airtable from 'airtable'
import apiKey from '_api-key'

export const getDataAirtable = async (baseKey, baseName) => {
  const res = []
  await new Promise((resolve) => {
    const base = new Airtable({ apiKey }).base(baseKey)
    base(baseName)
      .select()
      .firstPage((err, records) => {
        if (err) { console.error(err); return }
        records.forEach((record) => {
          res.push({
            id: record.id,
            ...record.fields
          })
        })
        resolve()
      })
  })
  return res
}
